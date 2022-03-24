function checaRenovacaoRG(
    anoAtual: number,
    anoNascimento: number,
    anoEmissao: number
  ): string {
    let idade: number = anoAtual - anoNascimento;
    let tempoCarteira: number = anoAtual - anoEmissao;
  
    if (idade <= 20) {
      return tempoCarteira >= 5
        ? "Documento com mais de 5 anos. Importa renová-lo."
        : "Documento com menos 5 anos. Não é necessário renová-lo.";
    } else if (idade >= 20 || idade <= 50) {
      return tempoCarteira >= 10
        ? "Documento com mais de 10 anos. Importa renová-lo."
        : "Documento com menos 10 anos. Não é necessário renová-lo.";
    } else if (idade > 50) {
      return tempoCarteira >= 15
        ? "Documento com mais de 15 anos. Importa renová-lo."
        : "Documento com menos 15 anos. Não é necessário renová-lo.";
    } else {
      return "error";
    }
  }
  
  console.log(checaRenovacaoRG(2022, 1991, 1995))