/**
 * 无数据
 */
import Vue from "vue";
import NoData from "../../components/NoData";
export default {
  bind(el, binding, vnode) {
    el.style.position = el.style.position || 'relative';
    el.style.minHeight = '200px';
    const {visible, content, img} = binding.value;
    const empty = Vue.extend(NoData);
    const component = new empty({
      propsData: {
        content: content,
        imgUrl: img
      }
    }).$mount().$el;
    if (visible) {
      el.appendChild(component)
    } else {
      el.lastChild && el.removeChild(el.lastChild)
    }
  },
  update(el, binding, vnode) {
    el.style.position = el.style.position || 'relative';
    el.style.minHeight = '200px';
    const {visible, content, img} = binding.value;
    const empty = Vue.extend(NoData);
    const component = new empty({
      propsData: {
        content: content,
        imgUrl: img
      }
    }).$mount().$el;
    if (visible) {
      el.appendChild(component)
    } else {
      el.lastChild && el.removeChild(el.lastChild)
    }
  },
}
