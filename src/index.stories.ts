import { storiesOf } from '@storybook/vue';
import MyComponent from './index';

storiesOf('MyComponent', module)
  .add('Default', () => ({
    components: { MyComponent },
    template: '<my-component>Hey! It is your Vue component.</my-component>'
  }));