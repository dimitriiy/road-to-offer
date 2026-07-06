type EventMap = Record<string, any>;

type Handler<T> = [T] extends [void] ? () => void : (value: T) => void;

class Emitter<T> {
  private events: {
    [K in keyof T]?: Set<Handler<T[K]>>;
  } = {};

  on<K extends keyof T>(event: K, handler: Handler<T[K]>) {
    if (!this.events[event]) {
      this.events[event] = new Set();
    }

    this.events[event].add(handler);
    return () => this.off(event, handler);
  }

  off<K extends keyof T>(event: K, handler: Handler<T[K]>) {
    if (!this.events[event]) return;

    this.events[event].delete(handler);

    if (this.events[event].size === 0) {
      delete this.events[event];
    }
  }

  emit<E extends keyof T>(
    event: E,
    ...args: [T[E]] extends [void] ? [] : [payload: T[E]]
  ) {
    if (!this.events[event]) return;

    for (const handler of this.events[event]) {
      if (args.length === 0) {
        (handler as () => void)();
      } else {
        (handler as (payload: T[E]) => void)(args[0]);
      }
    }
  }
}

function createEmitter<E extends EventMap>() {
  return new Emitter<E>();
}

interface AppEvents {
  login: { userId: string; token: string };
  logout: void;
  error: { code: number; message: string };
}

const emitter = createEmitter<AppEvents>();

emitter.on("login", (payload) => {
  console.log(payload.token); // payload: { userId: string; token: string }
});

emitter.emit("login", { userId: "1", token: "abc" }); // OK
emitter.emit("logout"); // OK

// emitter.emit('login', { userId: '1' }); // Ошибка: нет token
// emitter.emit('unknown', {}); // Ошибка: нет такого события

const off = emitter.on("error", (e) => console.log(e.code));
off();
