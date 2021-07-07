/**
 * 数据小数点后的位数处理
 * @param value 需要处理的数据
 * @param num 保留的小数位数
 * @param type 保留小数的类型 1，四舍五入，位数不够不补0，2，四舍五入，位数不够补0
 * @returns {number}
 */
export default function (value, num = 2, type = 1) {
  if (isNaN(value)) {
    return 0;
  }
  if (value === null || value === '') {
    return '';
  }
  switch (type) {
    case 1:
      return Math.round(value * Math.pow(10, num)) / Math.pow(10, num);
    case 2:
      return value.toFixed(num);
  }
}
