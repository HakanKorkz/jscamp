const isPrime = num => {

    if(num < 2) return false
    for (var i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }

    return true
}

function PrimeNumber(...numbers) { // Ödev 1
    console.log("Dizideki en büyük sayı: " + Math.max(...numbers))
    
    console.log("Dizideki en küçük sayı: " + Math.min(...numbers))

    numbers.forEach(number => {
        console.log(isPrime(number) ? `${number} sayısı asal.` : `${number} sayısı asal değil.`)
    });

    return true;
}


const checkPerfectNumber = num => {
    if ( num === 1 ) return false;

    let sum = 1;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
           sum = sum + i + num / i;
            if (sum > num) {
                return false;
            }
        }
    }

    return sum === num;
}

function checkPerfectNumbers(maxNum) {
    let perfectNumbers = [];
    for (var i = 1; i < maxNum; i++) {
        if (checkPerfectNumber(i))
            perfectNumbers = [...perfectNumbers, i]
    }
    console.log(`Mükemmel sayılar: ${perfectNumbers}`)
}


//let numbers=[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
PrimeNumber(2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 30,24)

checkPerfectNumbers(1000)

console.log("------------")