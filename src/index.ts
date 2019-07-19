import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
class MyVueComponent extends Vue {
  @Prop(Number) readonly propA?: number;
  @Prop({ default: 'default value' }) readonly propB!: string
  @Prop([String, Boolean]) readonly propC: string | boolean | undefined

  // Vue.js component's lifecycle methods are available here as well as custom ones
  mounted() {}
}

export default MyVueComponent;
