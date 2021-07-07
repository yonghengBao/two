import moment from 'moment';
/**
 * 时间过滤器
 * @param value 需要过滤的原始值
 * @param str 需要过滤的格式， 比如 'YYYY年MM月DD日',默认为'YYYY-MM-DD'
 * @returns {string}
 */
export default (value,str ='YYYY-MM-DD') =>{
    return moment(value).format(str);
}
