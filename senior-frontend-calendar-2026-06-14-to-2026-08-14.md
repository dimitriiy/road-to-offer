# Календарь подготовки к Senior Frontend Interview

Период: 15 июня 2026 - 15 августа 2026. Часовой пояс: MSK. Основные занятия: понедельник, среда, пятница с 08:00 до 09:30. Воскресенье: созвон с ментором по системному дизайну, точное время согласовать с ментором. 15 августа приходится на субботу, поэтому обязательного занятия в этот день нет; финальная шлифовка запланирована на пятницу 14 августа.

## Принцип расписания

Каждое занятие на 90 минут устроено одинаково:

| Время | Блок | Что делать |
|---:|---|---|
| 08:00-08:10 | Разогрев | Вслух объяснить одну тему или разобрать один snippet |
| 08:10-08:55 | Основная практика | JS/React/алгоритм/system design drill |
| 08:55-09:15 | Разбор | Edge cases, Big-O, trade-offs, ошибки |
| 09:15-09:30 | Фиксация | 3 тезиса в конспект и 1 вопрос для mock-интервью |

Алгоритмы встроены по темам из файла Space: массивы/строки/hash map, two pointers, sliding window, binary search, DFS/BFS, greedy/intervals и 1D DP. Воскресные созвоны с ментором лучше использовать не для теории, а для тренировки senior-подачи: требования, trade-offs, API, data flow, performance, security и observability.

## Календарь

