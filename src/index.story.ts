import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import MyComponent from './index.vue';

storiesOf('MyComponent', module)
  .add('Default', () => ({
    components: { MyComponent },
    template: '<my-component>Hey! It is your Vue component.</my-component>'
  }));