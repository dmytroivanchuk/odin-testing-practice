const analyzeArray = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error('Input must be a non-empty array');
  }

  const sum = arr.reduce((acc, num) => acc + num, 0);
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const { length } = arr;

  return {
    average,
    min,
    max,
    length,
  };
};

export default analyzeArray;
