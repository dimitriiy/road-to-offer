# Road to Offer: Senior Frontend Interview Prep

Репозиторий для структурированной подготовки к собеседованию на позицию Senior Frontend Engineer.  
Период: **15 июня — 15 августа 2026**.

## О чём репозиторий

Здесь ведётся календарь занятий, конспекты, решённые задачи и заметки по системному дизайну.  
Основной фокус — JavaScript, React, алгоритмы, frontend system design и soft skills.

## Структура

- `senior-frontend-calendar-2026-06-14-to-2026-08-14.md` — исходный календарь с расписанием, недельными целями и планами созвонов с ментором.
- Конспекты и решения задач добавляются по мере прохождения тем.

---

## TODO по дням

### Неделя 1 (15–21 июня) — JS fundamentals, Promise, hash map

- [ ] **15.06 (Пн)** — JS execution model: scope, closures, hoisting  
      Реализовать: `once`, `memoize`, `counter`. Алгоритмы: Two Sum, Valid Anagram.
- [ ] **17.06 (Ср)** — Event Loop, Promise, async/await  
      Реализовать: `promiseAll`, `delay`. Проговорить microtasks/macrotasks.
- [ ] **19.06 (Пт)** — Hash map и строки  
      Group Anagrams, Top K Frequent Elements. Проговорить Big-O и edge cases.
- [ ] **21.06 (Вс)** — Созвон с ментором: framework ответа system design  
      Отработать шаблон: requirements, API, components, data flow, performance, security.

### Неделя 2 (22–28 июня) — Асинхронные утилиты, prototypes, two pointers

]

- [ ] **22.06 (Пн)** — Асинхронные декораторы  
      Реализовать: `debounce`, `throttle`, `retry`. Обсудить backoff и cancellation.
- [ ] **24.06 (Ср)** — `this`, prototype, bind/call/apply  
      Реализовать: `myBind`, `instanceOf`, `newOperator`. Разобрать pitfalls.
- [ ] **26.06 (Пт)** — Two Pointers  
      Valid Palindrome, Two Sum II, 3Sum. Проговорить паттерн «sort + two pointers».
- [ ] **28.06 (Вс)** — Созвон с ментором: Autocomplete design  
      Спроектировать autocomplete в чате: debounce, cache, API, keyboard, race conditions.

### Неделя 3 (29 июня–5 июля) — React rendering, JS data structures, sliding window

- [ ] **29.06 (Пн)** — Структуры данных в JS  
      Map/Set/WeakMap. Реализовать: `groupBy`, `uniqueBy`, `flatten`.
- [ ] **01.07 (Ср)** — React rendering model  
      Reconciliation, keys, batching. Реализовать Tabs или Accordion.
- [ ] **03.07 (Пт)** — Sliding Window  
      Longest Substring Without Repeating Characters, Minimum Size Subarray Sum.
- [ ] **05.07 (Вс)** — Созвон с ментором: админка с RBAC  
      Спроектировать админку: роли, таблицы, формы, audit log, permissions, API.

### Неделя 4 (6–12 июля) — Hooks, TypeScript, binary search

- [ ] **06.07 (Пн)** — React Hooks  
      `useEffect`, `useLayoutEffect`, `useRef`. Реализовать: `useDebouncedValue`, `usePrevious`.
- [ ] **08.07 (Ср)** — TypeScript для frontend  
      Generics, utility types, discriminated unions. Типизированный async state.
- [ ] **10.07 (Пт)** — Binary Search  
      Binary Search, Search Insert Position, Find First and Last Position.
- [ ] **12.07 (Вс)** — Созвон с ментором: marketplace/product page  
      SSR/CSR/ISR, SEO, cache, images, personalization, Core Web Vitals.

### Неделя 5 (13–19 июля) — Forms, state/cache, DFS/BFS

- [ ] **13.07 (Пн)** — Forms, validation, API state  
      Форма с client/server validation. Обработка loading/error/empty states.
- [ ] **15.07 (Ср)** — State management и server cache  
      Client state vs server state, Context, React Query-подход, cache invalidation.
- [ ] **17.07 (Пт)** — DFS/BFS  
      Maximum Depth, Level Order, Number of Islands. Recursion vs queue.
- [ ] **19.07 (Вс)** — Созвон с ментором: дизайн-система  
      Tokens, theming, component API, versioning, migrations, visual regression.

### Неделя 6 (20–26 июля) — Browser, network, intervals

- [ ] **20.07 (Пн)** — Browser rendering  
      Critical rendering path, layout/paint/composite. LCP/CLS диагностика.
- [ ] **22.07 (Ср)** — Network, CORS, cookies, storage  
      CORS/preflight, SameSite/HttpOnly/Secure, access token strategy.
- [ ] **24.07 (Пт)** — Greedy и intervals  
      Merge Intervals, Non-overlapping Intervals, Jump Game.
- [ ] **26.07 (Вс)** — Созвон с ментором: микрофронтенды  
      Boundaries, shared deps, routing, auth, observability, rollback.

### Неделя 7 (27 июля–2 августа) — Security, performance, DP

- [ ] **27.07 (Пн)** — Security для frontend  
      XSS, CSRF, CSP, sanitization, threat modeling frontend-фичи.
- [ ] **29.07 (Ср)** — Performance deep dive  
      Bundle splitting, lazy loading, virtualization, image optimization, metrics.
- [ ] **31.07 (Пт)** — 1D DP  
      Climbing Stairs, House Robber, Coin Change. Состояние, переход, база.
- [ ] **02.08 (Вс)** — Созвон с ментором: полный system design mock  
      60 минут mock + 30 минут разбор структуры, trade-offs и пробелов.

### Неделя 8 (3–9 августа) — Tooling, testing, algorithm mock

- [ ] **03.08 (Пн)** — Tooling, build, CI/CD  
      Vite/Webpack, sourcemaps, lint/typecheck/test/build pipeline.
- [ ] **05.08 (Ср)** — Testing strategy  
      Unit/component/e2e, flaky tests, testing pyramid для frontend.
- [ ] **07.08 (Пт)** — Algorithm mock  
      2 задачи за 75 минут + 15 минут разбор: слабые темы из всего списка.
- [ ] **09.08 (Вс)** — Созвон с ментором: финальный senior review  
      Проверить 3 system design ответа и senior-подачу: ownership, trade-offs, риски.

### Неделя 9 (10–15 августа) — Финальные mock и упаковка опыта

- [ ] **10.08 (Пн)** — JS/React live coding mock  
      `asyncMemoize` или `retry` + React component snippet.
- [ ] **12.08 (Ср)** — Behavioral и опыт  
      6 STAR-историй: bug, performance, architecture, conflict, mentoring, failure.
- [ ] **14.08 (Пт)** — Финальная шлифовка  
      Interview pack: 10 JS snippets, 10 React pitfalls, 7 algo patterns, 3 SD шаблона.
- [ ] **15.08 (Сб)** — Буферный день  
      Отдых, лёгкое повторение interview pack или перенос пропущенного занятия.

---

## Еженедельный контроль

В конце каждой пятницы зафиксировать:

- **Что получилось**: 3 темы, которые уже отвечаются уверенно.
- **Что провалилось**: 2 темы, где были ошибки или паузы.
- **Что повторить в понедельник**: 1–2 конкретные задачи или вопроса.
- **Что вынести ментору**: 1 system design вопрос или trade-off.
