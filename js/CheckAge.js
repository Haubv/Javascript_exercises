function CheckAge() {
    let age = document.getElementById("ex2.age").valueAsNumber;
    if (Math.floor(age) - age !=0 || isNaN(age)) {
        alert("Tuổi không hợp lệ, vui lòng nhập lại.")
    } else if (age<15) {
        document.getElementById("ex2.display").
        innerText = "Độ tuổi " + 
        age + " là chưa đủ để học lớp 10."
    } else {
        document.getElementById("ex2.display")
        .innerText = "Độ tuổi " + 
        age + " là đủ để học lớp 10."
    }
}