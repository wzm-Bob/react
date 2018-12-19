export default {
    menus: [ // 菜单相关路由
        //{ key: '/app/dashboard/index', title: '首页', icon: 'mobile', component: 'Dashboard' },
        {
            key: '/home/dashboard', title: 'UI', icon: 'scan',
            subs: [
                { key: '/home/dashboard/analysis', title: '分析页', component: 'analysis'},
                { key: '/home/dashboard/monitor', title: '监控页', component: 'monitor'},
                { key: '/home/dashboard/workplace', title: '工作台', component: 'workplace'},
            ],
        }
    ],
    others: [] // 非菜单相关路由
}