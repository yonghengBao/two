// 手机
export function cnPhone(str) {
  return /^[1][3-9][0-9]{9}$/.test(str);
}
// 密码
// export function password(str) {
//   return /^(?![0-9]+$)(?![a-zA-Z]+$)[(0-9A-Za-z)|(\s\S*)]+$/.test(str);
// }

export function password(str) {
  return /^[0-9A-Za-z]{6,}$/.test(str)
}