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
        name: 'test',
        path: '/test',
        component: _import('test/test'),
        title: 'test'
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
      }
    ]
  }
]
