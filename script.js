function daysOfAYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return 366;
  } else {
    return 365;
  }
}

function showDays() {
  const year = document.getElementById('year').value;
  if (year) {
    const days = daysOfAYear(parseInt(year));
    document.getElementById('result').innerText = `${year} has ${days} days.`;
  } else {
    document.getElementById('result').innerText = 'Please enter a valid year.';
  }
}
