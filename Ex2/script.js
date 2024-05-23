//Bài 1: Viết một chương trình JavaScript thực hiện đảo ngược các giá trị trong một mảng đã cho. Không sử dụng phương thức reverse()
function reverse() {
    let array = [1,2,3,4,5,6]
    let result = []
    while(array.length) {
        result.push(array.pop())
    }
    document.getElementById("ex1.display").innerText = "Array after reverse: " + "[" + result + "]"
}

//Bài 2: Viết một chương trình JavaScript để tìm một giá tri được nhập vào từ hộp thoại có nằm trong mảng hay không. Nếu có in ra vị trí của phần tử đó.
function getIndex() {
    let index = document.getElementById("ex2.index").value
    let array = [1,2,3,4,5,6,7,"Bike"]
    check = false
    for (let i = 0; i<array.length;i++) {
        if(index==array[i]) {
            check = true
            document.getElementById("ex2.display").innerText = 
            "Phần tử " + 
            index + 
            " xuất hiện ở vị trí thứ " + 
            (i+1) + " trong mảng."
        }
    } if(!check) {
        document.getElementById("ex2.display").innerText = 
        "Không có phần tử " + 
        index + 
        " trong mảng."
    }
}

function bingoGame() {
    let index = document.getElementById("ex3.index").value;
    let array = [1,5,34,5,2,6,445,6,24,6,7,4,54];
    check = false;
    for (let i = 0;i<array.length;i++) {
        if(array[i] == index) {
            check = true;
            alert("Bingo!");
            location.reload()
            break;
        }
    }
    if(!check) {
        alert("Chúc bạn may mắn lần sau");
        location.reload()
    }
}

function getMax() {
    let list = document.getElementById("ex4.list").value
    let array = list.split(' ')
    max = Number(array[0])
    for (let i = 0; i<array.length;i++) {
        if (Number(array[i]) > max) {
            max = Number(array[i]);
        }
    }
    document.getElementById("ex4.display").innerText = "Số lớn nhất trong dãy là " + max
}

const todoList = ["Go to bed at 11pm", "Do homework at 8pm"];
let list = document.getElementById("ex5.list");

function toDoList() {
    let option = document.getElementById("ex5.option").value
    switch(option) {
        case "C":
            let request = document.getElementById("ex5.create").value
            todoList.push(request)
            document.getElementById("ex5.display").innerHTML=""
            for (let i = 0; i<todoList.length;i++) {
                document.getElementById("ex5.display").innerHTML += `${i+1}. ${todoList[i]} \n`
            }
            break;
        case "R":
            document.getElementById("ex5.display").innerHTML=""
            for (let i = 0; i<todoList.length;i++) {
                document.getElementById("ex5.display").innerHTML += `${i+1}. ${todoList[i]} \n`
            }
            break;
        case "U":
            let modify = document.getElementById("ex5.modify").value
            let modify_id = document.getElementById("ex5.modify_id").value
            todoList[modify_id-1] = modify 
            document.getElementById("ex5.display").innerHTML=""
            for (let i = 0; i<todoList.length;i++) {
                document.getElementById("ex5.display").innerHTML += `${i+1}. ${todoList[i]} \n`
            }
            break;
        case "D":
            document.getElementById("ex5.display").innerHTML=""
            let delete_id = document.getElementById("ex5.delete_id").value
            todoList.pop(todoList[delete_id])
            for (let i = 0; i<todoList.length;i++) {
                document.getElementById("ex5.display").innerHTML += `${i+1}. ${todoList[i]} \n`
            }
            break;
        default:
            alert("Chỉ nhận các ký tự: C R U D.")
    }
}

