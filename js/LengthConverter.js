function LengthConverter() {
    let length = document.getElementById("ex14.length").valueAsNumber;
    let factor = 3.280839895
    if(isNaN(length) || length <= 0) {
        alert("Chỉ số chiều dài không hợp lệ, mời nhập lại.")
    } else {
        document.getElementById("ex14.display").innerText = length + 
        "m tương ứng với " + 
        (length * factor) + "feet."
    }
}