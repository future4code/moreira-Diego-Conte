//  Escreva uma função que receba uma palavra (sem letras repetidas) e devolva a quantidade de anagramas que ela possui.

function anagram (word: string): number{
    let letters: number = word.length;
    let anagrams : number = 1;

    while(letters > 1){
        anagrams *= letters;
        letters -= 1
    }
    
    return anagrams
}

console.log(anagram("berlinda"))