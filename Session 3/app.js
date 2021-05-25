// console.log("haha");


// Aray - Mảng
// Khai báo mảng

// let array = [1, "dfasf", [1, 2, 3], true];

// console.log(array);

// VD

// let number = [1, 2, 3, 4];
// console.log(number);

// Một số thuật ngữ với mảng (index/ value/ lenght)

// index
// let number = [1, 2, 3, 4];

// index      0  1   2  3 length - 1

// lenght : độ dài của mảng

// value: giá trị của mảng
// value 0 - 1
//       1 - 2
//       2 - 3
//       3 - 4

//  console.log(number);

// Một số thao tác với mảng: C/R/U/D

// Create
// Read
// Update
// Delete


//1.  Read

// let name = ["Linh", "Chi", "Mai", "Đào"];
// Read one: lấy ra theo chỉ số index của mảng
// console.log(name[0]);
// console.log(name[1]);
// console.log(name[3]);

// Read all

// Sử dụng vòng for để in ra tất cả các phần tử trong mảng
// let name = ["Linh", "Chi", "Mai", "Đào"];
// for (let i = 0; i <= name.length; i++) {
//     console.log(name[i]);
// }

// 2.  Update

// let name = ["Linh", "Chi", "Mai", "Đào"];
// console.log(name);
// name[0] = "Tuyết";
// console.log(name);

// VD: let number = [1, 2, 3, 4];
// update toàn bộ các phần tử trong mảng tăng lên 10 đơn vị.

// let number = [1, 2, 3, 4];
// console.log(number);

// for (let i = 0; i < number.length; i++) {
//     number[i] += 10;
// }
// console.log(number);

// 3. Create - Delete

// let name = ["Linh", "Chi", "Mai", "Đào"];

// // Create first / last (thêm phần tử vào đầu mảng / cuối mảng)
// name.unshift("Nhung"); // .unshift() thêm vào đầu mảng
// console.log(name);

// // Thêm vào cuối mảng
// name.push("Ly");
// console.log(name);

// // Delete

// // Delete phần tử đầu của mảng
// name.shift();
// console.log(name);

// // Delete phần tử ở cuối mảng
// name.pop();
// console.log(name);

// // Delete phần tử bất kỳ khi biết được vị trí index của nó

// // name.splice(index, amount) 
// // (index là chỉ số muốn xóa / amount là số lượng phần tử muốn xóa tính từ vị trí index)

// name.splice(1, 2);
// console.log(name);

// let x = 1;
// let y = 1;
// console.log(x === y); // true
// Giải thích tại sao

// Kiểu dữ liệu primitive: nguyên thủy (number, string, boolean)
// Máy tính sẽ cấp ô nhớ : name | value
                         //  x       1
                         //  y       1

// let a = [];
// let b = [];
// console.log(a === b); // fail
// // Giải thích tại sao
// console.log(typeof []); // object

// OBj: (referance type - Kiểu dữ liệu tham chiếu)
// name | address    ----> address | value
// a         id1
// b         id2


// Bài tập
// 1. Cho người dùng nhập vào 4 thao tác là chữ (C/R/U/D)
// C: cho người dùng nhập nội dung và push vào cuối mảng
// In ra toàn bộ nội dung của mảng đó

// R: In ra toàn bộ nội dung của mảng đó

// U: Hỏi người dùng chỉ số muốn cập nhật
// Cập nhật giá trị đó và in ra lại mảng đó

// D: Hỏi người dùng chỉ số muốn xóa
// Xóa và in ra mảng đó


// 2. Cho app trên chạy vô hạn
// E: cho thoát chương trình
// Else: "M nhập sai rồi, nhập lại đi"

// let arr = ["Đến giờ ăn cơm rồi"];

// let userInput = prompt("To do app - M chỉ được nhập C/R/U?D thôi nhé!!!"));

// if (userInput === "C") {
//     // Create
//     let content = prompt("Nhập nội dung mà m muốn")
//     arr.push("Còn đang học cơ mà")

// } else if ( userInput === "R") {
//     for(let i = 0; i < arr.length; i++);
//     console.log(arr[i]);

// } else if ( userInput === "U") {
//     // vị trí index
//     let index = prompt("Nhập chỉ số m muốn cập nhật");
//     let newContent = prompt("Nhập thông tin ")
//     arr[index] = 
    
// } else if ( userInput === "D") {
    
// }


// 1. To do list app
// Cho người dùng nhập vào 4 thao tác là 4 chữ (C/R/U/D)
// C - Nhập nội dung todo list và push vào cuối
//     In ra màn hình toàn bộ list hiện tại
// R - In ra toàn bộ list hiện tại
// U - Hỏi người dùng index của todo muốn update
//     Cho người dùng nhập vào nội dung update
//     In lại ra màn hình toàn bộ todo list của hiện tại
// D - Hỏi nh=gười dùng index của todo muốn delete
//     In lại ra màn hình toàn bộ todo list của hiện tại

// 2. Cho app trên chạy vô hạn
// E - Exit / Dừng chương trình
// Else - In ra invalid command

// let todoList = ["Go to work at 8"];

// let loop = true;
// while (loop) {
// let userInput = prompt("To do list app - Input C/R/U/D");

// if(userInput === "C") {
//      // Creat new todo
//      const newTodo = prompt("Input new todo");
//      todoList.push(newTodo);
//      for (let i = 0; i <= todoList.length - 1; i++) {
//          console.log(todoList[i]);
//      }
// } else if(userInput === "R") {
//     // Read all
//     for (let i = 0; i <= todoList.leghth - 1; i++) {
//         console.log(todoList[i]);
//     }
// } else if(userInput === "U") {
//     // Find index
//     const index = prompt("Please input todo index that you want to update");
//     const newContent = prompt("Please enter new todo content");
//     // Update new todo content
//     todoList[index] = newContent;
//     for (let i = 0; i <= todoList.length - 1; i++);
//     console.log(todoList[i]);
// } else if(userInput === "D") {
//     // Find index
//     const index = prompt("Please input todo index that you want to delete");
//     // Delete index
//     todoList.splice(index, i);
//     for (let i = 0; i <= todoList.length - 1; i++) {
//         console.log(todoList[i]);
//     }
// } else if (userInput === "E") {
//     break;
//     loop = False;

// } esle {
//  console.log("Invalid command");
// }

// }

