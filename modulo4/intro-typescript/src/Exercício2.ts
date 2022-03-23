function imprimeTresCoresFavoritas(
    cor1: string,
    cor2: string,
    cor3: string
  ): string[] {
      
    const arrColors = [];
    arrColors.push(cor1, cor2, cor3);
    return arrColors
  }
  
  console.log(imprimeTresCoresFavoritas("Vermelho", "Preto", "Azul"));