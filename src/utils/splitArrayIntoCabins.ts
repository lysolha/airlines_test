export const splitIntoCustomSizes = (
  arr: Record<string, string>[],
  sizes: number[],
): Record<string, string>[][] => {
  let result = [];
  let index = 0;

  for (let size of sizes) {
    if (index + size > arr.length) break;
    result.push(arr.slice(index, index + size));
    index += size;
  }

  if (index < arr.length) {
    result.push(arr.slice(index));
  }

  return result;
};
