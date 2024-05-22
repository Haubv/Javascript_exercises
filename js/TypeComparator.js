function TypeComparator(data1, data2) {
    var data1 = ["Acer, Dell, Asus"]
    var data2 = "Acer, Dell, Asus"
    document.getElementById("ex15.displayTypeData1").innerText = "Type of data1: " + (typeof(data1))
    document.getElementById("ex15.displayTypeData2").innerText = "Type of data2: " + (typeof(data2))
    document.getElementById("ex15.displayCompare").innerText = "Alike: " + (typeof(data1) == typeof(data2))
}