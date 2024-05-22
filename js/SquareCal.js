function SquareCal() {
    let edge = document.getElementById("ex8.edge").valueAsNumber;
    if (edge <= 0 || isNaN(edge)) {
        alert("Số đo cạnh không hợp lệ, vui lòng nhập lại.")
    } else {
        document.getElementById("ex8.display")
        .innerText = "Diện tích của hình vuông cạnh " + 
        edge + " là "+
        edge*edge;
    }
}