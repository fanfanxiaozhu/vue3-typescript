export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    meta: {
      hidden: true,
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          hidden: false,
          title: '首页',
          icon: 'HomeFilled'
        }
      }
    ]
  },
  {
    path: '/screen',
    name: 'screen',
    component: () => import('@/views/screen/index.vue'),
    meta: {
      hidden: false,
      title: '数据大屏',
      icon: 'Monitor'
    }
  },
  {
    path: '/acl',
    name: 'acl',
    component: () => import('@/layout/index.vue'),
    meta: {
      hidden: false,
      title: '权限管理',
      icon: 'Lock'
    },
    children: [
      {
        path: '/acl/user',
        name: 'user',
        component: () => import('@/views/acl/user/index.vue'),
        meta: {
          hidden: false,
          title: '用户管理',
          icon: 'User'
        }
      },
      {
        path: '/acl/role',
        name: 'role',
        component: () => import('@/views/acl/role/index.vue'),
        meta: {
          hidden: false,
          title: '角色管理',
          icon: 'UserFilled'
        }
      },
      {
        path: '/acl/permission',
        name: 'permission',
        component: () => import('@/views/acl/permission/index.vue'),
        meta: {
          hidden: false,
          title: '菜单管理',
          icon: 'Menu'
        }
      }
    ]
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('@/layout/index.vue'),
    meta: {
      hidden: false,
      title: '商品管理',
      icon: 'Goods'
    },
    children: [
      {
        path: '/product/trademark',
        name: 'trademark',
        component: () => import('@/views/product/trademark/index.vue'),
        meta: {
          hidden: false,
          title: '品牌管理',
          icon: 'Postcard'
        }
      },
      {
        path: '/product/attr',
        name: 'attr',
        component: () => import('@/views/product/attr/index.vue'),
        meta: {
          hidden: false,
          title: '属性管理',
          icon: 'Operation'
        }
      },
      {
        path: '/product/spu',
        name: 'spu',
        component: () => import('@/views/product/spu/index.vue'),
        meta: {
          hidden: false,
          title: 'SPU管理',
          icon: 'Histogram'
        }
      },
      {
        path: '/product/sku',
        name: 'sku',
        component: () => import('@/views/product/sku/index.vue'),
        meta: {
          hidden: false,
          title: 'SKU管理',
          icon: 'DataLine'
        }
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
    meta: {
      hidden: true
    }
  }
]
