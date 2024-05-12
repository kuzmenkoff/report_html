let currentDate = new Date();

const monthNames = [
    "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
    "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
];

let selectedDates = [];

function execute() {
    const currentDate = new Date();
    document.getElementById('calendar_div').style.display = 'block';
    updateMonth();
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateMonth();
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
}

function previousMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateMonth();
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
}

function updateMonth() {

    const monthLabel = document.getElementById('month_label');
    const yearLabel = document.getElementById('year_label');
    monthLabel.textContent = monthNames[currentDate.getMonth()];
    yearLabel.textContent = currentDate.getFullYear();
}

function generateCalendar(year, month) {
    document.getElementById('last_row').style.display = 'none';
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);
    const startDay = startDate.getDay() === 0 ? 7 : startDate.getDay();
    const endDay = endDate.getDay() === 0 ? 7 : endDate.getDay();

    const calendarBody = document.getElementById('calendar').getElementsByTagName('tbody')[0];

    for (let i = 0; i < calendarBody.rows.length; i++) {
        for (let j = 0; j < calendarBody.rows[i].cells.length; j++) {
            calendarBody.rows[i].cells[j].textContent = "";   
            calendarBody.rows[i].cells[j].className = "";        
        }
    }

    for (let i = 0; i < startDay - 1; i++) {
        calendarBody.rows[0].cells[i].textContent = " ";
    }

    const totalDays = endDate.getDate();
    let numofrows = 5;
    if ((startDay == 7 && (totalDays == 30 || totalDays == 31)) || (startDay == 6 && totalDays == 31)) {
        document.getElementById('last_row').style.display = 'table-row';
        numofrows = 6;
    }


    let day = 1;
    for (let i = 0; i < numofrows; i++) {
        for (let j = 0; j < calendarBody.rows[i].cells.length; j++) {
            if (day > totalDays) day = " ";
            if (calendarBody.rows[i].cells[j].textContent == " " || day == " ")
                continue;
            else {
                calendarBody.rows[i].cells[j].textContent = day;
                day++;
            }
        }
    }

    for (let i = 0; i < numofrows; i++) {
        for (let j = 0; j < calendarBody.rows[i].cells.length; j++) {
            if (DateIsSelected(calendarBody.rows[i].cells[j])) {
                calendarBody.rows[i].cells[j].className = "";
                calendarBody.rows[i].cells[j].classList.add('calendar-cell-selected');
            }
            else {
                calendarBody.rows[i].cells[j].className = "";
                calendarBody.rows[i].cells[j].classList.add('calendar-cell');
            }
            
            
        }
    }


    for (let i = 0; i < numofrows; i++) {
        for (let j = 0; j < calendarBody.rows[i].cells.length; j++) {
            addClickHandler(calendarBody.rows[i].cells[j]);
        }
    }
}

function addClickHandler(cell) {
    cell.removeEventListener('click', handleCellClick);
    cell.addEventListener('click', handleCellClick);
}

function handleCellClick() {
    if (!DateIsSelected(this)) {
        console.log(DateIsSelected(this));
        saveDate(this);
    } else {
        deleteDate(this);
        console.log(DateIsSelected(this));
    }
}

function saveDate(cell) {
    const day = parseInt(cell.textContent);
    const month = document.getElementById('month_label').textContent;
    const year = parseInt(document.getElementById('year_label').textContent);

    if (!day) return;

    const date = {
        day: day,
        month: month,
        year: year
    };

    if (!selectedDates.some(d => d.day === date.day && d.month === date.month && d.year === date.year)) {
        selectedDates.push(date);
        cell.className = "";
        cell.classList.add('calendar-cell-selected');
        console.log("Date added:", date);
    } else {
        console.log("Date already selected");
    }
}

function deleteDate(cell) {
    const day = parseInt(cell.textContent);
    const month = document.getElementById('month_label').textContent;
    const year = parseInt(document.getElementById('year_label').textContent);

    const index = selectedDates.findIndex(d => d.day === day && d.month === month && d.year === year);

    if (index !== -1) {
        selectedDates.splice(index, 1);
        cell.className = "";
        cell.classList.add('calendar-cell');
        console.log("Date removed:", { day, month, year });
    }
}

function DateIsSelected (cell) {
    let day = parseInt(cell.textContent);
    let month = document.getElementById('month_label').textContent;
    let year =  parseInt(document.getElementById('year_label').textContent);
    if (selectedDates.some(d => d.day === day && d.month === month && d.year === year))
        return true;
    else
        return false;
}

function printSelectedDates() {
    if (selectedDates.length > 0) {
        console.log("Selected Dates:");
        selectedDates.forEach((date, index) => {
            console.log(`${index + 1}: Day: ${date.day}, Month: ${date.month}, Year: ${date.year}`);
        });
    } else {
        console.log("No dates have been selected.");
    }
}

