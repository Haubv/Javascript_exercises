function CheckDivisible() {
    let a = document.getElementById("ex1.1stnumber").valueAsNumber;
    let b = document.getElementById("ex1.2ndnumber").valueAsNumber;
    if (isNaN(a) || isNaN(b)) {
        alert("Không phù hợp, vui lòng nhập lại.")
    } else if (b==0) {
        document.getElementById("ex1.display")
        .innerText = "Không thể chia cho 0."
    } else if(a%b==0){
        document.getElementById("ex1.display")
        .innerText = 
        a + " chia hết cho " + b
    } else {
        document.getElementById("ex1.display")
        .innerText = 
        a + " không chia hết cho " + b
    }
}