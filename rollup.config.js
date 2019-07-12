import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from '@wessberg/rollup-plugin-ts';
import vue from 'rollup-plugin-vue';

export default [
  {
    input: 'src/index.vue',
    output: {
      name: 'MyVueComponent',
      dir: 'lib',
      format: 'umd'
    },
    plugins: [
      typescript({
        tsconfig: resolvedConfig => ({
          ...resolvedConfig,
          declaration: true,
          allowJs: false,
        }),
      }),
      resolve(),
      commonjs(),
      vue(),
    ]
  }
];
