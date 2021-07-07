// 防抖函数
/**
 * 事情持续触发，但目前函数只是在到达延迟delay时间才会被执行，一直触发，一直没达到延迟时间则，目标函数fn一直不执行
 * @param fn 目标函数
 * @param delay 延迟时间
 * @returns {Function}
 * @private
 */
const _debounce = (fn, delay) => {
    delay = delay || 600
    let timer;
    return () => {
        let _this = this;
        let args = arguments;
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            timer = null
            fn.apply(_this, args)
        }, delay);
    }
}
// 节流函数
/**
 * 事情持续触发，目标函数fn每间隔interval时间执行一次
 * @param fn 目标函数
 * @param interval 间隔时间
 * @returns {Function}
 * @private
 */
const _throttle = (fn, interval) => {
    let last;
    let timer;
    interval = interval || 600;
    return () => {
        let _this = this;
        let args = arguments;
        let now = new Date();
        if (last && now - last < interval) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                last = now;
                fn.apply(_this, args);
            }, interval)
        } else {
            last = now;
            fn.apply(_this, args);
        }
    }
}



export {  _debounce, _throttle}
