// 1. viết hàm kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không

// function startWith(str) {
//     return str.indexOf ("Java") === 0;
// }
// console.log(startWith("Java"));

// 2.  - Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
//   - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
//   - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
//   Example: 
//   [1, -10, 5, 18, -9, 5] => 27

// function findMaxDiff(arr) {
//     if(arr.length < 2)
//     return 0;
//     else {
//         let maxDiff = 0;
//         for(let i=1; i < arr.length; i++)
//         maxDiff = (maxDiff < Math.abs(arr[i] - arr[i-1])) ? Math.abs(arr[i] - arr[i-1]) : maxDiff;
//         return maxDiff;
//     }

// }
// console.log(findMaxDiff([1, -10, 5, 18, -9, 5]));

// 3. viết hàm first trả về giá trị đầu tiên của mảng, nếu n được truyền vào thì trả về 1 mảng chứa n giá trị đầu tiên của mảng (hoặc cả mảng nếu n lớn hơn số phần tử của mảng). Nếu n <= 0 thì trả về mảng trống.
// Tham số:
// - array: mảng gốc
// - n: số phần tử trả về

// function first (arr , n) {
//     if (n <= 0) 
//         return arr = [];
    
//     let arr1 = [];
//     for (let i = 0; i < arr.length; i++) {
//      if (i < n) {
//             arr1.push(arr[i]);
//         }
//     }
//         return arr1;

//      if (n > arr.length) 
//         return arr;
    
// }

// console.log(first([1,4,6,45,57,39],4));

// // 4.  Viết hàm checkInt để kiểm tra hai số nguyên được nhập vào. 
//  Nếu có 1 số âm và một số dương thì trả về true. 
//  Các trường hợp khác trả về false. 
//  Số 0 là số không âm cũng không dương
//  Tham số:
//   - number1: số nguyên thứ nhất
//  - number2: số nguyên thứ hai
 
// function checkInt (number1 , number2) {
//     if (number1 < 0 & number2 > 0 || number1 > 0 & number2 < 0) 
//         return "true";
    
//     else if (number1 === 0 || number2 === 0) 
//         return "NOT"
    
//     else 
//         return "false";

// }

// console.log(checkInt(4,6));
 
// 5. Viết một hàm JavaScript có 1 tham số n trả về tuyệt đối của hiệu só đó và 13, 
// nếu số đó lớn hơn 13 trả về gấp đôi tuyệt đối của hiệu 2 số.
// Example: 
// n = 20 // return 14
// n = 5 // return 8

// function Java (n) {
//     if (n < 13)
//     return Math.abs(n-13);
//     if (n > 13)
//     return 2*Math.abs(n-13);
// };

// console.log(Java(5));


// 6. Hãy viết một hàm để tìm giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số

// Input: là một dãy số.
// Output: giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số.

// Ví dụ:

// Input: [1, 2, 3, 8, 9]
// Output: 8 (là hiệu của 9 và 1)

function subMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } 

        else if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max-min;
}

console.log(subMax([1,2,3,8,9]));


