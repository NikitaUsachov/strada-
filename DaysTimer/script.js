import {format, differenceInYears, differenceInDays, differenceInHours} from 'date-fns';

const inputDate = document.querySelector('.form-control');
const button = document.querySelector('.btn');
const answer = document.querySelector('.answer')

function parseDate(event) {
    event.preventDefault();
    answer.innerHTML = '';

    const dateString = inputDate.value;
    const formattedDate = format(new Date(dateString), 'yyyy-MM-dd');
    const startDate = new Date()
    const endDate = new Date(formattedDate)
    const days = differenceInDays(endDate, startDate)
    const years = differenceInYears(endDate, startDate);
    // const remainingDays = days % 365;
    const hours = differenceInHours(endDate, startDate) % 24;
    // форматирование ответа
    function formatYears(years) {
        if (years === 1) {
            return `${years} год`;
        } else if (years >= 2 && years <= 4) {
            return `${years} года`;
        } else {
            return `${years} лет`;
        }

    }
    function formatDays(days) {
        if (days === 1) {
            return `${days} день`;
        } else if (days >= 2 && days <= 4) {
            return `${days} дня`;
        } else {
            return `${days} дней`;
        }
    }

    function formatHours(hours) {
        if (hours === 1) {
            return `${hours} час`;
        } else if (hours >= 2 && hours <= 4) {
            return `${hours} часа`;
        } else {
            return `${hours} часов`;
        }
    }

    const newDiv = document.createElement('div');
    newDiv.innerText = ` ${formatYears(years)}, ${formatDays(days)},${formatHours(hours)}`
    answer.append(newDiv)
}

button.addEventListener('click', parseDate);
