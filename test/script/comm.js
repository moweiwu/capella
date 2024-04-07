const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();
const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

document.getElementById('datePicker').value = formattedDate;

document.getElementById('datePicker').addEventListener('change', function () {
    document.getElementById('timeSlot').disabled = false;
});