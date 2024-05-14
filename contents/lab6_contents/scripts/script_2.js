function task2Execute() {
    text1 = document.getElementById("text1").value;
    text2 = document.getElementById("text2").value;
    document.getElementById("text1").value = text2;
    document.getElementById("text2").value = text1;
}