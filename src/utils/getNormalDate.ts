export const getNormalDate = (date: Date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    date = new Date(date);
    const dayOfWeek = days[date.getDay()];

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
	 
    const month = months[date.getMonth()];

    const dayOfMonth = date.getDate();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    // const seconds = date.getSeconds();

    const formattedHours = hours % 12 || 12;
    const amOrPm = hours >= 12 ? 'PM' : 'AM';

    const time = `${formattedHours}:${minutes} ${amOrPm}`;
    const day = `${dayOfWeek}, ${month} ${dayOfMonth}`;

    return { time, day };
};
