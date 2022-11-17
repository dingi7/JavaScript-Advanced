function listOfNames(array) {
  array
    .sort((a, b) => a.localeCompare(b))
    .forEach((x, i) => console.log(`${i + 1}.${x}`));
}
listOfNames(["Kamen", "Pesho", "Aneliq"]);
