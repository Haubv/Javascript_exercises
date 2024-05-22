function CheckTriangle() {
    let a = document.getElementById("ex6.1stEgde").valueAsNumber;
    let b = document.getElementById("ex6.2ndEgde").valueAsNumber;
    let c = document.getElementById("ex6.3rdEgde").valueAsNumber;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Không phù hợp, vui lòng nhập lại.")
    } else if (Math.abs(a) - a !=0 || 
        Math.abs(b) - b != 0 || 
        Math.abs(c) - c != 0) {
        document.getElementById("ex6.display").innerText = "Ba cạnh " + 
        a + ", " + 
        b + ", " + 
        c + " không đủ điều kiện để tạo thành một tam giác."
    } else if ((a + b > c) && (b + c > a) && (a + c > b) && 
                (a > b - c) && (b > c - a) && (c > a - b) && 
                a * b * c != 0) {
        document.getElementById("ex6.display").innerText = "Ba cạnh " + 
        a + ", " + 
        b + ", " + 
        c + " đủ điều kiện để tạo thành một tam giác."
    }
}