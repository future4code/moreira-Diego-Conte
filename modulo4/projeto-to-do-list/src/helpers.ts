export const formatingDate = (date: any): string => {
  const newDate =
    `${("0" + date.getDate()).slice(-2)}` +
    "/" +
    `${("0" + (date.getMonth() + 1)).slice(-2)}` +
    "/" +
    `${date.getFullYear()}`;
    
  return newDate;
};
