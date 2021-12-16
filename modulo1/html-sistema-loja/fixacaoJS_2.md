```
function calculaPrecoTotal(quantidade) {
  let totalPrice;
  if(quantidade < 12){
    totalPrice = quantidade * 1.30
  } else{
    totalPrice = quantidade * 1
  }
  return totalPrice
}
```