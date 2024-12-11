export const formatUnixTimestamp = (dt: number): string => {
  const date = new Date(dt * 1000);
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  const formattedDate = date.toLocaleString('en-GB', options);

  const [weekday, ...rest] = formattedDate.split(', ');
  return `${weekday} | ${rest.join(', ')}`;
};
