export const formatDateString = (date: Date): string => {
    const localDateArray: string[] = date.toLocaleDateString('en-us', {month: 'short', weekday: "long"}).split(" ");
    const monthName = localDateArray[0];
    const weekDayName = localDateArray[1];
    return `${weekDayName}, ${date.getDate()} ${monthName}`;
}

export const formatTimeString = (date: Date): string => {
    const formattedDate = date.toLocaleTimeString("en-us", { hour: "numeric", minute: "2-digit", hour12: true});
    return formattedDate.replace(/\s/g, '').toLowerCase();
}