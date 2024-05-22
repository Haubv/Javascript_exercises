function SeconDegreeEquation() {
    let a = document.getElementById("ex12.a").valueAsNumber;
    let b = document.getElementById("ex12.b").valueAsNumber;
    let c = document.getElementById("ex12.c").valueAsNumber;

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Hệ số không hợp lệ, mời nhập lại.")
    } else if (a==0) {
        if (b==0) {
            switch(c){
                case 0:
                    document.getElementById("ex12.display").innerText = "Phương trình vô số nghiệm";
                    break;
                default:
                    document.getElementById("ex12.display").innerText = "Phương trình vô nghiệm";
            }
        }
    } else {
        delta = b * b - 4 * a * c;
        if (delta < 0) {
            document.getElementById("ex12.display").innerText = "Phương trình vô nghiệm";
        } else {
            document.getElementById("ex12.display").innerText = "Phương trình có 2 nghiệm là " +
            (-b - Math.sqrt(delta))/(2*a) + " và " +
            (-b + Math.sqrt(delta))/(2*a) ;
        }
    } 
}