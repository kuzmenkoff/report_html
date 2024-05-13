
const medicines = [
    { name: "Noshpa", price: 170 },
    { name: "Analgin", price: 55 },
    { name: "Quanil", price: 310 },
    { name: "Alphacholine", price: 390 },
];

function task6Execute() {
    updatedMedicines = UpdatePrices (medicines);
    console.log(updatedMedicines);
}

function UpdatePrices (medList) {
    id = 1;
    medList.forEach(element => {
        element.id = id;
        if (element.price >= 300) {
            element.price = Math.round(element.price * 0.7);
        }
        id++;
    });

    return medList;
}
