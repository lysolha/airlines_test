export const splitArrayToRows = (
  arr: Record<string, string>[],
  chunkSize: number,
): Record<string, string>[][] => {
  let result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
};
