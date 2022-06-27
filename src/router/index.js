import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store';
import { getToken } from '@/utils/cookie';
Vue.use(VueRouter)

/* Layout */
import Layout from '@/layout'

let orignPush=VueRouter.prototype.push;
let orignReplace=VueRouter.prototype.replace;
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve&&reject){
        orignPush.call(this,location,resolve,reject);
    }else{
        orignPush.call(this,location,()=>{},()=>{});
    }

}

VueRouter.prototype.replace=function(location,resolve,reject){
    if(resolve&&reject){
        orignReplace.call(this,location,resolve,reject);
    }else{
        orignReplace.call(this,location,()=>{},()=>{});
    }

}

// export const constantRoutes = [
//   {
//     path: '/login',
//     component: () => import('@/views/login/index'),
//     hidden: true
//   },

//   {
//     path: '/404',
//     component: () => import('@/views/404'),
//     hidden: true
//   },

//   {
//     path: '/',
//     component: Layout,
//     redirect: '/dashboard',
//     children: [{
//       path: 'dashboard',
//       name: 'Dashboard',
//       component: () => import('@/views/dashboard/index'),
//       meta: { title: '数据统计', icon: 'dashboard' }
//     }]
//   },

//   {
//     path: '/example',
//     component: Layout,
//     redirect: '/example/table',
//     name: 'Example',
//     meta: { title: '信息管理', icon: 'el-icon-s-help' },
//     children: [
//       {
//         path: 'admininfo',
//         name: 'Table',
//         component: () => import('@/views/table/admin/index'),
//         meta: { title: '管理员信息', icon: 'table' }
//       },
//       {
//         path: 'schoolinfo',
//         name: 'Table',
//         component: () => import('@/views/table/school/index'),
//         meta: { title: '驾校信息', icon: 'table' }
//       },
//       {
//         path: 'teacherinfo',
//         name: 'Table',
//         component: () => import('@/views/table/teacher/index'),
//         meta: { title: '教练信息', icon: 'table' }
//       },
//       {
//         path: 'studentinfo',
//         name: 'Table',
//         component: () => import('@/views/table/sudent/index'),
//         meta: { title: '学员信息', icon: 'table' }
//       },
//       {
//         path: 'carinfo',
//         name: 'Table',
//         component: () => import('@/views/table/car/index'),
//         meta: { title: '车辆信息', icon: 'table' }
//       },
//       {
//         path: 'subjectinfo',
//         name: 'Table',
//         component: () => import('@/views/table/subject/index'),
//         meta: { title: '题目信息', icon: 'table' }
//       },
//       {
//         path: 'tree',
//         name: 'Tree',
//         component: () => import('@/views/tree/index'),
//         meta: { title: 'Tree', icon: 'tree' }
//       }
//     ]
//   },

