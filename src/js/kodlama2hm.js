
//ASAL SAYI PROBLEM
const isPrime = num => {            //const=sabit (kısa fonk kullanma) //
    if (num < 2) return false
    for (let i = 2; i < num; i++) {
        let findNumbers = num;
        if (findNumbers % i === 0) return false
        } 
        return true
}
function findNumbers(...params) {
    const length=params.length
    for (let i = 0; i < length; i++) {
        let findNumbers = params[i];
        console.log(isPrime(findNumbers) ? `${findNumbers} sayısı asal.` : `${findNumbers} sayısı asal değil.`)
    }

    
}

function Numbers() {
    const length=1000
    for (let i = 0; i <=length; i++) {
        console.log(isPrime(i) ? `${i} sayısı asal.` : `${i} sayısı asal değil.`)
    }
}

findNumbers(0, 1, 2, 5, 9, 15, 36, 30, 24)

console.log('1 den bin\'e kadar asal sayı örnekleri')

//Numbers()

