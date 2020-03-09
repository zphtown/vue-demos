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
  },
  {
    name: 'element2',
    component: null,
    title: 'element',
    icon: 'el-icon-menu',
    children: [
      {
        name: 'checkbox2',
        path: '/checkbox',
        component: _import('element/checkbox'),
        title: 'checkbox'
      },
      {
        name: 'table2',
        path: '/table',
        component: _import('element/table'),
        title: 'table'
      },
      {
        name: 'form2',
        path: '/form',
        component: _import('element/form'),
        title: 'form'
      }
    ]
  },
  {
    name: 'element3',
    component: null,
    title: 'element',
    icon: 'el-icon-menu',
    children: [
      {
        name: 'checkbox3',
        path: '/checkbox',
        component: _import('element/checkbox'),
        title: 'checkbox'
      },
      {
        name: 'table3',
        path: '/table',
        component: _import('element/table'),
        title: 'table'
      },
      {
        name: 'form3',
        path: '/form',
        component: _import('element/form'),
        title: 'form'
      }
    ]
  },
  {
    name: 'element4',
    component: null,
    title: 'element',
    icon: 'el-icon-menu',
    children: [
      {
        name: 'checkbox4',
        path: '/checkbox',
        component: _import('element/checkbox'),
        title: 'checkbox'
      },
      {
        name: 'table4',
        path: '/table',
        component: _import('element/table'),
        title: 'table'
      },
      {
        name: 'form4',
        path: '/form',
        component: _import('element/form'),
        title: 'form'
      }
    ]
  }
]
