const isPrime = num => {

    if (num < 2) return false
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

function primeNumbers() { // 1 den 1000'e kadar Asal sayı üretir  

    const number = 1000
    for (let i = 0; i < number; i++) {
        console.log(isPrime(i) ? `${i} sayısı asal.` : `${i} sayısı asal değil.`)
    }
}

function perfectNumbers(number) { // Mükemmel sayı kontrolü

    if (number == null) return false

    let total = 0
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            if (number == null) return false

            console.log("Katı: " + i)
            total += i
        }
    }

    if (total === number) {
        console.log("Sayı mükemel: " + number)
    } else {
        console.log("Mükemel Bir sayı Değil: " + number)
    }



}

function produceNumber() { // 1 den 1000'e kadar sayı üretir
    for (let produceNumbers = 0; produceNumbers < 1000; produceNumbers++) {
        console.log(perfectNumbers(produceNumbers)? perfectNumbers(produceNumbers) : "")
    }
}

const dostsayi = (s1, s2) => {
    const number1 = s1
    const number2 = s2
    let total1 = 0
    let total2 = 0
    for (let i1 = 0; i1 < s1; i1++) {
        if (number1 % i1 === 0) {
            total1 += i1

        }
    }

    for (let i2 = 0; i2 < s2; i2++) {
        if (number2 % i2 === 0) {
            total2 += i2

        }
    }
    return (total1 == s2 && total2 == s1) ? `${s1} ve ${s2}  Arkadaş sayısı!` : `${s1} ve ${s2} Arkadaş değildir!`

}

PrimeNumber(2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 30, 24)

console.log("1 den 1000'e Kadar ki Asal sayılar")

primeNumbers()

console.log("------------")


perfectNumbers(6)

console.log("1 den 1000'e kadar mükemel sayı")

produceNumber()



const deger = document.getElementById('deger')   //değer oluşturarak id elementini seçiyoruz
deger.addEventListener("submit", e => {          //Yapılacaklar listesi oluştur gibi //keyup(işlem olarak algılıyor, e=element)
    e.preventDefault()
    const result1 = document.getElementById('sayi1').value;
    const result2 = document.getElementById('sayi2').value;
    const text = document.getElementById("dost")
    if (result1 != "" && result2 != "") {
        text.innerHTML = dostsayi(result1, result2)
    }
})


