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
  mountElementId: 'micro-app2',
  devServer: {
    port: 8002,
  },
});