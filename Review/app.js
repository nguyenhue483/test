
// // // Mảng

// // const arr = ["minh", 123, [1,2,3], {name: "Hoa", age:20}]

// // //C/R/U/D

// // // Create 

// // arr.unshift ("Kiên");
// // console.log(...arr);

// // // Read

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // };

// // // Update

// // arr[0] = "Tuấn";
// // console.log(...arr);

// // // Delete

// // arr.shift();
// // console.log(...arr);

// // arr.pop();
// // console.log(...arr);

// // arr.splice(1,1);
// // console.log(...arr);


// // // // object

// // const obj = {
// //     name: "Đạt",
// //     age: 17,
// // }
// // console.log(obj);

// // // C
// // obj.adress = "Xuy Xá";
// // console.log(obj);

// // // R
// // console.log(obj["name"]);
// // console.log(obj.name);

// // console.log(Object.values(obj)); // []

// // for (const a in obj) {
// //     console.log(obj[a]);
// // }

// // // U

// // obj.name = "Minh";
// // console.log(obj);

// // // D

// // delete obj.name
// // console.log(obj);

// let products = [
//     {
//         Name: "Xiaomi portable charger 20000mah",
//         Brand: "Xiaomi",
//         Price: 428,
//         Color: "White",
//         Category: "Charger"
//     },
//     {
//         Name: "VSmart Active 1",
//         Brand: "VSmart",
//         Price: 5487,
//         Color: "Black",
//         Category: "Phone"
//     },
//     {
//         Name: "iPhone X",
//         Brand: "Apple",
//         Price: 21490,
//         Color: "Gray",
//         Category: "Phone"
//     },
//     {
//         Name: "Samsung Galaxy A9",
//         Brand: "Samsung",
//         Price: 8490,
//         Color: "Blue",
//         Category: "Phone"
//     }
// ]

// // for (let i = 0; i < products.length; i++) {
// //     console.log(`#${i+1}. ${products[i].Name}
// //     Price: ${products[i].Price}`);

// // }

// // let input = Number(prompt("Enter position")) - 1;
// // console.log(products[input].Name);
// // console.log(products[input].Brand);
// // console.log(products[input].Price);
// // console.log(products[input].Color);
// // console.log(products[input].Category);

// // let cate = prompt("Enter Category").toLowerCase();

// // for (let i = 0; i < products.length; i++) {

// //     if (cate === products[i].Category.toLowerCase()) {
// //         console.log(products[i].Name);
// //         console.log(products[i].Price);
// //     }
// // }

// for (let i = 0; i < products.length; i++) {
//     if (i === 0) {
//         products[0].Providers = "PhukienzeroDientuccc";
//     } else {
//         products[i].Providers = "Tgdd";

//     }

// }
// // console.log(...products);



// let provider = prompt("Enter Provider").toLowerCase();

// for (let i = 0; i < products.length; i++) {

//     if (provider === products[i].Providers.toLowerCase()) {
//         console.log("-----------------------");
//         console.log(products[i].Name);
//         console.log(products[i].Price);
//         console.log(products[i].Color);
//         console.log(products[i].Category);
//         console.log(products[i].Providers);
//     }
// }


// function sum(a, b) {
//     return (a+b);
// }

// let s = sum(4,5);
// console.log(s);
// console.log( sum("dsa", ["fdsfd", 23]));

// 2. 
let tasks = [
    {
            part: "HTML",
            status: "false"
     },
      
    {
            part: "CSS",
            status: "false"
     },

    {
            part: "Basic of JavaScript",
            status: "false"
    },

    {
            part: "Node Package Manager",
            status: "false"
    },

    {
            part: "Git",
            status: "false"
    },

];

// 2.1.
// console.log("Hi there");
for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}.  ${tasks[i].part}
    Complete: ${tasks[i].status}`);



// 2.2

let input = prompt("Enter your command: new, delete, update, complete");

if (input === "new") {
    let inputnew = prompt("Enter new task")
    let objnew = {
        part: inputnew,
        status: "false"
    };
    tasks.push(objnew);

    for (let i = 0; i < tasks.length; i++) {
        console.log(`${i + 1}.  ${tasks[i].part}
        Complete: ${tasks[i].status}`);
    };

} else if (input === "update") {
    let inputUpdate = prompt("Enter position") - 1;
        for(i = 0; i < tasks.length; i++) {
            if(i === inputUpdate) {
                tasks[i].part = prompt("Enter new title");
            };
    console.log(tasks);
        }
 
} else if (input === "complete") {
    let inputComplete = prompt("Enter position") - 1;
        for(i = 0; i < tasks.length; i++) {
            if(i === inputComplete) {
                tasks[i].status = "true";
            };
    console.log(tasks);
        }

} else if (input === "delete") {
    let inputDelete = prompt("Enter position") - 1;

    tasks.splice(inputDelete,1);

console.log(tasks);
    }

}


