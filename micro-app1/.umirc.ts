import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  qiankun: {
    slave: {},
  },
  mountElementId: 'micro-app1',
  devServer: {
    port: 8001,
  },
});