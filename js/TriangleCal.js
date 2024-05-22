function TriangleCal() {
    let edge1 = document.getElementById("ex10.edge1").valueAsNumber
    let edge2 = document.getElementById("ex10.edge2").valueAsNumber
    if (edge1 <0 || edge2 <0 || 
        isNaN(edge1) || isNaN(edge2)) {
            alert("Chỉ số cạnh không hợp lệ, mời nhập lại.")
    } else {
        document.getElementById("ex10.display").innerText = "Diện tích của tam giác vuông có hai cạnh kề " + 
        edge1 + " và " +
        edge2 + " là " +
        edge1 * edge2 / 2;
    }
}