// let students = [
//     {
//     name: "Danish",
//     age : 15,
//     subjects : ["Maths","Science"],
//     feesPaid : false
// },
// {
//     name: "Saif",
//     age : 16,
//     subjects : ["Python","Science"],
//     feesPaid : true
// },
// {
//     name: "Salman",
//     age : 19,
//     subjects : ["Java","C++"],
//     feesPaid : false
// }]

// for(let elem of students){
//    for(let key in elem){
//         console.log(key,elem[key])    
//    }

// }


// let elem = {
//     name: "Danish",
//     age : 15,
//     subjects : ["Maths","Science"],
//     feesPaid : false
// }

// for(let key in elem){
//     console.log(elem[key]);
// }




// numbers.forEach((num) => {
//     console.log(num);
// });

// let len = names.map(name => name.toUpperCase())
// console.log(len);
// let numbers = [1,2,3,4,5,6,7,8,9,10];

// let sum = numbers.reduce((prev,curr) => prev + curr)

// console.log(sum);

// numbers.forEach((num) => {
//     if(num%2 == 0){
//         console.log(num);
//     }
// })
// let evenNumber  = numbers.filter(num =>{
//     let isEven = num%2 !== 0;
//     return isEven;
// })
// let squaresOfNumbers = numbers.map(num =>{
//     return num**3;
// })
// console.log(squaresOfNumbers);


// for(let num of numbers){
//     console.log(num);
    
// }


// filter , map ,reduce , forEach


// function powerOfNumber(num1){
//     return num1**3;
// }

// function substract1(num1){
//     return num1-1;
// }

// function ArithmaticOperation(number, callBackFunction){
//     console.log(callBackFunction(number));
// }

// ArithmaticOperation(10,powerOfNumber);
// ArithmaticOperation(10,substract1);

// let names = ["Danish","Saif","Salman","Umair"]
// let filteredArray = names.filter(name=>{
//     return name.length<=5;
// })

// filteredArray.forEach(name=>console.log(name));






// function printName(name){
//     console.log(name);
// }

// function printNameWithIdx(name,index){
//     console.log(name + " at "+index);
// }

// names.forEach((name,index)=>{
//     console.log(name + " at "+index);
// });


// let transFormedNumber = numbers.map((num)=>{
//     return num**2;
// })


// transFormedNumber.forEach(num => console.log(num))

let numbers = [1,2,3,4,5,6,7,8,9,10];

let evenNumbers = numbers.filter(n=>{
    return n%2 == 0;
});

// evenNumbers.forEach(num=>console.log(num));

let cubeNumber = numbers.map(num =>{
    return num ** 3;
})

// console.log(cubeNumber);

// let numbers = [1,2,3,4,5,6,7,8,9,10];

// let sum = numbers.reduce((prev,curr) =>{
//     return prev * curr;
// },1)
// console.log(sum);





// let sumOfNumber = numbers.reduce((prev,curr) =>{
//     return prev * curr;
// },1)

// console.log(sumOfNumber);

// let message = "Hello my name is Danish";
// let splittedMessage = message.split(" ");
// let combinedMessage = splittedMessage.reduce((prev,curr) =>{
//     return prev + " " + curr + "123";
// },"")
// console.log(combinedMessage);

// let nestedArray = [[1,2],[3,4],[5,6]];
// console.log(nestedArray);
// [1,2,3,4,5,6]

// let flatArray = nestedArray.reduce((prev,curr) =>{
//     return prev.concat(curr);
// },[])

// console.log(flatArray);


let students = [
    {name:"Danish",grade:'A'},
    {name:"Amaan",grade:'B'},
    {name:"Umair",grade:'C'},
    {name:"Saif",grade:'A'},
    {name:"Salman",grade:'B'}
]

let groupedByGrade = students.reduce((prev,curr) => {
    let key = curr.grade;
    
    if(!prev[key]){
        prev[key] = [];
    }
    prev[key].push(curr.name)
    return prev;
},{})

// 'A' : ['Danish','Saif'],
// 'B' : ['Amaan','Salman'],
// 'C' : ['Umair'],

// students.forEach(x =>{
//     if(x.grade === 'A'){
//         gradeA.push(x)
//     }else if(x.grade === 'B'){
//         gradeB.push(x)
//     }else{
//         gradeC.push(x)
//     }
// })
let output = {}
students.forEach(student =>{
    let key = student.grade;
    if(!output[key]){
        output[key] = [];
    }
    output[key].push(student.name)
})
// console.log(output);


//  A : ['Danish','Saif']
//  B : ['Amaan','Salman']
//  C : ['Umair']

// let gradeA = []
// let gradeB = []
// let gradeC = []

// students.forEach(x =>{
//     if(x.grade === 'A'){
//         gradeA.push(x)
//     }else if(x.grade === 'B'){
//         gradeB.push(x)
//     }else{
//         gradeC.push(x)
//     }
// })


// console.log(gradeA);
// console.log(gradeB);
// console.log(gradeC);



// global and local variable/scope

// let c = 0

// function summation(a,b){
//     // let c = 0;
//     let xyz = 0
//     xyz = a + b;
//     return xyz
// }

// // summation(10,2);
// console.log(xyz);


// function multiply(){
//     return c * 190;
// }

// console.log(multiply());

// let numberss = [1,2,3,4,5,6,7,8,9,10];
// numberss.forEach(num => {
//     console.log(num);
// })

// let evenNumber = numberss.filter(num =>{
//     return num%2 != 0;
// })

// console.log(evenNumber);


// let squaresOfNumbers = numberss.map(num=>{
//     return num**2;
// })
// console.log(squaresOfNumbers);

// let sum = numberss.reduce((prev,curr)=>{
//     return prev*curr;
// },1)

// console.log(sum);

/**
 * 
 * 'Electronics' : [],
 * 'Home Appliances' : []
 * 'Furniture' : []
 */

let products = [
    {
        id: 1,
        name: "Laptop",
        price: 1200,
        inStock: true,
        category: "Electronics"
    },
    {
        id: 2,
        name: "Smartphone",
        price: 800,
        inStock: true,
        category: "Electronics"
    },
    {
        id: 3,
        name: "Desk Chair",
        price: 150,
        inStock: false,
        category: "Furniture"
    },
    {
        id: 4,
        name: "Running Shoes",
        price: 95,
        inStock: true,
        category: "Footwear"
    },
    {
        id: 5,
        name: "Blender",
        price: 60,
        inStock: true,
        category: "Home Appliances"
    },
    {
        id: 6,
        name: "Bookshelf",
        price: 120,
        inStock: false,
        category: "Furniture"
    },
    {
        id: 7,
        name: "Wireless Headphones",
        price: 200,
        inStock: true,
        category: "Electronics"
    },
    {
        id: 8,
        name: "T-shirt",
        price: 25,
        inStock: true,
        category: "Clothing"
    },
    {
        id: 9,
        name: "Electric Kettle",
        price: 45,
        inStock: false,
        category: "Home Appliances"
    },
    {
        id: 10,
        name: "Gaming Console",
        price: 500,
        inStock: true,
        category: "Electronics"
    }
];


let totalPrice = products.reduce((sum,product) =>{
    return sum + (product.inStock ? product.price : 0);
},0)

console.log(totalPrice);


// let availableProduct = products.filter(product=>product.inStock).map(product =>{
//     return product.price;
// });

// let availableProductNames = availableProduct.map(product =>{
//     return product.name;
// })


// let totalPrice = availableProductPrices.reduce((prev,curr)=>{
//     return prev+curr;
// },0)

// console.log(availableProduct);




















