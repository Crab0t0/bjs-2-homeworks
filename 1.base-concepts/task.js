"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return arr;
  }

  if (d === 0) {
    let root = -b / (2 * a);
    arr.push(root);
    return arr;
  }

  if (d > 0) {
    let root1 = (-b + Math.sqrt(d)) / (2 * a);
    let root2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(root1, root2);
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let loanBody = amount - contribution;

  if (loanBody <= 0) {
    return 0;
  }

  let P = (percent / 100) / 12;

  let monthlyPayment = loanBody * (P + (P / (((1 + P) ** countMonths) - 1)));

  let totalAmount = monthlyPayment * countMonths;

  return Number(totalAmount.toFixed(2));
}
