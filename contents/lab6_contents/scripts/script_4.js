function task4Increase() {
    block = document.getElementById("task4Block");
    block.style.width = (parseInt(window.getComputedStyle(block).width) + 15) + "px";
    block.style.height = (parseInt(window.getComputedStyle(block).height) + 15) + "px";
}

function task4Decrease() {
    block = document.getElementById("task4Block");
    block.style.width = (parseInt(window.getComputedStyle(block).width) - 15) + "px";
    block.style.height = (parseInt(window.getComputedStyle(block).height) - 15) + "px";
}