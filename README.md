# Vue.js Component Boilerplate (TypeScript)

This boilerplate uses [vue-class-component](https://www.npmjs.com/package/vue-class-component) and
[vue-property-decorator](https://www.npmjs.com/package/vue-property-decorator) packages.
They allow building Vue components using classes and decorators:

```javascript
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
class MyVueComponent extends Vue {
  // component props, methods and lifecycle methods
}
```

### Features
* `Storybook` for previewing and building the component - `npm run storybook`
* `Jest` for testing - `npm test`
* `ESLint` for linting - `npm run lint`

### Build package
```
npm run dist
```
Build will be placed to `./lib` folder and ready to be published on npm registry