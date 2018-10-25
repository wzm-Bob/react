 import Mock from 'mockjs';
 
 const login = Mock.mock(
     '/user/login', 'post', (req, res) => {
         debugger
         const {
             password,
             user
         } = JSON.parse(req.body);

         if (password === '888888' && user === 'admin') {
             return {
                 status: 'ok',
                 token: 'admin',
                 roles: ['admin'],
                 currentAuthority: 'admin',
                 introduction: '超级管理员',
             }
         }
         if (password === '123456' && user === 'user') {
             return {
                 status: 'ok',
                 token: 'user',
                 roles: ['user'],
                 currentAuthority: 'user',
                 introduction: '普通用户',
             }
         }
         if (password === '1234' && user === '17797592879') {
             return {
                 status: 'ok',
                 token: 'user',
                 roles: ['user'],
                 currentAuthority: 'user',
                 introduction: '普通用户',
             }
         }
         return {
             status: 'error',
             currentAuthority: 'guest',
         }
     })
 const vehicle = Mock.mock(
     '/api/vehicle', 'post', (req, res) => {
         return {
             code: 200,
             data: [{
                 id: 1,
                 licNumber: '陕A79898',
                 color: 1,
                 buyTime: '2017-04-01'

             }, {
                 id: 1,
                 licNumber: '陕A79898',
                 color: 1,
                 buyTime: '2017-04-01'

             }],
             message: '查询成功'
         }
     })
 const user = Mock.mock(
     '/user/info', 'get', (req, res) => {
         return {
             code: 200,
             data: {
                 id: 1,
                 code:1,
                 licNumber: '宁夏',
                 color: 1,
                 buyTime: '2017-04-01'

             },
             message: '查询成功'
         }
     })

 export default {
     vehicle,
     user,
     login
 }