const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);
  
  const fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = function(drivers, driverFunction) {
    return driverFunction(drivers);
  };
  
  const driversArray = ['Driver1', 'Driver2', 'Driver3', 'Driver4'];
  
  console.log(returnFirstTwoDrivers(driversArray)); 
  console.log(returnLastTwoDrivers(driversArray)); 
  console.log(fareDoubler(10)); 
  console.log(fareTripler(10)); 
  console.log(selectDifferentDrivers(driversArray, returnFirstTwoDrivers));  
  console.log(selectDifferentDrivers(driversArray, returnLastTwoDrivers));
  