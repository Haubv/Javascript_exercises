function CelciusConverter() {
    let celcius = document.getElementById("ex13.celcius").valueAsNumber;
    if (isNaN(celcius)) {
        alert("Chỉ số nhiệt độ không hợp lệ, mời nhập lại")
    } else {
        document.getElementById("ex13.display").innerText = celcius + 
        " độ C tương ứng với " + 
        (celcius * 1.8 + 32) + 
        " độ F."
    }
}