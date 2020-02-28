
const _import = require(`_import_${process.env.mode}`)
export default [
  {
    name: 'lang',
    path: '/lang',
    component: () => _import('lang')
  },
  {
    name: 'checkbox',
    path: '/checkbox',
    component: () => _import('checkbox')
  },
  {
    name: 'router',
    path: '/router/:username/post/:id',
    component: () => _import('router')
  },
  // {
  //   path: '/user-*',
  //   component: () => _import('router')
  // },
  {
    path: '/user/:id',
    component: {
      props: ['id'],
      template: `<div class="page purple">1211111<router-view></router-view></div>`
    },
    children: [
      {
        path: '/',
        component: {
          template: `<div>666</div>`
        }
      }
    ]
  },
  {
    name: 'page1',
    path: '/page1',
    component: () => _import('page1')
  },
  {
    name: 'page2',
    path: '/page2',
    component: () => _import('page2')
  },
  {
    name: 'provide',
    path: '/provide',
    component: () => _import('provide')
  },
  {
    name: 'inject',
    path: '/inject',
    component: () => _import('inject')
  },
  {
    name: 'form',
    path: '/form',
    component: () => _import('form')
  },
  {
    name: 'jsx',
    path: '/jsx',
    component: () => _import('jsx')
  },
  {
    name: 'KeepAlive',
    path: '/keep-alive',
    component: () => _import('keep-alive')
  },
  {
    name: 'table',
    path: '/table',
    component: () => _import('table')
  }
]
