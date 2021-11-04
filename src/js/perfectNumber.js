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

perfectNumbers(6)

console.log("1 den 1000'e kadar mükemel sayı")

produceNumber()