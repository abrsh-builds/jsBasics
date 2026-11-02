export const total = () => {
  const array = [1, 2, 3, 4, 5];

  const doubled = array.map((array) => array * 2);
  const filtered = array.filter((array) => array > 2);

  const sum = array.reduce((acc, arr) => acc + arr, 0);

  return sum;
};
