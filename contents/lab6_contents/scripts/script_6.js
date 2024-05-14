function task6Double() {
    let listItems = document.querySelectorAll("#task6List li");

    listItems.forEach(item => {
        item.textContent = parseInt(item.textContent) * 2;
    });
}
