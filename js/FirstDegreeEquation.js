function FirstDegreeEquation() {
    let a = document.getElementById("ex11.a").valueAsNumber;
    let b = document.getElementById("ex11.b").valueAsNumber;

    if (isNaN(a) || isNaN(b)) {
        alert("Hệ số không hợp lệ, mời nhập lại.")
    } else if (a==0 && b==0) {
        document.getElementById("ex11.display").innerText = "Phương trình vô số nghiệm."
    } else if (a==0 && b!=0) {
        document.getElementById("ex11.display").innerText = "Phương trình vô nghiệm."
    } else if (a!=0) {
        document.getElementById("ex11.display").innerText = "Phương trình có nghiệm là " + -b/a;
    }
}
