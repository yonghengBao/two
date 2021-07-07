/**
 * 去掉null
 * @param value 需要过滤的原始值
 * @param str 需要代替null的字符，默认为空
 * @returns {string}
 */
export default (value,str ='') =>{
  if(value ==="null" || value ===null){
    return str
  }else{
    return value
  }
}
