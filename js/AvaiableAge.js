function AvaiableAge() {
    let age = document.getElementById("ex7.age").valueAsNumber;
    if (Math.floor(age) - age !=0 || isNaN(age)) {
        alert("Tuổi không hợp lệ, vui lòng nhập lại.")
    } else if ( age >= 120 || age <= 0) {
        document.getElementById("ex7.display")
        .innerText = age 
        + " không là tuổi hợp lệ của một người."
    } else {
        document.getElementById("ex7.display")
        .innerText = age 
        + " là tuổi hợp lệ của một người."
    }
}