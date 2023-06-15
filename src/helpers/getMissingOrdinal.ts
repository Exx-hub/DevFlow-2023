export const getMissingOrdinal = (arr: (number | undefined)[]) => {
  const ordinals = [0, 1, 2, 3, 4, 5];

  const set1 = new Set(arr);

  const missingNumbers = ordinals.filter((num) => !set1.has(num));

  return Math.min(...missingNumbers);
};
