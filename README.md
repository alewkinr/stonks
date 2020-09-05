# Структура приложения

> Скруктура папки **src**.

```
.
└── src
	 ├── common				# Папка для хренения общих библиотек
	 ├── component			# Папка для хранения общих компонентов
	 ├── pages				# Папка для хранения компонента страницы (первый/родительский)
	 ├── App.style.css
	 ├── App.view.tsx
	 └── index.tsx
```

> Структура любого компонента.

```
components
	├── [component-name]
	│	  ├── childs
	│	  │		├── [component-name]
	│	  │		│	  ├── index.tsx
	│	  │		│	  ├── [component-name].tsx
	│	  │		│	  ├── [component-name].view.tsx
	│	  │		│	  └── [component-name].style.css
	│	  │		└── ...
	│	  ├── index.tsx
	│	  ├── [component-name].tsx
	│	  ├── [component-name].view.tsx
	│	  └── [component-name].style.css
	└── ...
```

> Структура хранилища.

```
store
	├── [store-name]
	│		├── [store-name].actions.ts
	│		├── [store-name].actions.type.ts
	│		├── [store-name].keys.ts
	│		├── [store-name].reducer.ts
	│		├── [store-name].reducer.test.ts
	│		└── [store-name].state.ts
	└── index.ts
```

## Для сборки и запуска проекта
1. ```npm i```
2. ```npm run dev```
