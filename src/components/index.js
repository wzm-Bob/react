/**
 * 路由组件出口文件
 * yezi 2018年6月24日
 */
import Loadable from 'react-loadable';
/* 基于组件分割的库 */
import Analysis from './dashboard/analysis';
import Icons from './ui/Icons';
import Buttons from './ui/Buttons';


/* const WysiwygBundle = Loadable({ // 按需加载富文本配置
    loader: () => import('./ui/Wysiwyg'),
    loading: Loading,
}); */

export default {
    Analysis, Icons, Buttons
}