| Дата | День | Время | Тема | Практический результат |
|---|---|---:|---|---|
| 15.06.2026 | Пн | 08:00-09:30 | JS execution model: scope, closures, hoisting | Реализовать `once`, `memoize`, `counter`; алгоритмы: Two Sum, Valid Anagram |
| 17.06.2026 | Ср | 08:00-09:30 | Event Loop, Promise, async/await | Реализовать `promiseAll`, `delay`; проговорить microtasks/macrotasks |
| 19.06.2026 | Пт | 08:00-09:30 | Hash map и строки | Group Anagrams, Top K Frequent Elements; проговорить Big-O и edge cases |
| 21.06.2026 | Вс | согласовать | Созвон с ментором: framework ответа system design | Отработать шаблон: requirements, API, components, data flow, performance, security |
| 22.06.2026 | Пн | 08:00-09:30 | Асинхронные декораторы | Реализовать `debounce`, `throttle`, `retry`; обсудить backoff и cancellation |
| 24.06.2026 | Ср | 08:00-09:30 | `this`, prototype, bind/call/apply | Реализовать `myBind`, `instanceOf`, `newOperator`; разобрать pitfalls |
| 26.06.2026 | Пт | 08:00-09:30 | Two Pointers | Valid Palindrome, Two Sum II, 3Sum; проговорить паттерн «sort + two pointers» |
| 28.06.2026 | Вс | согласовать | Созвон с ментором: Autocomplete design | Спроектировать autocomplete в чате: debounce, cache, API, keyboard, race conditions |
| 29.06.2026 | Пн | 08:00-09:30 | Структуры данных в JS | Map/Set/WeakMap; реализовать `groupBy`, `uniqueBy`, `flatten` |
| 01.07.2026 | Ср | 08:00-09:30 | React rendering model | Reconciliation, keys, batching; реализовать Tabs или Accordion |
| 03.07.2026 | Пт | 08:00-09:30 | Sliding Window | Longest Substring Without Repeating Characters, Minimum Size Subarray Sum |
| 05.07.2026 | Вс | согласовать | Созвон с ментором: админка с RBAC | Спроектировать админку: роли, таблицы, формы, audit log, permissions, API |
| 06.07.2026 | Пн | 08:00-09:30 | React Hooks | `useEffect`, `useLayoutEffect`, `useRef`; реализовать `useDebouncedValue`, `usePrevious` |
| 08.07.2026 | Ср | 08:00-09:30 | TypeScript для frontend | Generics, utility types, discriminated unions; типизированный async state |
| 10.07.2026 | Пт | 08:00-09:30 | Binary Search | Binary Search, Search Insert Position, Find First and Last Position |
| 12.07.2026 | Вс | согласовать | Созвон с ментором: marketplace/product page | SSR/CSR/ISR, SEO, cache, images, personalization, Core Web Vitals |
| 13.07.2026 | Пн | 08:00-09:30 | Forms, validation, API state | Форма с client/server validation; обработка loading/error/empty states |
| 15.07.2026 | Ср | 08:00-09:30 | State management и server cache | Client state vs server state, Context, React Query-подход, cache invalidation |
| 17.07.2026 | Пт | 08:00-09:30 | DFS/BFS | Maximum Depth, Level Order, Number of Islands; recursion vs queue |
| 19.07.2026 | Вс | согласовать | Созвон с ментором: дизайн-система | Tokens, theming, component API, versioning, migrations, visual regression |
| 20.07.2026 | Пн | 08:00-09:30 | Browser rendering | Critical rendering path, layout/paint/composite; LCP/CLS диагностика |
| 22.07.2026 | Ср | 08:00-09:30 | Network, CORS, cookies, storage | CORS/preflight, SameSite/HttpOnly/Secure, access token strategy |
| 24.07.2026 | Пт | 08:00-09:30 | Greedy и intervals | Merge Intervals, Non-overlapping Intervals, Jump Game |
| 26.07.2026 | Вс | согласовать | Созвон с ментором: микрофронтенды | Boundaries, shared deps, routing, auth, observability, rollback |
| 27.07.2026 | Пн | 08:00-09:30 | Security для frontend | XSS, CSRF, CSP, sanitization, threat modeling frontend-фичи |
| 29.07.2026 | Ср | 08:00-09:30 | Performance deep dive | Bundle splitting, lazy loading, virtualization, image optimization, metrics |
| 31.07.2026 | Пт | 08:00-09:30 | 1D DP | Climbing Stairs, House Robber, Coin Change; состояние, переход, база |
| 02.08.2026 | Вс | согласовать | Созвон с ментором: полный system design mock | 60 минут mock + 30 минут разбор структуры, trade-offs и пробелов |
| 03.08.2026 | Пн | 08:00-09:30 | Tooling, build, CI/CD | Vite/Webpack, sourcemaps, lint/typecheck/test/build pipeline |
| 05.08.2026 | Ср | 08:00-09:30 | Testing strategy | Unit/component/e2e, flaky tests, testing pyramid для frontend |
| 07.08.2026 | Пт | 08:00-09:30 | Algorithm mock | 2 задачи за 75 минут + 15 минут разбор: слабые темы из всего списка |
| 09.08.2026 | Вс | согласовать | Созвон с ментором: финальный senior review | Проверить 3 system design ответа и senior-подачу: ownership, trade-offs, риски |
| 10.08.2026 | Пн | 08:00-09:30 | JS/React live coding mock | `asyncMemoize` или `retry` + React component snippet |
| 12.08.2026 | Ср | 08:00-09:30 | Behavioral и опыт | 6 STAR-историй: bug, performance, architecture, conflict, mentoring, failure |
| 14.08.2026 | Пт | 08:00-09:30 | Финальная шлифовка | Interview pack: 10 JS snippets, 10 React pitfalls, 7 algo patterns, 3 SD шаблона |
| 15.08.2026 | Сб | без занятия | Буферный день | Отдых, лёгкое повторение interview pack или перенос пропущенного занятия |

## Повестка воскресных созвонов с ментором

Каждый созвон лучше вести по одному формату:

1. 5 минут: кратко сформулировать задачу и ограничения.
2. 10 минут: уточнить requirements и non-functional requirements.
3. 15 минут: нарисовать компоненты, API и data flow.
4. 15 минут: обсудить performance, security, reliability, edge cases.
5. 10 минут: получить фидбек по структуре ответа.
6. 5 минут: зафиксировать домашку до следующего созвона.

| Дата | Тема созвона | Что подготовить заранее |
|---|---|---|
| 21.06 | Шаблон frontend system design | Один универсальный шаблон ответа на 1 страницу |
| 28.06 | Autocomplete | API, cache, keyboard navigation, race conditions |
| 05.07 | Админка с RBAC | Roles, permissions, audit log, forms, tables |
| 12.07 | Marketplace/product page | SSR/CSR, SEO, кеш, изображения, Core Web Vitals |
| 19.07 | Дизайн-система | Tokens, API компонентов, versioning, migrations |
| 26.07 | Микрофронтенды | Boundaries, shared dependencies, routing, auth |
| 02.08 | Полный mock | 60-минутный ответ без остановок |
| 09.08 | Финальный review | 3 лучших SD-ответа и список слабых мест |

