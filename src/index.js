
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  return matrix.reduce((sorted, subarray, index) => {
    if (index % 2 !== 0) {
      const reversed = subarray.reverse();
      sorted.push(...reversed);
    } else {
      sorted.push(...subarray);
    }

    return sorted;
  }, []);
}
