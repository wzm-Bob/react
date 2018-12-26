export default {
    menus: [ // 菜单相关路由
        { key: '/home/dashboard/analysis', title: '首页', icon: 'mobile', component: 'Analysis' },
        {
            key: '/home/ui', title: 'UI', icon: 'scan',
            subs: [
                { key: '/home/ui/buttons', title: '按钮', component: 'Buttons'},
                { key: '/home/ui/icons', title: '图标', component: 'Icons'}
            ]
        } 
    ],
    others: [] // 非菜单相关路由
}