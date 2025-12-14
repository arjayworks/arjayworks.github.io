function openCalendarModal() {
  document.getElementById('calendarModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeCalendarModal() {
  document.getElementById('calendarModal').classList.add('hidden');
  document.body.style.overflow = '';
}
