function calculateDiscount (price, discount) {
  return (price-(price*discount/100)).toFixed(2)
}

export default calculateDiscount