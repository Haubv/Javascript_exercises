function CheckNumber() {
    let number = document.getElementById("ex3.number").valueAsNumber;
    if (Math.floor(number) - number !=0 || isNaN(number)) {
        alert("Không phải số nguyên, vui lòng nhập lại.")
    } else if (number <0) {
        document.getElementById("ex3.display")
        .innerText = "Số " + 
        number + " nhỏ hơn 0."
    } else {
        document.getElementById("ex3.display")
        .innerText = "Số " + 
        number + " lớn hơn 0."
    }
}