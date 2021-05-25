// console.log("hello");

// OBJECT

// Khai báo obj

// let obj = Object.create({});

// let obj = new Object();

// let obj = {

// }

// console.log(obj);

// // VD
// let person = {
//     name: "Huế",
//     age: 17
// }
// key: name, age
// value: Hue, 17


// // Create
// person.address = "Hà Nội";

// console.table(person);

// // Read one and read all
// console.log(person.name);
// console.log(person.age);
// console.log(person["name"]);

// // Dùng vòng for in ra tất cả value trong obj (Dùng for in)

// // Read all
// for (const key in person) {
//     console.log(person[key]);

// }

// // Update

// person.name = "Hiền";
// person.age = 18;
// console.table(person);

// // Delete
// delete person.age;
// console.table(person);


// Bài tập
// Viết 1 ứng dụng cho người dùng nhập vào 4 chữ C/R/U/D
// C: Cho người dùng nhập vào tên và tuổi
// Thêm nó vào danh sách theo dạng các phần tử obj và in ra để kiểm tra (console.table)
// R: in ra toàn bộ obj trong mảng theo dạng name - age
// U: Cho người dùng nhập vào tên muốn update, sau đó tìm kiếm trong mảng
// Nếu không thấy thì báo: "Làm gì có mà update"
// Nếu có thì cho nhập index và update lại. Sau đó in ra
// D: tương tự như update: Ko tìm thấy thì báo: "Ko thấy"
// Nếu thấy thì delete

// cho người dùng chạy vòng lặp vô hạn
// Khi nào nhập E thì stop chương trình

// const girlFriend = [
//     {
//         name: "Nhung",
//         age: 20
//     },
//     {
//         name: "Đào",
//         age: 19

//     },
//     {
//         name: "Tuyết",
//         age: 18
//     }
// ];

// let loop = true;
// while (loop) {
// let input = prompt("Nhập C/R/U/D nhé bạn ơi");

// if(input === 'C') {
//     let name = prompt("Nhập tên");
//     let age = Number(prompt("Nhập tuổi"));

//     let newUser = {
//         name : name,
//         age : age
//     }
//     girlFriend.push(newUser);
//     console.table(girlFriend);

// } else if (input === 'R') {
//     for (const name in girlFriend) {
//         console.table(girlFriend[name]);
//     }
 
// } else if (input === 'U') {
//     let index = Number(prompt("Nhập chỉ số index: "));
//     if (index > girlFriend.length || index < 0) {
//         console.log("Không tìm được vị trí của " + index);

//     } else {
//         girlFriend[index].name = prompt("Nhập tên");
//         girlFriend[index].age = Number(prompt("Nhập tuổi"));
//         alert("Cập nhật thành công");
//         console.table(girlFriend);
//     }

// } else if (input === 'D') {
//     let index = Number(prompt("Nhập chỉ số index: "));
//     if (index > girlFriend.length || index < 0) {
//         alert("Không tìm được vị trí của " + index);
  
//     } else {
//        girlFriend.splice(index, 1);
//         alert("Xóa thành công");
//         console.table(girlFriend);
//     }
// } else if (input === 'E') {
//         break;
//         loop = False;

//      console.log("Invalid command");
//  }
// }


// Function - Hàm

// Định nghĩa

// function name(a, b, c (optional)) {
//     // logic
//     // return (optional)

// }

// Ví dụ in ra từ 1 đến 10

// function print() {
//     for(let i = 0; i< 10; i++) {
//         console.log(i);
//     }
// }
// print();

// let sum = 0
// function print(a, b) {
//     for(let i = a; i < b; i++) {
//         sum += i;
//     }
//     return sum;
//     // console.log("aa");
// }
// console.log(print(0, 5));

// print(5,10);

//1. Cho người dùng nhập vào 1 cạnh hình lập phương
// Viết function tính thể tích hình lập phương
//2. viết function nhập vào 1 mảng bất kì và in ra từng phần tử trong mảng
//3. Viết function tính tổng và tích của các phần tử trong mảng

// function V() {
// const input = Number(prompt("Nhập cạnh của hình lập phương"));
// console.log(input*input*input);

// }

// V()

// 2.
// function ex2() {
//     let input = prompt("nhập mảng");
//     let arr = input.split(",");
//     for (const i of arr) {
//         console.log(i);
//     }
// }

// ex2();

// 3.

// function ex3(arr) {
//     let sum = 0;
//     for (i=0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     console.log(sum);

// let tich = 1;
// for (i = 0; i < arr.length; i++) {
//     tich *= arr[i];
// }
//  console.log(tich);
// }
// ex3 ([1,3,5]);

console.log("Hello");