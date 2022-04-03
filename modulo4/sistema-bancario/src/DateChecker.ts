export function dateChecker(billDate: string): boolean | string {
  const billDateSplit: string[] = billDate.split("/");

  if (!billDate) {return true}

  if (billDateSplit.length !== 3) {
      return `Please check "date" format. It must to be dd/mm/aaaa`};

  if (
    typeof Number(billDateSplit[0]) !== typeof 1 ||
    typeof Number(billDateSplit[1]) !== typeof 1 ||
    typeof Number(billDateSplit[2]) !== typeof 1
  ) {return `Please check "date" format. It must to be dd/mm/aaaa`};

  const timeStampBillDate: number = new Date(
    billDateSplit[2] + "-" + billDateSplit[1] + "-" + billDateSplit[0]
  ).getTime();

  const timeStampDateNow: number = new Date().getTime();

  if (timeStampBillDate < timeStampDateNow - 45761210) {return false};

  return true;
}
