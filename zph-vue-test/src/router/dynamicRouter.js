const _import = require(`./_import_${process.env.NODE_ENV}`)
export default [
  {
    name: 'lang',
    path: '/lang',
    component: _import('lang'),
    title: '语言',
    icon: 'el-icon-s-tools'
  },
  {
    name: 'test',
    component: null,
    title: 'test',
    icon: 'el-icon-s-home',
    children: [
      {
        name: 'jsx',
        path: '/jsx',
        component: _import('test/jsx'),
        title: 'jsx'
      },
      {
        name: 'provide',
        path: '/provide',
        component: _import('test/provide'),
        title: 'provide'
      },
      {
        name: 'print',
        path: '/print',
        component: _import('test/print'),
        title: 'print'
      },
      {
        name: 'test',
        path: '/test/:id?',
        component: _import('test/test'),
        title: 'test',
        props: (route) => ({
          id: route.query.id
        })
      }
    ]
  },
  {
    name: 'element',
    component: null,
    title: 'element',
    icon: 'el-icon-menu',
    children: [
      {
        name: 'checkbox',
        path: '/checkbox',
        component: _import('element/checkbox'),
        title: 'checkbox'
      },
      {
        name: 'table',
        path: '/table',
        component: _import('element/table'),
        title: 'table'
      },
      {
        name: 'form',
        path: '/form',
        component: _import('element/form'),
        title: 'form'
      },
      {
        name: 'table-pagination-demo',
        path: '/table-pagination-demo',
        component: _import('element/table-pagination-demo'),
        title: 'table-pagination-demo'
      },
      {
        name: 'collapse-transition-demo',
        path: '/collapse-transition-demo',
        component: _import('element/collapse-transition-demo'),
        title: 'collapse-transition-demo'
      },
      {
        name: 'select-pagination-demo',
        path: '/select-pagination-demo',
        component: _import('element/select-pagination-demo'),
        title: 'select-pagination-demo'
      }
    ]
  }
]
