function SortArr(arr) {
  let sorted = arr.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    } else {
      return a.localeCompare(b);
    }
  });
  console.log(sorted.join("\n"));
}
SortArr(["alpha", "beta", "gamma"]);
