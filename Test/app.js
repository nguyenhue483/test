// 1. Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả. (2đ)
// Đầu vào: str_input 
// Đầu ra: đảo ngược chuỗi và in ra kết quả
// Ví dụ:
// Cho: str_input = "program"; in ra: "margorp"
// Cho: str_input = "data"; in ra: "atad"
// Lưu ý: không sử dụng hàm reverse()

// function strInput (str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
   
// console.log(strInput("program"));

// 2. Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự

// 4. Tạo dữ liệu của 3 nhân viên mindX (gồm tên, tuổi, mức lương, chức vụ). Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete). (2đ)

const mindX = [
    {
        name : "Đăng",
        age : 35,
        salary : 1500,
        position : "Manager"
    },

    {
        name : "Huyền",
        age : 25,
        salary : 1000,
        position : "Accountant"
    },

    {
        name : "Hoa",
        age : 27,
        salary : 1200,
        position : "Marketing"
    },

];

let input = prompt("Enter C/R/U/D");

if(input === 'C') {
    let name = prompt("Enter name");
    let age = Number(prompt("Enter age"));
    let salary = Number(prompt("Enter salary"));
    let position = prompt("Enter position");

    let newUser = {
        name : name,
        age : age,
        salary : salary,
        position : position
    }
    mindX.push(newUser);
    console.table(mindX);

} else if (input === 'R') {
    for (const name in mindX) {
    console.table(mindX[name]);
    } 

} else if (input === 'U') {
    let index = Number(prompt("Enter index: "));
        if (index > mindX.length || index < 0) {
            console.log("Không tìm được vị trí của " + index);
    
        } else {
            mindX[index].name = prompt("Enter name");
            mindX[index].age = Number(prompt("Enter age"));
            mindX[index].salary = prompt("Enter salary");
            mindX[index].position = prompt("Enter position");
        
            console.table(mindX);
        }

} else if (input === 'D') {
    let index = Number(prompt("Enter index: "));
        if (index > mindX.length || index < 0) {
            console.log(("Không tìm được vị trí của " + index));
      
        } else {
            mindX.splice(index, 1);
            console.table(mindX);
        };
}               

   


