function GetMax() {
    let number1 = document.getElementById("ex4.1stnumber").valueAsNumber
    let number2 = document.getElementById("ex4.2ndnumber").valueAsNumber
    let number3 = document.getElementById("ex4.3rdnumber").valueAsNumber
    
    if (Math.floor(number1) - number1 !=0 || Math.floor(number2) - number2 !=0 || Math.floor(number3) - number3 !=0 || isNaN(number1) || isNaN(number2) || isNaN(number3)) {
        alert("Không phải số nguyên, vui lòng nhập lại.")
        window.location.reload()
    }
    let max = Math.max(number1, number2, number3)
    document.getElementById("ex4.display").innerText = "Số lớn nhất trong 3 số " + 
    number1 + ", " + 
    number2 + ", " + 
    number3 + " là " + 
    max;
}