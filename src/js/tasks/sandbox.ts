// /*
// А может можно как-то заставить это работать?
// Подсказка: придется явно определить тип возвращаемого значения и прям туда воткнуть условие
// Entity extends? ....
// Или все-таки нет ;)

type Id<Prefix extends string> = { id: `${Prefix}_${string}` };

type Person = Id<"c"> & {
  kind: "person";
  email: string | null;
  name: string;
};

type Company = Id<"p"> & {
  kind: "company";
  foundedAt: string;
  name: string;
  domain: string;
};

type Result<Entity extends Person | Company> = Entity extends Person
  ? {
      id: Person["id"];
      kind: Person["kind"];
      name: Person["name"];
      hint: Person["email"] | "no-email";
    }
  : {
      id: Company["id"];
      kind: Company["kind"];
      name: Company["name"];
      hint: Company["domain"] | "no-domain";
    };

function makeSearchResult<Entity extends Person | Company>(
  e: Entity,
): Result<Entity> {
  return {
    id: e.id,
    kind: e.kind,
    name: e.name,
    hint: "email" in e ? (e.email ?? "no-email") : (e.domain ?? "no-domain"),
  };
}
