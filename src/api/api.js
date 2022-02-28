const products = [
    {
        id: 1,
        nombre: "Banana Crasher",
        porcTHC: "21%",
        porcIND: "50%",
        porcSAT: "50%",
        flowering: "9 weeks",
        precio: 15300,
        img: "/img/geneticas/genetica1.png" ,
        stock: 100,
        category: "hibridas"
    },
    {
        id: 2,
        nombre: "Banana Slurricane" ,
        porcTHC: "24%",
        porcIND: "50%",
        porcSAT: "50%",
        flowering: "9 weeks",
        precio: 15300,
        img: "/img/geneticas/genetica2.png",
        stock: 100,
        category: "hibridas"
    },
    {
        id: 3,
        nombre: "Garlic Vibez",
        porcTHC: "27%",
        porcIND: "50%",
        porcSAT:"50%" ,
        flowering:"9 weeks",
        precio: 15300,
        img: "/img/geneticas/genetica3.png",
        stock: 100,
        category: "hibridas"
    },
    {
        id: 4,
        nombre: "Glukies Bx",
        porcTHC: "24%",
        porcIND: "60%",
        porcSAT:  "40%",
        flowering: "9 a 10 weeks",
        precio: 11900,
        img: "/img/geneticas/genetica4.png",
        stock: 100,
        category: "indicas"
    },
    {
        id: 5,
        nombre: "Gorila Sherbert",
        porcTHC: "27%",
        porcIND: "60%",
        porcSAT: "40%",
        flowering:"9 weeks",
        precio:9350,
        img: "/img/geneticas/genetica5.png",
        stock: 100,
        category: "indicas"
    },
    {
        id: 6,
        nombre:"Haze Berry" ,
        porcTHC: "27%",
        porcIND:"60%" ,
        porcSAT:"40%" ,
        flowering: "8 weeks",
        precio:9350,
        img: "/img/geneticas/genetica6.png",
        stock: 100,
        category: "indicas"
    },
    {
        id: 7,
        nombre: "Head Band Bubba",
        porcTHC: "18%",
        porcIND: "60%",
        porcSAT: "40%",
        flowering: "8 weeks",
        precio: 9350,
        img: "/img/geneticas/genetica7.png",
        stock: 100,
        category: "indicas"
    },
    {
        id: 8,
        nombre: "La Confidencial Og",
        porcTHC: "27%",
        porcIND: "70%",
        porcSAT: "30%",
        flowering: "8 weeks",
        precio: 9350,
        img: "/img/geneticas/genetica8.png",
        stock: 100,
        category: "indicas"
    },
    {
        id: 9,
        nombre: "Orange Apricot",
        porcTHC: "25%",
        porcIND: "40%",
        porcSAT:  "60%",
        flowering: "8 a 9 weeks",
        precio: 15300,
        img: "/img/geneticas/genetica9.png",
        stock: 100,
        category: "sativas"
    },
    {
        id: 10,
        nombre: "Orange Storm",
        porcTHC: "24%",
        porcIND: "50%",
        porcSAT: "50%",
        flowering: "8 a 9 weeks",
        precio: 15300,
        img: "/img/geneticas/genetica10.png",
        stock: 100,
        category: "hibridas"
    },
    {
        id: 11,
        nombre: "Papaya",
        porcTHC: "30%",
        porcIND: "20%",
        porcSAT:  "80%",
        flowering: "9 weeks",
        precio: 15300,
        img: "/img/geneticas/genetica11.png",
        stock: 100,
        category: "sativas"
    },
    {
        id: 12,
        nombre: "Tropical Smoothie",
        porcTHC: "25%",
        porcIND: "50%",
        porcSAT: "50%",
        flowering: "8 weeks",
        precio: 11900,
        img: "/img/geneticas/genetica12.png",
        stock: 100,
        category: "hibridas"
    },
    {
        id: 13,
        nombre: "Chocolate Bubba",
        porcTHC: "25%",
        porcIND: "40%",
        porcSAT: "60%",
        flowering: "9 weeks",
        precio: 9350,
        img: "/img/geneticas/genetica13.png",
        stock: 100,
        category: "sativas"
    }
]


const promesa = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve(products)
    }, 1000)
})


function getProducts(){
    return promesa
}

export{
    getProducts,
}