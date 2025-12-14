function openCalendarModal() {
  document.getElementById('calendarModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeCalendarModal() {
  document.getElementById('calendarModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}
