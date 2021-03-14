let search = async (slot, prop, car) => {
    for (var i = 0; i < car.length; i++) {
      if (car[i][prop] === slot) {
        return car[i];
      }
    }
    return false;
  }
  
  let remove = async (slot, prop, car) => {
    var i = car.length;
    while (i--) {
      if (car[i]
        && car[i].hasOwnProperty(prop)
        && (arguments.length > 2 && car[i][prop] === slot)) {
        car.splice(i, 1);
      }
    }
    return car;
  }

  module.exports = {search,remove};