//   {
//     path: '/form',
//     component: Layout,
//     children: [
//       {
//         path: 'index',
//         name: 'Form',
//         component: () => import('@/views/form/index'),
//         meta: { title: 'Form', icon: 'form' }
//       }
//     ]
//   },

 
//   {
//     path: '/nested1',
//     component: Layout,
//     redirect: '/nested/menu1',
//     name: 'Nested',
//     meta: {
//       title: '系统设置',
//       icon: 'nested'
//     },
//     children: [
//       {
//         path: 'menu1',
//         component: () => import('@/views/nested/menu1/index'), // Parent router-view
//         name: 'Menu1',
//         meta: { title: '信息发布' },
//         children: [
//           {
//             path: 'menu1-1',
//             component: () => import('@/views/nested/menu1/menu1-1'),
//             name: 'Menu1-1',
//             meta: { title: 'Menu1-1' }
//           },
//           {
//             path: 'menu1-2',
//             component: () => import('@/views/nested/menu1/menu1-2'),
//             name: 'Menu1-2',
//             meta: { title: 'Menu1-2' },
//             children: [
//               {
//                 path: 'menu1-2-1',
//                 component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
//                 name: 'Menu1-2-1',
//                 meta: { title: 'Menu1-2-1' }
//               },
//               {
//                 path: 'menu1-2-2',
//                 component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
//                 name: 'Menu1-2-2',
//                 meta: { title: 'Menu1-2-2' }
//               }
//             ]
//           },
//           {
//             path: 'menu1-3',
//             component: () => import('@/views/nested/menu1/menu1-3'),
//             name: 'Menu1-3',
//             meta: { title: 'Menu1-3' }
//           }
//         ]
//       },
//       {
//         path: 'menu2',
//         component: () => import('@/views/nested/menu2/index'),
//         name: 'Menu2',
//         meta: { title: '练车安排' }
//       }
//     ]
//   },
//   {
//     path: '/nested2',
//     component: Layout,
//     redirect: '/nested/menu1',
//     name: 'Nested',
//     meta: {
//       title: '成绩分析',
//       icon: 'nested'
//     },
//     children: [
//       {
//         path: 'menu1',
//         component: () => import('@/views/nested/menu1/index'), // Parent router-view
//         name: 'Menu1',
//         meta: { title: '信息发布' },
//         children: [
//           {
//             path: 'menu1-1',
//             component: () => import('@/views/nested/menu1/menu1-1'),
//             name: 'Menu1-1',
//             meta: { title: 'Menu1-1' }
//           },
//           {
//             path: 'menu1-2',
//             component: () => import('@/views/nested/menu1/menu1-2'),
//             name: 'Menu1-2',
//             meta: { title: 'Menu1-2' },
//             children: [
//               {
//                 path: 'menu1-2-1',
//                 component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
//                 name: 'Menu1-2-1',
//                 meta: { title: 'Menu1-2-1' }
//               },
//               {
//                 path: 'menu1-2-2',
//                 component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
//                 name: 'Menu1-2-2',
//                 meta: { title: 'Menu1-2-2' }
//               }
//             ]
//           },
//           {
//             path: 'menu1-3',
//             component: () => import('@/views/nested/menu1/menu1-3'),
//             name: 'Menu1-3',
//             meta: { title: 'Menu1-3' }
//           }
//         ]
//       },
//       {
//         path: 'menu2',
//         component: () => import('@/views/nested/menu2/index'),
//         name: 'Menu2',
//         meta: { title: '练车安排' }
//       }
//     ]
//   },
//   {
//     path: '/nested3',
//     component: Layout,
//     redirect: '/nested/menu1',
//     name: 'Nested',
//     meta: {
//       title: '认证管理',
//       icon: 'nested'
//     },
//     children: [
//       {
//         path: 'menu1',
//         component: () => import('@/views/nested/menu1/index'), // Parent router-view
//         name: 'Menu1',
//         meta: { title: '信息发布' },
//         children: [
//           {
//             path: 'menu1-1',
//             component: () => import('@/views/nested/menu1/menu1-1'),
//             name: 'Menu1-1',
//             meta: { title: 'Menu1-1' }
//           },
//           {
//             path: 'menu1-2',
//             component: () => import('@/views/nested/menu1/menu1-2'),
//             name: 'Menu1-2',
//             meta: { title: 'Menu1-2' },
//             children: [
//               {
//                 path: 'menu1-2-1',
//                 component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
//                 name: 'Menu1-2-1',
//                 meta: { title: 'Menu1-2-1' }
//               },
//               {
//                 path: 'menu1-2-2',
//                 component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
//                 name: 'Menu1-2-2',
//                 meta: { title: 'Menu1-2-2' }
//               }
//             ]
//           },
//           {
//             path: 'menu1-3',
//             component: () => import('@/views/nested/menu1/menu1-3'),
//             name: 'Menu1-3',
//             meta: { title: 'Menu1-3' }
//           }
//         ]
//       },
//       {
//         path: 'menu2',
//         component: () => import('@/views/nested/menu2/index'),
//         name: 'Menu2',
//         meta: { title: '练车安排' }
//       }
//     ]
//   },
//   {
//     path: 'external-link',
//     component: Layout,
//     children: [
//       {
//         path: 'http://localhost:8080/',
//         meta: { title: '主页', icon: 'link' }
//       }
//     ]
//   },
//   {
//     path: '/',
//     component: Layout,
//     redirect: '/dashboard',
//     children: [{
//       path: 'dashboard',
//       name: 'Dashboard',
//       component: () => import('@/views/dashboard/index'),
//       meta: { title: '数据统计', icon: 'dashboard' }
//     }]
//   },

//   // 404 page must be placed at the end !!!
//   { path: '*', redirect: '/404', hidden: true }
// ]

// const createRouter = () => new VueRouter({
//   // mode: 'history', // require service support
//   //scrollBehavior: () => ({ y: 0 }),
//   routes: constantRoutes
// })

