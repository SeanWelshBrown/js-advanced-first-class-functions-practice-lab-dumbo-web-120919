function logDriverNames(drivers) {
  const getName = function(el, i, arr) {
    console.log(el.name);
  };
  drivers.forEach(getName);
};

function logDriversByHometown(drivers, location) {
  const getName = function(el, i, arr) {
    if (el.hometown === location) {
      console.log(el.name);
    };
  };
  drivers.forEach(getName);
};

function driversByRevenue(drivers) {
  let sortedDrivers;

  const sortByRevenue = function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  };

  sortedDrivers = drivers.slice().sort(sortByRevenue);

  return sortedDrivers;
};

function driversByName(drivers) {
  let sortedDrivers;

  const sortByName = function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  };

  sortedDrivers = drivers.slice().sort(sortByName);
  return sortedDrivers;
};

function totalRevenue(drivers) {
  let driversRevenue;

  const reduceRevenue = function (agg, el, i, arr) {
    return agg + el.revenue;
  };

  driversRevenue = drivers.slice().reduce(reduceRevenue, 0);
  return driversRevenue;
};

function averageRevenue (drivers) {
  let averageRevenue;
  let driversRevenue;

  driversRevenue = totalRevenue(drivers);
  averageRevenue = driversRevenue / drivers.length;
  return averageRevenue;
};
