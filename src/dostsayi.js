
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


//console.log(dostsayi(number1,number2))









const deger = document.getElementById('deger')   //değer oluşturarak id elementini seçiyoruz
deger.addEventListener("submit", e => {          //Yapılacaklar listesi oluştur gibi //keyup(işlem olarak algılıyor, e=element)
    e.preventDefault()
    const result1 = document.getElementById('sayi1').value;
    const result2 = document.getElementById('sayi2').value;
    const text= document.getElementById("text")
    if (result1 != "" && result2 != "") {
        text.innerHTML=dostsayi(result1, result2)
    }
})


