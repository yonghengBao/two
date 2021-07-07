/**
 * 采用定时器的方式，监听元素大小的变化，这样页面加载完成时，isReize会一直执行，改指令性能差
 */
export default {
  bind(el, binding) {
    let width = '', height = '';
    function isReize() {
      const style = document.defaultView.getComputedStyle(el);
      if (width !== style.width || height !== style.height) {
        binding.value();  // 执行传入的方法
      }
      width = style.width;
      height = style.height;
    }
    el.__timer__ = setInterval(isReize, 300); // 周期性监听元素是否改变
  },
  unbind(el) {
    clearInterval(el.__timer__);
  }
}
