

function PrimeNumber(...PrimeNumbers) { // Ödev 1

    console.log("Dizi de ki en büyük sayı: "+Math.max(...PrimeNumbers[0]))

    console.log("Dizi de ki en küçük sayı: "+Math.min(...PrimeNumbers[0]))

    let count=PrimeNumbers[0].length;

    PrimeNumbers.forEach(PrNumbers => {


        for (let i = 0; i < count; i++) {

            if(count%i==0) {

                console.log("Asal Sayı değil: "+PrNumbers[i])

            } else {

                console.log("Asal Sayı: "+PrNumbers[i])


            }
        
        }

 
});

   
}


let numbers=[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
PrimeNumber(numbers)
/*

let inputSay=document.getElementById("sayi")
inputSay.addEventListener("submit",(inputValue)=>{

    if(isNaN(inputValue.key) && inputValue.key!="," && inputValue.key!="enter") {

        inputValue.preventDefault()
        return false
      
    } else {
    PrimeNumber(inputValue.key)  
    }
    


    

})

function primeNumber(...numbers) {
    numbers[0].forEach(numb => console.log(numb))
}

const numbs = [3, 50, 69, 80, 90, 36, 1, 7, 6]
primeNumber(numbs)

*/