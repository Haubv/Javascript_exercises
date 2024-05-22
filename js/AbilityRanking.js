function AbilityRanking() {
    let attendGrade = document.getElementById("ex5.attendGrade").valueAsNumber;
    let midGrade = document.getElementById("ex5.midGrade").valueAsNumber;
    let finalGrade = document.getElementById("ex5.finalGrade").valueAsNumber;

    let trueGrade = attendGrade * 0.15 + midGrade * 0.25 + finalGrade * 0.6;

    if (attendGrade < 0 || midGrade < 0 || finalGrade < 0 || 
        attendGrade > 10 || midGrade > 10 || finalGrade > 10 || 
        isNaN(attendGrade) || isNaN(midGrade) || isNaN(finalGrade)) {
        alert("Nhập điểm không hợp lệ.")
    } else if (trueGrade > 0 && trueGrade < 4) {
        document.getElementById("ex5.display").innerText = "Học lực kém."
    } else if (trueGrade > 4 && trueGrade < 6) {
        document.getElementById("ex5.display").innerText = "Học lực trung bình."
    } else if (trueGrade > 6 && trueGrade < 8) {
        document.getElementById("ex5.display").innerText = "Học lực khá."
    } else {
        document.getElementById("ex5.display").innerText = "Học lực giỏi."
    }
}
