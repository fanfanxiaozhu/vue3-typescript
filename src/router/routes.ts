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
    hidden: 'false',
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
