//Bài 1: Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không.
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

//Bài 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10.
function CheckAge() {
    let age = document.getElementById("ex2.age").valueAsNumber;
    if (Math.floor(age) - age !=0 || isNaN(age)) {
        alert("Tuổi không hợp lệ, vui lòng nhập lại.")
    } else if (age<15) {
        document.getElementById("ex2.display").
        innerText = "Độ tuổi " + 
        age + " là chưa đủ để học lớp 10."
    } else {
        document.getElementById("ex2.display")
        .innerText = "Độ tuổi " + 
        age + " là đủ để học lớp 10."
    }
}

//Bài 3: Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0.
function CheckNumber() {
    let number = document.getElementById("ex3.number").valueAsNumber;
    if (Math.floor(number) - number !=0 || isNaN(number)) {
        alert("Không phải số nguyên, vui lòng nhập lại.")
    } else if (number <0) {
        document.getElementById("ex3.display")
        .innerText = "Số " + 
        number + " nhỏ hơn 0."
    } else {
        document.getElementById("ex3.display")
        .innerText = "Số " + 
        number + " lớn hơn 0."
    }
}

//Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó.
function GetMax() {
    let number1 = document.getElementById("ex4.1stnumber").valueAsNumber
    let number2 = document.getElementById("ex4.2ndnumber").valueAsNumber
    let number3 = document.getElementById("ex4.3rdnumber").valueAsNumber
    
    if (Math.floor(number1) - number1 !=0 || Math.floor(number2) - number2 !=0 || Math.floor(number3) - number3 !=0 || isNaN(number1) || isNaN(number2) || isNaN(number3)) {
        alert("Không phải số nguyên, vui lòng nhập lại.")
    }
    let max = Math.max(number1, number2, number3)
    document.getElementById("ex4.display").innerText = "Số lớn nhất trong 3 số " + 
    number1 + ", " + 
    number2 + ", " + 
    number3 + " là " + 
    max;
}

//Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ.
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

/*Bài 6: Kiểm tra xem 3 số thực (a,b,c) nhập vào có phải là cạnh của một tam giác. Điều kiện để a,b,c là cạnh của một tam giác là:
a,b,c > 0
a + b > c
b + c > a
a + c > b
*/
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

/*Bài 7: Kiểm tra xem một số nhập vào có phải là tuổi của một người không.
Một số nguyên là tuổi của một người khi nhỏ 120 và lớn hơn 0.
*/
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

//Bài 8: Tính diện tích hình vuông khi biết cạnh a.
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

//Bài 9: Tính diện tích hình chữ nhật khi biết 02 cạnh a, b.
function RectangleCal() {
    let length = document.getElementById("ex9.length").valueAsNumber;
    let width = document.getElementById("ex9.width").valueAsNumber;
    if (length <= 0 || isNaN(length) || width <= 0 || isNaN(width) || length <= width) {
        alert("Số đo cạnh không hợp lệ, vui lòng nhập lại.")
    } else {
        document.getElementById("ex9.display")
        .innerText= "Diện tích của hình chữ nhật với số đo các cạnh " + 
        length + " và " +
        width + " là " +
        length * width;
    }
}

//Bài 10: Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b.
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

//Bài 11: Giải phương trình bậc 1.
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

//Bài 12: Giải phương trình bậc 2.
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

//Bài 13: Chuyển từ độ C sang độ F.
function CelciusConverter() {
    let celcius = document.getElementById("ex13.celcius").valueAsNumber;
    if (isNaN(celcius)) {
        alert("Chỉ số nhiệt độ không hợp lệ, mời nhập lại")
    } else {
        document.getElementById("ex13.display").innerText = celcius + 
        " độ C tương ứng với " + 
        (celcius * 1.8 + 32) + 
        " độ F."
    }
}

//Bài 14: Chuyển từ mét sang feet.
function LengthConverter() {
    let length = document.getElementById("ex14.length").valueAsNumber;
    let factor = 3.280839895
    if(isNaN(length) || length <= 0) {
        alert("Chỉ số chiều dài không hợp lệ, mời nhập lại.")
    } else {
        document.getElementById("ex14.display").innerText = length + 
        "m tương ứng với " + 
        (length * factor) + "feet."
    }
}

//Bài 15: Kiểu tra kiểu dữ liệu của 2 biến
function TypeComparator(data1, data2) {
    var data1 = ["Acer, Dell, Asus"]
    var data2 = "Acer, Dell, Asus"
    document.getElementById("ex15.displayTypeData1").innerText = "Type of data1: " + (typeof(data1))
    document.getElementById("ex15.displayTypeData2").innerText = "Type of data2: " + (typeof(data2))
    document.getElementById("ex15.displayCompare").innerText = "Alike: " + (typeof(data1) == typeof(data2))
}





