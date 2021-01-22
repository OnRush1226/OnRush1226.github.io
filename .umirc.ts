import { defineConfig } from 'dumi';

function getMenus(opts:{lang?: string;base:string}){
  const menus = {
    '/dumi': [
      {
        title: 'dumi',
        // path: 'getting-started/getting-started',
        children: [
          'dumi/README',
          'dumi/dumi_router',
          'dumi/dumi_componses',
          'dumi/dumi_release'
        ]
      }
    ]
  };
  return (menus[opts.base] as []).map((menu: any)=> {
    if(!opts.lang) return menu;
    return {
      ...menu,
      title: menu[`title_${opts.lang}`] || menu.title
    }
  })
}


export default defineConfig({
  title: 'Site Name',
  mode: 'site',
  // more config: https://d.umijs.org/config
  menus: {
    '/dumi': getMenus({base: '/dumi'})
  },
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '学习笔记',
      order: 3,
      // path: '可选的',
      // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套：
      children: [
        { title: '.net core', path: '/dumi' },
        { title: 'javascript', path: '' },
      ],
    },
  ],
});
