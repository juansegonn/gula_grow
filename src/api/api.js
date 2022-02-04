const products = [
    {
        id: 1,
        nombre: "banana crasher",
        porcTHC: "21%",
        porcIND: "50%",
        porcSAT: "50%",
        flowering: "9 weeks",
        precio: 15300,
        img: "./img/geneticas/genetica1.png" ,
        stock: 100
    },
    {
        id: 2,
        nombre: "bananaslurricane" ,
        porcTHC: "24%",
        porcIND: "50%",
        porcSAT: "50%",
        flowering: "9 weeks",
        precio: 15300,
        img: "./img/geneticas/genetica2.png",
        stock: 100
    },
    {
        id: 3,
        nombre: "garlic vibez",
        porcTHC: "27%",
        porcIND: "50%",
        porcSAT:"50%" ,
        flowering:"9 weeks",
        precio: 15300,
        img: "./img/geneticas/genetica3.png",
        stock: 100
    },
    {
        id: 4,
        nombre: "glukies bx",
        porcTHC: "24%",
        porcIND: "60%",
        porcSAT:  "40%",
        flowering: "9 a 10 weeks",
        precio: 11900,
        img: "./img/geneticas/genetica4.png",
        stock: 100
    },
    {
        id: 5,
        nombre: "gorila sherbert",
        porcTHC: "27%",
        porcIND: "60%",
        porcSAT: "40%",
        flowering:"9 weeks",
        precio:9350,
        img: "./img/geneticas/genetica5.png",
        stock: 100
    },
    {
        id: 6,
        nombre:"haze berry" ,
        porcTHC: "27%",
        porcIND:"60%" ,
        porcSAT:"40%" ,
        flowering: "8 weeks",
        precio:9350,
        img: "./img/geneticas/genetica6.png",
        stock: 100
    },
    {
        id: 7,
        nombre: "head band bubba",
        porcTHC: "18%",
        porcIND: "60%",
        porcSAT: "40%",
        flowering: "8 weeks",
        precio: 9350,
        img: "./img/geneticas/genetica7.png",
        stock: 100
    },
    {
        id: 8,
        nombre: "la confidencial og",
        porcTHC: "27%",
        porcIND: "70%",
        porcSAT: "30%",
        flowering: "8 weeks",
        precio: 9350,
        img: "./img/geneticas/genetica8.png",
        stock: 100
    },
    {
        id: 9,
        nombre: "orange apricot",
        porcTHC: "25%",
        porcIND: "40%",
        porcSAT:  "60%",
        flowering: "8 a 9 weeks",
        precio: 15300,
        img: "./img/geneticas/genetica9.png",
        stock: 100
    },
    {
        id: 10,
        nombre: "orange storm",
        porcTHC: "24%",
        porcIND: "50%",
        porcSAT: "50%",
        flowering: "8 a 9 weeks",
        precio: 15300,
        img: "./img/geneticas/genetica10.png",
        stock: 100
    },
    {
        id: 11,
        nombre: "papaya",
        porcTHC: "30%",
        porcIND: "20%",
        porcSAT:  "80%",
        flowering: "9 weeks",
        precio: 15300,
        img: "./img/geneticas/genetica11.png",
        stock: 100
    },
    {
        id: 12,
        nombre: "tropical smoothie",
        porcTHC: "25%",
        porcIND: "50%",
        porcSAT: "50%",
        flowering: "8 weeks",
        precio: 11900,
        img: "./img/geneticas/genetica12.png",
        stock: 100
    },
    {
        id: 13,
        nombre: "chocolate bubba",
        porcTHC: "25%",
        porcIND: "40%",
        porcSAT: "60%",
        flowering: "9 weeks",
        precio: 9350,
        img: "./img/geneticas/genetica13.png",
        stock: 100
    }
]


const promesa = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve(products)
    }, 2000)
})


function getProducts(){
    return promesa
}

export{
    getProducts,
}