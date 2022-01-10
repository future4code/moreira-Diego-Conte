```
function calculaNota(ex, p1, p2) {
  const grade = (ex + p1 * 2 + p2 * 3) / 6
  
  if(grade >= 9){
  return "A"
  } else if (grade < 9 && grade >= 7.5){
    return "B"
  } else if (grade < 7.5 && grade >= 6){
    return "C"
  } else{
    return "D"
  }
}
```