## Недельные цели

| Неделя | Даты | Фокус | Критерий готовности |
|---|---|---|---|
| 1 | 15-21 июня | JS fundamentals, Promise, hash map | Уверенно объясняешь Event Loop и решаешь базовые hash map задачи |
| 2 | 22-28 июня | Асинхронные утилиты, prototypes, two pointers | Пишешь `debounce`, `throttle`, `retry`; решаешь 3Sum |
| 3 | 29 июня-5 июля | React rendering, JS data structures, sliding window | Понимаешь ререндеры и закрываешь sliding window Medium |
| 4 | 6-12 июля | Hooks, TypeScript, binary search | Типизируешь async state и не путаешь boundaries binary search |
| 5 | 13-19 июля | Forms, state/cache, DFS/BFS | Проектируешь форму/API state и решаешь Number of Islands |
| 6 | 20-26 июля | Browser, network, intervals | Объясняешь CORS/cookies/rendering и решаешь intervals |
| 7 | 27 июля-2 августа | Security, performance, DP | Есть performance audit checklist и базовый DP без паники |
| 8 | 3-9 августа | Tooling, testing, algorithm mock | Есть CI/CD pipeline и понятная testing strategy |
| 9 | 10-15 августа | Финальные mock и упаковка опыта | Готов interview pack и 6 STAR-историй |

## Еженедельный контроль

В конце каждой пятницы зафиксировать:

- **Что получилось**: 3 темы, которые уже отвечаются уверенно.
- **Что провалилось**: 2 темы, где были ошибки или паузы.
- **Что повторить в понедельник**: 1-2 конкретные задачи или вопроса.
- **Что вынести ментору**: 1 system design вопрос или trade-off.

## Список алгоритмических тем по датам

| Дата | Тема | Задачи |
|---|---|---|
| 15.06 | Arrays/hash map | Two Sum, Valid Anagram |
| 19.06 | Arrays/hash map | Group Anagrams, Top K Frequent Elements |
| 26.06 | Two Pointers | Valid Palindrome, Two Sum II, 3Sum |
| 03.07 | Sliding Window | Longest Substring Without Repeating Characters, Minimum Size Subarray Sum |
| 10.07 | Binary Search | Binary Search, Search Insert Position, Find First and Last Position |
| 17.07 | DFS/BFS | Maximum Depth, Level Order, Number of Islands |
| 24.07 | Greedy/Intervals | Merge Intervals, Non-overlapping Intervals, Jump Game |
| 31.07 | 1D DP | Climbing Stairs, House Robber, Coin Change |
| 07.08 | Mixed mock | 2 задачи из слабых тем |

## Если неделя сорвалась

Если пропущено одно занятие, не переносить весь календарь. Нужно сделать так:

- пропущенный понедельник: добрать только coding-задачу в пятницу после основной темы;
- пропущенную среду: посмотреть конспект и сделать 30-минутный устный разбор в субботу;
- пропущенную пятницу с алгоритмами: решить одну задачу в субботу утром и одну в следующий понедельник;
- пропущенный воскресный созвон: отправить ментору письменный design outline и попросить async feedback.

## Финальный interview pack к 15 августа

К концу периода должен быть готов один документ или заметка со следующими блоками:

- 10 JS snippets: Event Loop, closure, `this`, Promise, debounce, throttle, retry, memoize, async cache, EventEmitter.
- 10 React pitfalls: wrong dependencies, stale closure, bad keys, mutated state, unnecessary Context, over-memoization, race condition, memory leak, error boundary, hydration mismatch.
- 7 algorithm patterns: hash map, two pointers, sliding window, binary search, DFS/BFS, intervals, 1D DP.
- 3 frontend system design шаблона: autocomplete, admin/RBAC, marketplace/product page.
- 6 STAR-историй: production bug, performance, architecture, conflict, mentoring, failure.
- 10 вопросов интервьюеру про команду, стек, процессы, ownership, релизы, performance и ожидания от senior.
