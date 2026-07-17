# Road to Offer: Senior Frontend Interview Prep

Репозиторий для структурированной подготовки к собеседованию на позицию Senior Frontend Engineer.  
Период: **16 июля — 31 августа 2026**.

## О чём репозиторий

Здесь ведётся календарь занятий, конспекты, решённые задачи и заметки по системному дизайну.  
Основной фокус — JavaScript, React, алгоритмы, frontend system design, AI coding и soft skills.

## Расписание

- **Пн–Пт**: 8:30–9:30 (60 минут)
- **Среда**: самостоятельное занятие по AI coding / agentic coding
- **Воскресенье**: созвон с ментором по system design

## Структура сессии (60 мин)

| Время | Блок | Что делать |
|------:|------|-----------|
| 8:30–8:35 | Разогрев | Объяснить одну тему / разобрать snippet |
| 8:35–9:15 | Основная практика | JS/React/алгоритм/system design drill |
| 9:15–9:25 | Разбор | Edge cases, Big-O, trade-offs, ошибки |
| 9:25–9:30 | Фиксация | 2 тезиса в конспект + next action |

---

## TODO по дням

### Неделя 1 (16–19 июля) — DFS/BFS + Two Pointers

- [ ] **16.07 (Чт)** — DFS basic  
      Maximum Depth of Binary Tree, Number of Islands. Результат: DFS pattern, recursion vs iterative.
- [ ] **17.07 (Пт)** — Two Pointers + BFS  
      Valid Palindrome, Two Sum II, Binary Tree Level Order Traversal. Результат: два указателя + queue для BFS.
- [ ] **18.07 (Сб)** — Выходной
- [ ] **19.07 (Вс)** — Созвон с ментором: system design  
      Tokens, theming, component API, versioning, migrations.

### Неделя 2 (20–26 июля) — Sliding Window + CSS + HTML

- [ ] **20.07 (Пн)** — Sliding Window  
      Longest Substring Without Repeating Characters, Minimum Size Subarray Sum. Результат: переменное окно + хэш-таблица.
- [ ] **21.07 (Вт)** — CSS глубоко  
      Flexbox vs Grid, центрирование, специфичность, stacking context. Результат: CSS interview readiness.
- [ ] **22.07 (Ср)** — AI coding / agentic coding  
      Сгенерировать решение sliding window задачи, сравнить с ручной реализацией, найти edge cases. Результат: workflow prompt-to-code + review.
- [ ] **23.07 (Чт)** — HTML + Accessibility  
      Семантика, WAI-ARIA, LocalStorage vs cookies vs IndexedDB. Результат: a11y checklist.
- [ ] **24.07 (Пт)** — Forms + validation  
      Controlled vs uncontrolled, client/server validation. Результат: useForm hook или form component.
- [ ] **26.07 (Вс)** — Созвон с ментором: system design  
      Boundaries, shared deps, routing, auth, observability.

### Неделя 3 (27 июля – 2 августа) — React Hooks + TypeScript + Binary Search

- [ ] **27.07 (Пн)** — React Hooks глубоко  
      useEffect, useLayoutEffect, useRef, useMemo/useCallback оптимизация. Результат: hooks best practices.
- [ ] **28.07 (Вт)** — TypeScript для React  
      Generics, utility types, discriminated unions, типизация компонентов, хуков, Context. Результат: типобезопасный async state.
- [ ] **29.07 (Ср)** — AI coding / agentic coding  
      Сгенерировать custom hook и проверить типы, переписать решение вручную, улучшить API. Результат: AI-assisted refactor + type review.
- [ ] **30.07 (Чт)** — Binary Search  
      Binary Search, Search Insert Position, Find First and Last Position. Результат: поиск по ответу.
- [ ] **31.07 (Пт)** — Network + CORS  
      HTTP methods, REST principles, CORS/preflight, SameSite cookies. Результат: auth token strategy.
- [ ] **01.08 (Сб)** — Выходной
- [ ] **02.08 (Вс)** — Созвон с ментором: system design mock  
      60 минут mock + разбор.

### Неделя 4 (3–9 августа) — React Advanced + Performance + Security

- [ ] **03.08 (Пн)** — 1D DP basics  
      Climbing Stairs, House Robber. Результат: DP pattern понимание.
- [ ] **04.08 (Вт)** — React производительность  
      Reconciliation, React.memo, virtualization, code splitting, React.lazy + Suspense. Результат: оптимизация длинных списков.
