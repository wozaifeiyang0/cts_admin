// 对外暴露配置路由
export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登录',
      hidden: true,
    },
  },

  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      title: 'layout',
      icon: 'HomeFilled',
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/screen',
    name: 'screen',
    component: () => import('@/views/screen/index.vue'),
    meta: {
      title: '统计',
      icon: 'Histogram',
    },
  },
  {
    path: '/manage',
    component: () => import('@/layout/index.vue'),
    name: 'manage',
    meta: {
      title: '系统管理',
      hidden: false,
      icon: 'Setting',
    },
    children: [
      {
        path: '/manage/user',
        component: () => import('@/views/manage/user/index.vue'),
        meta: {
          title: '用户管理',
          icon: 'UserFilled',
        },
      },
      {
        path: '/manage/role',
        component: () => import('@/views/manage/role/index.vue'),
        meta: {
          title: '角色管理',
          icon: 'Coin',
        },
      },
      {
        path: '/manage/menu',
        component: () => import('@/views/manage/menu/index.vue'),
        meta: {
          title: '菜单管理',
          icon: 'Grid',
        },
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      title: '404',
      icon: 'Edit',
      hidden: 'true',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意菜单',
      hidden: true,
      icon: 'Edit',
    },
  },
]
