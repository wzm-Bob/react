import Mock from "mockjs"
export const navData = Mock.mock(
    '/api/nav', 'get', (req, res) => {
        return [
        {
            tilte: '走马观花',
            id: '1',
            path: '/dashboard/analysis'
        }, {
            tilte: '铁骨铮铮',
            id: '2',
            path: '/dashboard/monitor'
        }, {
            tilte: '大义凛然',
            id: '3',
            path: '/dashboard/workplace'
        }, {
            tilte: '仪表堂堂',
            id: '4',
            path: '/list/table'
        }, {
            tilte: '平步青云',
            id: '5',
            path: '/list/excel'
        }, {
            tilte: '至高无上',
            id: '6',
            path: '/abc'
        }, {
            tilte: '无与伦比',
            id: '7',
            path: '/abc'
        }, {
            tilte: '瞒天过海',
            id: '8',
            path: '/abc'
        }
     ]
    })