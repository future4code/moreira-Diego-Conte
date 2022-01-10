```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let counter = 0
  for(let i = 0; i < arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i] === numeroEscolhido){
      counter = counter + 1
    }
  }
  
  if(counter !== 0){
    return `O número ${numeroEscolhido} aparece ${counter}x`
  } else {
    return `Número não encontrado`
  }
}
```