- [ ] **05.08 (Ср)** — AI coding / agentic coding  
      Оптимизировать React component и убрать лишние rerenders, проверить memoization, keys, props shape. Результат: performance review workflow.
- [ ] **06.08 (Чт)** — Concurrent React + React 19  
      useTransition, useDeferredValue, Server Components, useOptimistic. Результат: современные React паттерны.
- [ ] **07.08 (Пт)** — Browser rendering + Security  
      Critical rendering path, LCP/CLS, XSS/CSRF protection, CSP headers. Результат: security + performance checklist.
- [ ] **09.08 (Вс)** — Созвон с ментором: system design review  
      Проверка SD ответов + senior подача.

### Неделя 5 (10–16 августа) — Live Coding + Architecture + Tooling

- [ ] **10.08 (Пн)** — DP continued + Testing  
      Coin Change, LIS, Testing Library, MSW patterns. Результат: DP уверенность + test strategy.
- [ ] **11.08 (Вт)** — JS/React live coding  
      asyncMemoize, debounce, throttle, React component с хуками. Результат: coding interview readiness.
- [ ] **12.08 (Ср)** — AI coding / agentic coding  
      Сгенерировать debounce/throttle, сравнить сложность, cancel logic, тестируемость. Результат: AI-assisted live coding.
- [ ] **13.08 (Чт)** — React архитектура  
      Error boundaries, Context patterns, state management: Redux vs Zustand vs Context. Результат: архитектурные решения.
- [ ] **14.08 (Пт)** — Bundle optimization + Tooling  
      Code splitting, tree-shaking, sourcemaps, CI/CD pipeline. Результат: build optimization.
- [ ] **16.08 (Вс)** — Созвон с ментором: system design feedback  
      Gaps analysis + last-minute tips.

### Неделя 6 (17–23 августа) — Interview Pack + Behavioral

- [ ] **17.08 (Пн)** — Algorithm mock 1  
      2 задачи за 50 минут + разбор. Фокус: слабые темы из прошлых недель.
- [ ] **18.08 (Вт)** — Behavioral prep  
      6 STAR-историй: bug, performance, architecture, conflict, mentoring, failure.
- [ ] **19.08 (Ср)** — AI coding / agentic coding  
      Промптами собрать мини-компонент и сделать code review, найти проблемы в типах, API и тестах. Результат: prompt-review-refactor loop.
- [ ] **20.08 (Чт)** — Interview pack assembly  
      10 JS snippets (Event Loop, closures, promises), 10 React pitfalls (stale closures, wrong deps, keys). Результат: готовые шпаргалки.
- [ ] **21.08 (Пт)** — Algorithm patterns review  
      7 algo patterns сводка, время/пространство для каждого. Результат: algo cheat sheet.
- [ ] **23.08 (Вс)** — Созвон с ментором: system design confidence building  
      Final prep + mindset.

### Неделя 7 (24–31 августа) — Final Mock + Ready State

- [ ] **24.08 (Пн)** — System design templates  
      3 SD шаблона (autocomplete, admin, marketplace), trade-offs summary. Результат: SD playbook.
- [ ] **25.08 (Вт)** — Questions for interviewer  
      10 вопросов про команду, процессы, expectations. Результат: prepared questions list.
- [ ] **26.08 (Ср)** — AI coding / agentic coding  
      Финальный dry-run: быстрое прототипирование + review + tests. Результат: speed + judgment under time pressure.
- [ ] **27.08 (Чт)** — Performance scenarios  
      Виртуализация, memory leaks, error boundaries, race conditions. Результат: edge cases покрытие.
- [ ] **28.08 (Пт)** — Final algorithm practice  
      Задачи из слабых тем.
- [ ] **30.08 (Вс)** — Созвон с ментором: system design confidence building  
      Последняя проверка перед собеседованиями.
- [ ] **31.08 (Пн)** — Готов к собеседованиям.

---

## Еженедельный контроль

В конце каждой пятницы зафиксировать:

- **Что сработало**: 2 темы с уверенностью.
- **Что нужно доработать**: 1–2 слабых места.
- **Next focus**: план на следующий понедельник.
- **Для ментора**: 1 system design вопрос.

---

## Ключевые deliverables к 31 августа

- [ ] Interview pack (JS/React/Algo/SD)
- [ ] 6 STAR-историй
- [ ] Security/Performance checklists
- [ ] 10 вопросов интервьюеру
- [ ] Уверенность в senior-подаче
