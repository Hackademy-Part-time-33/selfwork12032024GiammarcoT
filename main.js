// // TRACCIA 1
// let numbers = [3, 5, 10, 2, 8];
// let media = numbers.reduce((acc, el) => acc+el, 0)/numbers.length;
// console.log(media);


// let minornumbers = [];
// numbers.forEach(element => {
//     if (element < media) {
//         minornumbers.push(element);
//     }
// });
// console.log(minornumbers);

// let greaternumbers = [];
// numbers.forEach(element => {
//     if (element > media) {
//         greaternumbers.push(element);
//     }
// });
// console.log(greaternumbers);




// // TRACCIA 2
// let array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];
// array.sort ((a, b) => b - a);
// console.log(array);
// array.sort ((a, b) => a - b);
// console.log(array);




// // TRACCIA 3
// let phrase = `i topi non avevano nipoti`
// function testpalindrom(phrase) {
//     phrase = phrase.replace(/\W/g, "");
//     let reversed = phrase.split("").reverse().join("");
//     return phrase === reversed;
// }
// console.log(testpalindrom(phrase));




// TRACCIA 4
// let mixArray = [1, true, "hackademy", 100, "Javascript", false, null, "php"]

// let onlystring = (stringfilter) => {
//     let newarray = stringfilter.filter(el => typeof el === "string");
//     console.log(newarray);
//     return(stringfilter);
// };
// onlystring(mixArray);




// TRACCIA 5
let Arraynumbers1 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
let Arraynumbers2 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
let ArrayOperations = [];
console.log(Arraynumbers1, Arraynumbers2);

function arrayop(array1, array2) {
    let selectoperator = prompt("Seleziona il tuo operatore \n 1-addizione \n 2-sotttrazione \n 3-moltiplicazione \n 4-divisione");
    for (let i = 0; i < array1.length; i++) {
        if (selectoperator == 1) {
            ArrayOperations.push(array1[i] + array2[i]);
        }
        else if (selectoperator == 2)
        ArrayOperations.push(array1[i] - array2[i]);

        else if (selectoperator == 3)
        ArrayOperations.push(array1[i] * array2[i]);

        else if (selectoperator == 4)
        ArrayOperations.push(array1[i] / array2[i]);
    
    }
    return(ArrayOperations);
}
arrayop(Arraynumbers1, Arraynumbers2)
console.log(ArrayOperations);


// Traccia 5:
//  Scrivi una funzione che dati 2 array di 10 elementi interi casuali compresi tra 1 e 10, permetta di effettuare, una delle seguenti operazioni: 

//     addizione
//     sottrazione
//     moltiplicazione
//     divisione
//     Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.
//     Esempio: Input: a= [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b= [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione" Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]