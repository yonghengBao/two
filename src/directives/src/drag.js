/**
 *在父级元素中拖动
 */
export default {
  bind(el, binding, vnode) {
    let _el = el;
    _el.style.cssText = "position:absolute;cursor:pointer";
    _el.onmousedown = e => {
      let parentNode = el.parentNode; // 父元素
      let disX = e.clientX - _el.offsetLeft;//鼠标按下，计算当前元素距离可视区的距离
      let disY = e.clientY - _el.offsetTop;
      let canUseMaxWidth = parentNode.clientWidth - el.clientWidth;
      let canUseMaxHeight = parentNode.clientHeight - el.clientHeight;
      document.onmousemove = function (e) {
        let l = e.clientX - disX;
        let t = e.clientY - disY;
        if (l <= 0) {
          l = 0;
        } else if (l >= canUseMaxWidth) {
          l = canUseMaxWidth;
        }
        if (t <= 0) {
          t = 0;
        } else if (t >= canUseMaxHeight) {
          t = canUseMaxHeight;
        }
        _el.style.left = l + "px";
        _el.style.top = t + "px";
      }
      document.onmouseup = e => {
        document.onmousemove = document.onmouseup = null
      }
      return false
    }
  }
}
