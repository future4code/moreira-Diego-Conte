```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 
 const fixedSalary = 2000.00
 let sales100 = 100 * qtdeCarrosVendidos
 let salesPerCent = (5/100) * valorTotalVendas
 
 let realSalary = fixedSalary + sales100 + salesPerCent
 
 return realSalary
} 
```