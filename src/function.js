/*
function addToCart(quantity,productName="Elma") {
console.log('sepete eklendi: ' + productName+ ' Adet: '+quantity + ' Ürün')
}


addToCart()
addToCart('Kahve')
addToCart('Kola')
addToCart('Cips')
addToCart('Kahve',20)
*/

/*
addToCart(12)


let sayHello = ()=>{
    console.log('Hello World!')
}

sayHello()

let sayHello2 = function () {
    console.log('Hello World! 2')

}

sayHello2()



function addToCart2(productName,quantity,unitPrice) {
    
}

addToCart2('elma',5,10)
addToCart2('Armut',2,50)
addToCart2('Kahve',4,90)

function addToCart3(product) {
   console.log("Ürün: "+product.productName)
   console.log("Adet: "+product.quantity)
   console.log("Fiyat: "+product.unitPrice)


}

let Product1={productName: "Elma", unitPrice: 10, quantity: 5 }

let Product2={productName: "Elma", unitPrice: 10, quantity: 5}

let Product3={productName: "Elma", unitPrice: 10, quantity: 5}

Product2=Product3
Product2.productName="KARPUZ"

console.log(Product3.productName)



addToCart3(Product1)



function addToCart4(x) {
    console.log(products) 
}

let products=[
    {productName: "Kahve", unitPrice: 10, quantity: 5},
    {productName: "Cips", unitPrice: 10, quantity: 5},
    {productName: "Cola", unitPrice: 10, quantity: 5}
]

addToCart4(products)


function add(number1,number2) {
    console.log(number1+number2)
}


function add2(number1,number2,number3,number4) {
    console.log(number1+number2+number3+number4)
}


function add(bisey,...numbers) {
    let total=0
for (let i = 0; i < numbers.length; i++) {

    total=total+numbers[i]
}
console.log(total)
console.log(bisey)

}




add(20,30)
add(50,60,12)
add(10,30,60,67)
let numbers=[30,10,500,600,120]
console.log(Math.max(...numbers))


let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]] = [
    {name: "İç Anadolu", population:"20m"},
    {name: "Marmara", population:"30m"},
    {name: "Karadeniz", population:"10m"},
    [
        ["Ankara","Konya"],
        ["Sakarya","İstanbul"],
        ["Sinop","Trabzon"]
    ]
]
console.log(icAnadoluSehirleri)



let NewProductName,NewUnitPrice,NewQuantity

({productName:NewProductName,unitPrice:NewUnitPrice,quantity:NewQuantity}={productName: "Kahve", unitPrice: 10, quantity: 5})

console.log(NewProductName)
console.log(NewUnitPrice)
console.log(NewQuantity)

*/

// yardıma ihtiyacı olanlar Pair 10 gelebilirler 