const arr = ["apple", "banana", "mango"]
const storage = new Storage(['apple', 'banana', 'orange']);


function task8OutputItems() {
    console.log(storage.getItems());
}

function task8AddItem() {
    if(document.getElementById("itemName").value != "")
        storage.addItem(document.getElementById("itemName").value);
}

function task8RemoveItem() {
    if(document.getElementById("itemName").value != "")
        storage.removeItem(document.getElementById("itemName").value);
}

function Storage(items) {
    this.items = items;

    this.getItems = function() {
        return this.items;
    };

    this.addItem = function(item) {
        this.items.push(item);
    };

    this.removeItem = function(item) {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
        else {
            console.log("Такого товару не існує в списку.");
        }
    };
}
