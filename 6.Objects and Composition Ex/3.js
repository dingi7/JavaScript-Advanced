function carFactory(obj) {
  let smallEngine = {
    power: 90,
    volume: 1800,
  };
  let normalEngine = {
    power: 120,
    volume: 2400,
  };
  let monsterEngine = {
    power: 200,
    volume: 3500,
  };

  let hatchback = {
    type: "hatchback",
    color: ""
  };
  let coupe = {
    type: "coupe",
    color: ""
  };
  let model = obj.model;
  let powerNeeded = obj.power;
  let colorNeeded = obj.color;
  let carrierNeeded = obj.carriage;
  let weelsNeeded = obj.wheelsize;

  let car = {};
  car["model"] = model;
  if (powerNeeded <= 90) {
    car["engine"] = smallEngine;
  } else if (powerNeeded <= 120 && powerNeeded > 90) {
    car["engine"] = normalEngine;
  } else {
    car["engine"] = monsterEngine;
  }
  if (carrierNeeded === "coupe") {
    coupe.color = colorNeeded;
    car["carriage"] = coupe;
  } else {
    hatchback.color = colorNeeded;
    car["carriage"] = hatchback;
  }

  if(weelsNeeded % 2 == 0){
    weelsNeeded -= 1
  }
  car['wheels'] = [weelsNeeded,weelsNeeded,weelsNeeded,weelsNeeded]
  return car
}

carFactory({ model: 'VW Golf II',

power: 90,

color: 'blue',

carriage: 'hatchback',

wheelsize: 14 });
