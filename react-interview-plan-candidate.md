# 🎯 Задачник для интервью: React-разработчик (Middle / Senior)

> **Грейд:** Middle → Senior
> **Акцент:** React 19, TypeScript, архитектура и производительность
> **Дата:** 2026-06

---

## 📋 Содержание

1. [Как подготовиться](#-как-подготовиться)
2. [Структура интервью](#-структура-интервью)
3. [Section 1. Основы React и модель мышления](#section-1-основы-react-и-модель-мышления)
4. [Section 2. Хуки (глубоко)](#section-2-хуки-глубоко)
5. [Section 3. Состояние и данные](#section-3-состояние-и-данные)
6. [Section 4. Производительность и рендеринг](#section-4-производительность-и-рендеринг)
7. [Section 5. Concurrent React и React 19](#section-5-concurrent-react-и-react-19)
8. [Section 6. Архитектура и паттерны](#section-6-архитектура-и-паттерны)
9. [Section 7. Экосистема и тестирование](#section-7-экосистема-и-тестирование)
10. [Section 8. TypeScript и React](#section-8-typescript-и-react)
11. [Практические задания](#-практические-задания)

---

## 🧭 Как подготовиться

Это список тем и вопросов, которые могут быть заданы на интервью. Готовьтесь объяснять **суть и механику**, а не заучивать формулировки — оценивается понимание «под капотом» и умение рассуждать.

Сложность вопросов:

| Метка | Уровень | Что ожидается |
|-------|---------|---------------|
| 🟢 | База | Базовое понимание React, компонентная модель |
| 🟡 | Среднее | Понимание «под капотом», edge-cases |
| 🔴 | Продвинутое | Глубина, архитектура, производительность |

**Совет:** по каждому вопросу попробуйте объяснить идею вслух, привести пример кода и назвать типичные ловушки. Для практики заданий — реализуйте их самостоятельно, проверьте edge-cases.

---

## 🗂 Структура интервью

| Этап | Время | Цель |
|------|-------|------|
| Знакомство | 5 мин | Рассказ о вакансии, снятие стресса |
| Теория (блоками) | 50–60 мин | Фундамент: модель React, хуки, состояние, производительность |
| Live-coding / компонент | 30–45 мин | Практическое мышление, React-специфика |
| Архитектура (системный дизайн) | 20 мин | Масштабирование, паттерны, RSC |
| Вопросы кандидата | 10 мин | Ваш интерес, мотивация |

---

## Section 1. Основы React и модель мышления

### 🟢 1.1 Что такое React? В чём его ключевая идея? Почему говорят, что это библиотека, а не фреймворк?

### 🟡 1.2 Опишите фазы жизненного цикла рендеринга в React (render phase, commit phase). Что и когда можно делать? Почему render phase должна быть чистой?

### 🟡 1.3 Что такое reconciliation (сверка)? Как работает алгоритм? Зачем нужен `key` и почему индекс массива — плохой `key`?

### 🟢 1.4 Что такое JSX и во что он компилируется? Почему имена компонентов пишутся с большой буквы?

### 🟢 1.5 В чём разница между props и state? Что такое «поднимание состояния» (lifting state up)?

---

## Section 2. Хуки (глубоко)

### 🟢 2.1 Правила хуков. Почему они существуют? Как React «понимает», какой вызов хука какому состоянию соответствует?

### 🟢 2.2 `useState` — как работает? В чём разница между `setValue(value)` и `setValue(prev => value)`? Что такое batching и automatic batching?

### 🟡 2.3 `useEffect` — правила, зависимости, cleanup. Когда эффект НЕ нужен? Как избежать бесконечных циклов и утечек?

### 🟡 2.4 `useLayoutEffect` vs `useEffect`. В чём разница по времени выполнения и влиянию на производительность? Когда какой выбирать?

### 🟡 2.5 `useMemo` и `useCallback` — когда нужны, а когда вредны? Правда ли, что «завернуть всё в useMemo» — хорошая практика?

### 🟡 2.6 `useRef` — для чего, кроме доступа к DOM? Можно ли мутировать `ref.current` во время render phase?

### 🟡 2.7 `useReducer` — когда предпочесть `useState`? Почему `dispatch` можно безопасно прокидывать без `useCallback`?

### 🟡 2.8 `useContext` — как работает и какие подводные камни? Почему любое изменение value ре-рендерит всех потребителей, и как это оптимизировать?

---

## Section 3. Состояние и данные

### 🟡 3.1 Локальный, общий и серверный state. В чём различие и какие инструменты подходят для каждого?

### 🟡 3.2 Lifting state up и colocation. Когда поднимать состояние, когда опускать? Что такое controlled vs uncontrolled компоненты?

### 🟢 3.3 Формы в React. Controlled vs Uncontrolled — в чём разница, плюсы и минусы каждого подхода?

### 🟡 3.4 Состояние производных (derived state). Какие антипаттерны связаны с синхронизацией пропсов со state через `useEffect`?

### 🔴 3.5 Паттерн «compound components». Приведите пример. Какие проблемы он решает?

---

## Section 4. Производительность и рендеринг

### 🟡 4.1 Что вызывает ре-рендер компонента в React? Всегда ли ре-рендер родителя ведёт к ре-рендеру детей?

### 🟡 4.2 `React.memo` — как работает и когда применять? В каком случае memo окажется бесполезен?

### 🟡 4.3 Virtualization для длинных списков. Как это работает? Какие trade-offs (a11y, печать, поиск)?

### 🔴 4.4 Code splitting и lazy loading в React. Как использовать `React.lazy` + `Suspense`? Что такое prefetch?

### 🔴 4.5 Bundle size: как анализировать и оптимизировать? Что такое tree-shaking и differential serving? Какие типичные «тяжёлые» библиотеки и их замены?

---

## Section 5. Concurrent React и React 19

### 🟡 5.1 Что такое Concurrent React? Что он даёт? Делает ли он код автоматически быстрее?

### 🟡 5.2 `useTransition` и `useDeferredValue` — в чём разница и когда применять каждый?

### 🔴 5.3 Server Components (RSC). Что это и зачем? Чем отличается от SSR? Какие ограничения у server components? Что делают директивы `"use client"` / `"use server"`?

### 🔴 5.4 React 19 — перечислите ключевые нововведения (`use`, Actions, `useActionState`, `useOptimistic`, `ref` как prop, document metadata, `useEffectEvent`, React Compiler).

### 🟡 5.5 Suspense — для чего, кроме lazy-загрузки компонентов? Что такое streaming SSR и как Suspense с ним связан?

---

## Section 6. Архитектура и паттерны

### 🟡 6.1 Lifting state, prop drilling, Context, глобальный стор — сравнение. Когда какой подход выбрать?

### 🟡 6.2 Структура проекта. Feature-based vs layer-based. Что такое FSD (Feature-Sliced Design)?

### 🔴 6.3 Error boundaries. Как обрабатывать ошибки в React? Чего error boundary НЕ ловит?

### 🔴 6.4 Микрофронтенды в React. Перечислите подходы (Module Federation, single-spa, iframe) и их компромиссы. Когда MFE оправданы?

### 🟡 6.5 Testing Library и принципы тестирования React. Почему «тестировать поведение, а не имплементацию»? Зачем MSW?

---

## Section 7. Экосистема и тестирование

### 🟡 7.1 React Query (TanStack Query) — зачем нужен? Что такое queryKey, invalidateQueries, stale time? Почему не «всё в Redux»?

### 🟢 7.2 Next.js vs Remix vs CRA vs Vite. Когда что выбрать? Чем отличается App Router от Pages Router?

### 🟡 7.3 Strict Mode — зачем нужен? Почему в нём эффекты вызываются дважды? Влияет ли это на production?

---

## Section 8. TypeScript и React

### 🟢 8.1 Как типизировать компоненты и props? В чём разница между `React.ReactNode` и `React.ReactElement`? Как унаследовать нативные атрибуты HTML-элемента?

### 🟡 8.2 Как типизировать хуки: `useState`, `useRef`, `useReducer`? Почему `useState([])` даёт `never[]` и как это исправить?

### 🟡 8.3 Как типизировать Context? Зачем нужен паттерн с `null` + хук-обёртка с `throw`?

### 🔴 8.4 Полиморфные компоненты. Как реализовать типобезопасный `as` prop? Какие дженерики и утилиты TypeScript для этого нужны?

### 🔴 8.5 Типизация `forwardRef` и `useImperativeHandle`. Что изменилось в React 19 (ref как prop)? Как ограничить то, что暴露ается через ref?

---

## 🛠 Практические задания

> На каждое задание закладывайте 15–25 минут. Оценивается не только результат, но и процесс: вопросы, edge-cases, рефакторинг.

---

### 📋 Задание 1. Custom Hook: `useDebounce` (React + TypeScript)

**Сложность:** 🟡 | ⏱ ~15 мин

Реализуйте кастомный хук `useDebounce<T>(value: T, delay: number): T`, который возвращает «дебаунсированное» значение: обновляется только спустя `delay` мс после последнего изменения исходного значения.

**Заготовка:**

```tsx
import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  // TODO: ваша реализация
}

// Пример использования:
function SearchInput() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    // запрос к API сработает только когда пользователь перестанет печатать на 500мс
    console.log('Fetching:', debouncedQuery);
  }, [debouncedQuery]);

  return <input value={query} onChange={e => setQuery(e.target.value)} />;
}
```

---

### 📋 Задание 2. Custom Hook: `usePrevious` (React + TypeScript)

**Сложность:** 🟡 | ⏱ ~10 мин

Реализуйте хук `usePrevious<T>(value: T): T | undefined`, который возвращает предыдущее значение переданного аргумента (значение с прошлого рендера).

**Заготовка:**

```tsx
import { useRef } from 'react';

export function usePrevious<T>(value: T): T | undefined {
  // TODO: ваша реализация
}

// Тестовое использование:
function Counter() {
  const [count, setCount] = useState(0);
  const prev = usePrevious(count);
  return <div>Was {prev ?? '-'}, now {count}</div>;
}
```

---

### 📋 Задание 3. Custom Hook: `useFetch` с отменой (React + TypeScript)

**Сложность:** 🔴 | ⏱ ~25 мин

Реализуйте хук `useFetch<T>(url: string)` для загрузки данных с поддержкой:
- состояний `loading`, `data`, `error`;
- **отмены запроса** при размонтировании и при смене URL (через `AbortController`);
- игнорирования «устаревшего» ответа (race condition).

**Заготовка:**

```tsx
type State<T> =
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };

export function useFetch<T>(url: string): State<T> {
  // TODO: ваша реализация
  // Подсказка: используйте AbortController и cleanup в useEffect
}

// Использование:
function UserProfile({ id }: { id: string }) {
  const result = useFetch<User>(`/api/users/${id}`);
  if (result.status === 'loading') return <Spinner />;
  if (result.status === 'error')   return <ErrorMessage error={result.error} />;
  return <div>{result.data.name}</div>;
}
```

---

### 📋 Задание 4. Оптимизация производительности (React)

**Сложность:** 🔴 | ⏱ ~20 мин

Дан компонент-список. При изменении поиска (`query`) **все** элементы списка ре-рендерятся, хотя меняется только фильтрация. Оптимизируйте, чтобы элементы ре-рендерились только при изменении своих данных.

**Заготовка (с проблемой):**

```tsx
function Item({ name, onClick }: { name: string; onClick: () => void }) {
  console.log('Item render'); // <-- рендерится ВСЕ элементы при каждом вводе
  return <li onClick={onClick}>{name}</li>;
}

function List({ items }: { items: { id: number; name: string }[] }) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = items.filter(i => i.name.includes(query));

  // ❌ Проблема: новый обработчик onClick и новый объект на каждом рендере
  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>
        {filtered.map(item => (
          <Item
            key={item.id}
            name={item.name}
            onClick={() => setSelected(item.id)}
          />
        ))}
      </ul>
      <p>Selected: {selected}</p>
    </div>
  );
}
```

**Требование:** объясните причины лишних рендеров и предложите исправления. Реализуйте оптимизированную версию.

---

### 📋 Задание 5. Оптимистичные обновления (React 19)

**Сложность:** 🔴 | ⏱ ~25 мин

Реализуйте компонент «лайков», используя хук `useOptimistic` из React 19. При клике на «Лайк» счётчик сразу увеличивается в UI, а после ответа сервера — синхронизируется с реальным значением (с авто-откатом при ошибке).

**Заготовка:**

```tsx
import { useOptimistic, useTransition } from 'react';

// Имитация API: возвращает новое количество лайков
async function sendLike(currentCount: number): Promise<number> {
  await new Promise(r => setTimeout(r, 800)); // «задержка сети»
  // return currentCount + 1; // раскомментируйте для успешного сценария
  throw new Error('Network error'); // для проверки отката
}

export function LikeButton({ likes: initial }: { likes: number }) {
  const [likes, setLikes] = useState(initial);
  // TODO: добавьте useOptimistic и useTransition
  // const [optimisticLikes, addOptimistic] = useOptimistic(...)
  // const [isPending, startTransition] = useTransition(...)

  async function handleLike() {
    // TODO: реализуйте оптимистичное обновление + отправку + обработку ошибки
  }

  return (
    <button onClick={handleLike} disabled={/* isPending */ false}>
      ❤️ {/* optimisticLikes */} likes
    </button>
  );
}
```

**Требование:** UI должен мгновенно показывать +1, при ошибке — откатываться к исходному значению, во время запроса кнопка disabled.

---

### 📋 Задание 6. Архитектура: state management (дизайн-задача)

**Сложность:** 🟡 | ⏱ ~15 мин (обсуждение)

*Это задание на рассуждение, без кода.*

> Вы строите интернет-магазин. Есть:
> - корзина (добавление/удаление товаров, видна из шапки и страницы оформления);
> - список товаров с фильтрами и пагинацией (данные с API);
> - тема оформления (light/dark);
> - форма оформления заказа (много полей, валидация);
> - пользовательские предпочтения (избранные товары, синхронизация с сервером).
>
> Опишите, как бы вы организовали управление состоянием. Какие части куда: локальный state, Context, глобальный стор, серверный state? Обоснуйте выбор для каждой части.

---

## 📚 Полезные источники для подготовки

- **react.dev** (официальная документация React 19) — интерактивные уроки, API reference.
- **React 19 Release Post** (reactjs.org/blog) — обзор новых фич (Actions, useOptimistic, RSC).
- **TanStack Query Docs** — серверное состояние, паттерны.
- **Testing Library Docs** — принципы тестирования React-компонентов.
- **Patterns.dev** — паттерны производительности, рендеринга, архитектуры.
- **Total TypeScript** / **React + TypeScript Cheatsheets** — типизация React-приложений.

---

*Удачи на интервью! Помните: рассуждение и понимание важнее заученных формулировок. Особое внимание уделите пониманию фаз рендеринга и того, когда что можно делать.*