//const router = createRouter()
const router =new VueRouter({
  routes:[
          {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true
      },


    {
      path: '/404',
      component: () => import('@/views/404'),
      hidden: true
    },
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [{
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '我的信息', icon: 'dashboard' }
      }]
    },
  
    {
      path: '/example',
      component: Layout,
      redirect: '/example/table',
      name: 'Example',
      meta: { title: '信息管理', icon: 'el-icon-s-help' },
      children: [
        {
          path: 'admininfo',
          name: 'Table',
          component: () => import('@/views/table/admin/index'),
          meta: { title: '管理员信息', icon: 'table' }
        },
        {
          path: 'schoolinfo',
          name: 'Table',
          component: () => import('@/views/table/school/index'),
          meta: { title: '驾校信息', icon: 'table' }
        },
        {
          path: 'teacherinfo',
          name: 'Table',
          component: () => import('@/views/table/teacher/index'),
          meta: { title: '教练信息', icon: 'table' }
        },
        {
          path: 'studentinfo',
          name: 'Table',
          component: () => import('@/views/table/sudent/index'),
          meta: { title: '学员信息', icon: 'table' }
        },
        {
          path: 'carinfo',
          name: 'Table',
          component: () => import('@/views/table/car/index'),
          meta: { title: '车辆信息', icon: 'table' }
        },
        {
          path: 'subjectinfo',
          name: 'Table',
          component: () => import('@/views/table/subject/index'),
          meta: { title: '题目信息', icon: 'table' }
        },
      ]
    },
    {
      path: '/rz',
      component: Layout,
      redirect: '/rz/table',
      name: 'Example',
      meta: { title: '信息认证', icon: 'el-icon-s-help' },
      children: [
        {
          path: 'schoolinfo',
          name: 'Table',
          component: () => import('@/views/renzheng/school/index'),
          meta: { title: '驾校信息', icon: 'table' }
        },
        {
          path: 'teacherinfo',
          name: 'Table',
          component: () => import('@/views/renzheng/teacher/index'),
          meta: { title: '教练信息', icon: 'table' }
        },
        {
          path: 'studentinfo',
          name: 'Table',
          component: () => import('@/views/renzheng/sudent/index'),
          meta: { title: '学员信息', icon: 'table' }
        },

        
      ]
    },
    {
      path: '/nested',
      component: Layout,
      redirect: '/nested/menu1',
      name: 'Nested',
      meta: {
        title: '信息发布',
        icon: 'nested'
      },
      children: [
        {
          path: 'ks',
          component: () => import('@/views/nested/ksap/index'), // Parent router-view
          name: 'Menu1',
          meta: { title: '考试安排' },
          children: [
            {
              path: 'km1',
              component: () => import('@/views/nested/ksap/km1'),
              name: 'Menu1-1',
              meta: { title: '科目一' }
            },
            {
              path: 'km2',
              component: () => import('@/views/nested/ksap/km2'),
              name: 'Menu1-2',
              meta: { title: '科目二' },
              children: [
               
              ]
            },
            {
              path: 'km3',
              component: () => import('@/views/nested/ksap/km3'),
              name: 'Menu1-2-1',
              meta: { title: '科目三' }
            },
            {
              path: 'km4',
              component: () => import('@/views/nested/ksap/km4'),
              name: 'Menu1-2-2',
              meta: { title: '科目四' }
            },
          ]
        },
        {
          path: 'lc',
          component: () => import('@/views/nested/lcap/index'),
          name: 'Menu2',     
          meta: { title: '练车安排' },
          children: [
            {
              path: 'km1',
              component: () => import('@/views/nested/lcap/km2'),
              name: 'Menu1-1',
              meta: { title: '科目二' }
            },
            {
              path: 'km2',
              component: () => import('@/views/nested/lcap/km3'),
              name: 'Menu1-2',
              meta: { title: '科目三' },
              children: [
               
              ]
            },

          ]
        }
      ]
    },
    {
      path: 'external-link',
      component: Layout,
      children: [
        {
          path: 'http://localhost:8080/',
          meta: { title: '主页', icon: 'link' }
        }
      ]
    },
    //   // 404 page must be placed at the end !!!
      { path: '*', redirect: '/404', hidden: true }

  ]
})

// export function resetRouter() {
//   const newRouter = createRouter()
//   router.matcher = newRouter.matcher 
// }

router.beforeEach(async(to, from, next) => { // 路由跳转前监控(保证登录状态)
   
  let token=store.state.user.token
  let name=store.state.user.userinfo.loginname
 console.log("router:"+token)
if(token){
 
    if(to.path=='/login'){
      
        next('/')
    }else{
     if(name){
     
         next()
     }else{
         try {
          await store.dispatch("getuserinfo")
          next()
         } catch (error) {
             store.dispatch("logout")
             next('/login')
         }
       
     }
    }
}else{
  
  if (to.path !== '/login') {
    next('/login')
  }
  next()
}

})
export default router
