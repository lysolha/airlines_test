export const getFormattedDate = (dateStr: string): string => {
  const [day, month, year] = dateStr.split("/");
  return `${year}-${month}-${day}`;
};
