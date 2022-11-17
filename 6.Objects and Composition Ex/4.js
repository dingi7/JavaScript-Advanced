function heroicInventory(input) {
  let res = [];
  for (let data of input) {
    let [name, level, items] = data.split(" / ");
    level = Number(level);
    items = items ? items.split(", ") : [];
    let hero = {
      name: name,
      level: level,
      items: items,
    };
    res.push(hero);
  }
  console.log(JSON.stringify(res));
}
heroicInventory([
  "Isacc / 25 / Apple, GravityGun",

  "Derek / 12 / BarrelVest, DestructionSword",

  "Hes / 1 / Desolator, Sentinel, Antara",
]);
