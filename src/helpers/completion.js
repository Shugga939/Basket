function completion(number) {
  let n = number % 100;

  if (n > 4 && n < 21) {
    return `${number} товаров`;
  } else {
    n = number % 10;
    if (n === 1) {
      return `${number} товар`;
    }
    if (n > 1 && n < 5) {
      return `${number} товара`;
    } else {
      return `${number} товаров`;
    }
  }
}

export default completion