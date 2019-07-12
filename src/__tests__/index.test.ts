import { mount } from '@vue/test-utils';
import MyComponent from '../index.vue';

test('renders correctly', () => {
  const wrapper = mount(MyComponent, {
    slots: {
      default: 'Hey, it is a child component content'
    }
  });
  expect(wrapper).toMatchSnapshot();
});
