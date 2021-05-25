

// Cau dieu kien re nhanh (if - else)

// if (condition) {
    // code
// } else {
    // code
// }

// Kieu du lieu boolean (true / false)

// Cac phep so sanh trong lap trinh
// >, <, >=, <=, ==,
// !=
// || (or) && (and) ! (opposite)

// const a = 5;
// console.log (a > 10);

// console.log(a == '5');
// console.log(a === "5");

// const x = 5;
// const y = 10;

// console.log((x === 5) || (y > 10)); True
// console.log((x == "5" && y >=10)); True

// if(condition) {
//     // logic code
// } else if (condition) {
//     // logic code
// } else {
//     // logic code
// }

// if (a < 5) {
//     console.log("nho hon 5");

// } else if (a === 5) {
//     console.log("=5");

// } else {
//     console.log("haha");
// }

// Bai 1: cho nguoi dung nhap vao tuoi
// Neu tuoi nho hon 18: in ra "chưa đủ tuổi vào bar"
// Nếu tuổi 18 - 21: in ra "Vào bar nhưng không được uống rượu"
// Còn lại: "M muốn làm gì thì làm"

// const age = Number(prompt("Nhập tuổi của m đê"));

// if (age < 18) {
//    console.log("Chưa đủ tuổi vào bar");

// } else if (age >= 18 && age <= 21) {
//     console.log("Vào bar nhưng không được uống rượu");
    
// } else {
//     console.log("M muốn làm gì thì làm");

// }

// Bài 2: Cho người dùng nhập vào tuổi
// Nếu nhỏ hơn 0: in ra "Invalid age"
// Nếu tuổi = 23: "Chưa lấy được chồng đâu"
// Nếu tuổi là số lẻ: "Tuổi lẻ"
// Nếu tuổi là căn bậc hai của một số: "Perfect square"


// const age = Number(prompt("Nhập tuổi của m đê"));

// if (age < 0) {
//     console.log("Invalid age");

// } else if (age === 23) {
//     console.log("Chưa lấy được chồng đâu");

// } else if (age % 2 == 1) {
//     console.log("Tuổi lẻ");

// } else if ( age % Math.sqrt(age) === 0) {
//     console.log("Perfect");

// } else {
//     console.log("Đen thế nhỉ");

// }


// Vòng lặp while: khi chưa biết số lần lặp lại

// while (condition) {
//     //logic
// }

// Vd
//  let i =1;
//  while (i < 10) {
//      console.log(i);
//      i = i+1;
//      // i++;
//  }

 // i = 1 => in ra i =1, dòng 103 => i = 2
 // i = 2 => in ra i = 2, i = 3
 // ...
 // i = 9 => in ra i = 9, i = 10


 // Bài 3: Cho người dùng nhập vào một số bất kỳ từ 1-10
 // Tạo ra một số random từ 1-10
 // Nếu số người dùng nhập vào nhỏ hơn số random thì in ra "số bé thế"
 // Nếu mà lớn hơn "số lớn thế"
 // Nếu số người dùng nhập vào bằng số random thì in ra "M may mắn đấy" và kết thúc chương trình


//  const randomNumber = Math.ceil(Math.random()*10);
//  console.log(randomNumber);

// let boolean = true;

// while (boolean === true) {
//     const userInput = Number(prompt("Nhập 1 số đi bank êiii"));

//     if (userInput < randomNumber) {
//         console.log("Số bé thế");
   
//     } else if (userInput > randomNumber) {
//         console.log("Số lớn thế");
   
//     } else {
//         console.log("M may mắn đấy");
//         // boolean = false;
//         break;
   
//     }

// }

// Vòng lặp for: Khi biết trước số lần lặp lại

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
 
// for (i=1; i < 10; i++) 
// {
//     console.log(i);
// }
