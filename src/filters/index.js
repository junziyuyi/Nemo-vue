/**
 * 10000 => "10,000"
 * @param {number} num
 */
export function formatCurrency(num) {
  return (+num || 0)
    .toString()
    .replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ","));
}
/**
 * @param {number} num
 */
exports.formatMoment = (data, format = "YYYY-MM-DD") => {
  let v = window.$Vue;
  if (data) {
    return v.moment(data).format(format);
  } else {
    return "";
  }
};
