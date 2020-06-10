import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/mylogin'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/home',
    component: () => import('@/views/home/index'),
    hidden: true
  },
  {
    path: '/product-list',
    component: () => import('@/views/product/list'),
    hidden: true
  },
  {
    path: '/product-detail',
    component: () => import('@/views/product/detail'),
    hidden: true
  },
  {
    path: '/detail',
    component: () => import('@/views/aboutUs/detail'),
    hidden: true
  },
  {
    path: '/news',
    component: () => import('@/views/aboutUs/news'),
    hidden: true
  },
  {
    path: '/equipment',
    component: () => import('@/views/aboutUs/equipment'),
    hidden: true
  },
  {
    path: '/contact',
    component: () => import('@/views/contact/contact'),
    hidden: true
  },
  {
    path: '/about-us',
    component: () => import('@/views/aboutUs/about-us'),
    hidden: true
  },
  {
    path: '/application-list',
    component: () => import('@/views/application/list'),
    hidden: true
  },
  {
    path: '/application-detail',
    component: () => import('@/views/application/detail'),
    hidden: true
  },
  {
    path: '/mylogin',
    component: () => import('@/views/login/mylogin'),
    hidden: true
  },






  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },
  {
    path: '/banner',
    component: Layout,
    redirect: '/banner/list',
    meta: { title: 'Banner', icon: 'tv' },
    children: [
      {
        path: 'list',
        name: 'AdminBannerList',
        component: () => import('@/views/admin/banner/list'),
        meta: { title: 'Banner List', icon: 'list' }
      },
      {
        path: 'create',
        name: 'AdminBannerCreate',
        component: () => import('@/views/admin/banner/create'),
        meta: { title: 'Create Banner', icon: 'create' }
      },
      {
        path: 'edit',
        name: 'AdminBannerEdit',
        component: () => import('@/views/admin/banner/edit'),
        meta: { title: 'Edit Banner', icon: 'create' },
        hidden:true
      },
    ]
  },
  {
    path: '/admin-product',
    component: Layout,
    redirect: '/admin-product/list',
    meta: { title: 'Product', icon: 'example' },
    children: [
      {
        path: 'list',
        name: 'AdminProductList',
        component: () => import('@/views/admin/product/list'),
        meta: { title: 'Product List', icon: 'list' }
      },
      {
        path: 'create',
        name: 'AdminProductCreate',
        component: () => import('@/views/admin/product/create'),
        meta: { title: 'Create Product', icon: 'create' }
      },
      {
        path: 'edit',
        name: 'AdminProductEdit',
        component: () => import('@/views/admin/product/edit'),
        meta: { title: 'Edit Product', icon: 'create' },
        hidden: true
      },
    ]
  },
  {
    path: '/admin-class',
    component: Layout,
    meta: { title: 'Classification', icon: 'product-fill' },
    children: [
      {
        path: 'list',
        name: 'AdminClassList',
        component: () => import('@/views/admin/classification/list'),
        meta: { title: 'Classification', icon: 'product-fill' }
      },

      {
        path: 'edit',
        name: 'AdminClassEdit',
        component: () => import('@/views/admin/classification/edit'),
        meta: { title: 'Edit Classification', icon: 'create' },
        hidden: true
      },
    ]
  },
  {
    path: '/admin-news',
    component: Layout,
    meta: { title: 'News', icon: 'building' },
    children: [
      {
        path: 'list',
        name: 'AdminNewsList',
        component: () => import('@/views/admin/news/list'),
        meta: { title: 'News List', icon: 'list' }
      },
      {
        path: 'create',
        name: 'AdminNewsCreate',
        component: () => import('@/views/admin/news/create'),
        meta: { title: 'Create News', icon: 'create' }
      },
      {
        path: 'edit',
        name: 'AdminNewsEdit',
        component: () => import('@/views/admin/news/edit'),
        meta: { title: 'Edit News', icon: 'create' },
        hidden: true
      },
    ]
  },
  {
    path: '/admin-application',
    component: Layout,
    meta: { title: 'Application', icon: 'app' },
    children: [
      {
        path: 'list',
        name: 'AdminAppList',
        component: () => import('@/views/admin/application/list'),
        meta: { title: 'Application List', icon: 'list' }
      },
      {
        path: 'create',
        name: 'AdminAppCreate',
        component: () => import('@/views/admin/application/create'),
        meta: { title: 'Create Application', icon: 'example' }
      },
      {
        path: 'edit',
        name: 'AdminAppEdit',
        component: () => import('@/views/admin/application/edit'),
        meta: { title: 'Edit Application', icon: 'create' },
        hidden: true
      },
    ]
  },
  {
    path: '/admin-message',
    component: Layout,
    meta: { title: 'Message', icon: 'message' },
    children: [
      {
        path: 'list',
        name: 'AdminMsgList',
        component: () => import('@/views/admin/message/list'),
        meta: { title: 'Message', icon: 'message' }
      }
    ]
  },
  {
    path: '/admin-equipment',
    component: Layout,
    meta: { title: 'Equipment', icon: 'equipment' },
    children: [
      {
        path: 'list',
        name: 'AdminEquipList',
        component: () => import('@/views/admin/equipment/list'),
        meta: { title: 'Equipment List', icon: 'list' }
      },
      {
        path: 'create',
        name: 'AdminEquipCreate',
        component: () => import('@/views/admin/equipment/create'),
        meta: { title: 'Create Equipment', icon: 'create' }
      },
      {
        path: 'edit',
        name: 'AdminEquipmentEdit',
        component: () => import('@/views/admin/equipment/edit'),
        meta: { title: 'Edit Equipment', icon: 'create' },
        hidden: true
      },
    ]
  },
  {
    path: '/admin-about-us',
    component: Layout,
    children: [
      {
        path: 'edit',
        name: 'AdminAboutUs',
        component: () => import('@/views/admin/about-us/edit'),
        meta: { title: 'About Us', icon: 'us' }
      }
    ]
  },
  {
    path: '/admin-information',
    component: Layout,
    children: [
      {
        path: 'edit',
        name: 'AdminInformation',
        component: () => import('@/views/admin/information/edit'),
        meta: { title: 'Information', icon: 'tel' }
      }
    ]
  },






  //
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'example' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
