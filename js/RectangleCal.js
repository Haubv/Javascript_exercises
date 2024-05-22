function RectangleCal() {
    let length = document.getElementById("ex9.length").valueAsNumber;
    let width = document.getElementById("ex9.width").valueAsNumber;
    if (length <= 0 || isNaN(length) || width <= 0 || isNaN(width) || length < width) {
        alert("Số đo cạnh không hợp lệ, vui lòng nhập lại.")
    } else {
        document.getElementById("ex9.display")
        .innerText= "Diện tích của hình chữ nhật với số đo các cạnh " + 
        length + " và " +
        width + " là " +
        length * width;
    }
}