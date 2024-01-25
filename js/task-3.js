function getElementWidth(content, padding, border) {
  const contval = Number.parseFloat(content);
  const padval = Number.parseFloat(padding);
  const borval = Number.parseFloat(border);
  return contval + padval * 2 + borval * 2;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
