# UINNVEST

Калькулятор доходности облигаций и расчета инвестиционного портфеля. 

Приложение разработано в рамках проекта Yandex CTO School 2020. На итоговой защите работы, результат оценивали бизнес-заказчики из компании БКС. 

> 📌 Решение получило 14/20 баллов.


## Структура приложения

```
.
└── src
   ├── common
   ├── component
   ├── pages
   ├── App.style.css
   ├── App.view.tsx
   └── index.tsx
```

## Структура компонента

```
components
   ├── [component-name]
   │   ├── childs
   │   │     ├── [component-name]
   │   │     │	  ├── index.tsx
   │   │     │	  ├── [component-name].tsx
   │   │     │	  ├── [component-name].view.tsx
   │   │     │	  └── [component-name].style.css
   │   │     └── ...
   │   ├── index.tsx
   │   ├── [component-name].tsx
   │   ├── [component-name].view.tsx
   │   └── [component-name].style.css
   └── ...
```

## Структура хранилища

```
store
   ├── [store-name]
   │   ├── [store-name].actions.ts
   │   ├── [store-name].actions.type.ts
   │   ├── [store-name].keys.ts
   │   ├── [store-name].reducer.ts
   │   ├── [store-name].reducer.test.ts
   │   └── [store-name].state.ts
   └── index.ts
```

## Рабочие команды

1. `npm i` — установка зависимостей
2. `npm run dev` — запуск дев сервера
3. `npm run prod` — компиляция продакшн-реди бандла

