import React from "react";

function Spinner() {
  return <div>...loading</div>;
}

function ErrorMessage({ error }: { error: Error }) {
  return <h1>{error.message}</h1>;
}
type Todo = {
  id: number;
  title: string;
};

type State<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: Error };

class HttpError extends Error {
  status: number;
  statusText: string;
  body?: unknown;

  constructor(response: Response, body?: unknown) {
    super(`HTTP ${response.status} ${response.statusText}`);
    this.name = "HttpError";
    this.status = response.status;
    this.statusText = response.statusText;
    this.body = body;
  }
}

const getError = (error: unknown) => {
  if (error && error instanceof Error) return error;

  try {
    return new Error(JSON.stringify(error), { cause: error });
  } catch (e) {
    return new Error(String(error), { cause: error });
  }
};

function parseBody(response: Response) {
  const contentType = response.headers.get("content-type");

  if (contentType && contentType.includes("application/json")) {
    return response.json();
  }

  return response.text();
}

export function useFetch<T>(url: string): State<T> {
  const [state, setState] = React.useState<State<T>>({ status: "idle" });
  const requestIdRef = React.useRef(1);

  React.useEffect(() => {
    const abortController = new AbortController();
    requestIdRef.current += 1;

    const request = async (
      url: string,
      abortController: AbortController,
      requestId: number,
    ) => {
      try {
        setState({ status: "loading" });

        const response = await fetch(url, {
          method: "GET",
          signal: abortController.signal,
        });

        if (requestId < requestIdRef.current) {
          return;
        }

        const data = await parseBody(response);

        if (!response.ok) {
          throw new HttpError(response, data);
        }

        setState({
          data,
          status: "success",
        });
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        setState({
          error: getError(error),
          status: "error",
        });
      }
    };

    request(url, abortController, requestIdRef.current);

    return () => {
      abortController.abort();
    };
  }, [url]);
  return state;
}

// Использованиeе:
function UserProfile({ id }: { id: string }) {
  const result = useFetch<Todo>(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
  );

  if (result.status === "idle") return null;

  if (result.status === "loading") return <Spinner />;
  if (result.status === "error") return <ErrorMessage error={result.error} />;

  return <h3>{result.data?.title ?? "No"}</h3>;
}

export default function App() {
  const [value, setV] = React.useState(1);

  return (
    <div className="App">
      <h1 onClick={() => setV((p) => p + 1)}>@opentf/react-sandbox</h1>
      <UserProfile id={value.toString()} />
    </div>
  );
}
