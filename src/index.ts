import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
class MyVueComponent extends Vue {
  @Prop(Number) readonly propA?: number;
  @Prop({ default: 'default value' }) readonly propB!: string
  @Prop([String, Boolean]) readonly propC: string | boolean | undefined

  mounted() {
    console.log('MOUNTED');
  }
}

export default MyVueComponent;
