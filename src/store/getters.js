/**
 * store中的全局getters，模块中定义的getters是模块中的getters，比如user_copy中
 */
const colorMapDefault = {
  dark:['red', 'green', 'yellow', '#385bbf', '#a5a020'],
  light:['#ff707c', '#D6FCFF', '#548e50', '#385bbf', '#a5a020']
}
export default {
  pieColors: state=> {
    return color(state);
  },
  lineColors: state=> {
    return color(state);
  }
}
function color(state,colorMap = colorMapDefault) {
  let localTheme = localStorage.getItem('theme')? localStorage.getItem('theme'):state.colorConfig.theme;
  let theme = '';
  if(localTheme === state.colorConfig.theme){
    theme = state.colorConfig.theme;
  }else{
    theme = localTheme || 'light';
  }
  return colorMap[theme]
}
