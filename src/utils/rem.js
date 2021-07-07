// let recalc;
/**
 * 动态获取屏幕宽度，设置根元素的font-size属性
 */
import { _debounce } from './util';
const resizeClientFn = _debounce(recalc, 200);
const remFn = () => {
    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    if (!document.addEventListener) return;
    window.addEventListener(resizeEvt, resizeClientFn, false);
    document.addEventListener('DOMContentLoaded', resizeClientFn, false);
};
/**
 * 获取屏幕宽度
 */
function recalc() {
    let docEl = document.documentElement;
    let clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    docEl.style.fontSize =  (clientWidth / 7.5) + 'px';
};
// 监听屏幕宽度变化
const watchClient = (callback) =>{
    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    if (!document.addEventListener) return;
    window.addEventListener(resizeEvt, callback, false);
    document.addEventListener('DOMContentLoaded', callback, false);
}
export { remFn , resizeClientFn,recalc,watchClient};
