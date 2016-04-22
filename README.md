## Component

```
Component = Template + Class + Metadata
```

## Application Arhictecture

- App Component
  - Product Data Service
  - Welcome Component
  - Product List Component
    - Star Component
  - Product Detail Component
    - Star Component

## Concepts

- Components
  - Nested Components
- Templates, Interpolation, and Directives
- Data Binding & Pipes
- Services and Dependency Injection
- Retrieving Data Using Http
- Navigation and Routing

## Javascript Language Specification

- ECMAScript (ES)
- ES 3
- ES 5
- ES 2015 (formerly known as ES6)
  - Must be transpiled

## Typescript

- Open soruce
- Superset of Javascript
- Transpiles to Javascript
- Strongly typed
  - Typescript type definition files (*.d.ts)
- Class-based object-orientation

## IDEs for Typescript

- Visual Studio
- Visual Studio Code
- WebStorm
- Atom
- Eclipse
- ...

## Setting up Our Environment

It is a bit laborious.

1. Create the *tsconfig.json* file
2. Create the *package.json* file
3. Create the *typings.json* file
4. Install the **libraries** and **typings**
5. Create the host Web page (*index.html*)
6. Create the *main.ts* file (*bootstrapper)*

## Modules

- Angular1 Modules
- Typescript Modules
- ES 2015 Modules
- Angular2 Uses ES 2015 Modules

### ES 2015 Modules

#### Export

```typescript
// product.ts

export class Product {
  
}
```

#### Import

```typescript
// product-list.ts

import {Product} from './product'
```

## Components

```
Component = Template + Class + Metadata
```

Once we give the *@Component* metadata we get a Component.

> Decorator: A function that adds *metadata* to a class, its members, or its method arguments.

```typescript
import {Component} from 'angular2/core';

@Component({
    selector: 'pm-app',
    template: `
    <div><h1>{{pageTitle}}</h1>
        <div>My First Component</div>
    </div>
    `
})
export class AppComponent {
    pageTitle: string = 'Product Management';
}
```

```typescript
// main.ts
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';

bootstrap(AppComponent);
```

```html
<!-- indexx.html -->

<!-- System.import('app/main'); -->

<body>
  <pm-app>Loading App ...</pm-app>
</body>
```

## Angular is Modular

- core
- animate
- http
- router

## Bootstrapping

```typescript
// main.ts
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';

bootstrap(AppComponent);
```