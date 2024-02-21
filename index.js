const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];




function createFareMultiplier(multiplier) {
    function multipliedFare(fare) {
      return fare * multiplier;

    }
    return multipliedFare;
}
function fareDoubler(fare) {
        const doubleFare = createFareMultiplier(2);
        return doubleFare(fare);
    }
    
function fareTripler(fare) {
        const tripleFare = createFareMultiplier(3);
        return tripleFare(fare);
    }
    
function selectDifferentDrivers(drivers, driverSelector) {
        return driverSelector(drivers);
    }
