const returnFirstTwoDrivers = partOne => {
    return ([ partOne[0], partOne[1] ]);
};

const returnLastTwoDrivers = partTwo => {
    return ([ partTwo[2], partTwo[3] ]);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(partThree) {
    return (()=> partThree * partThree);
};

function fareDoubler(partFour) {
    const createFareMultiplier = partFour * 2;
    return createFareMultiplier;
};

function fareTripler(partFive) {
    const createFareMultiplier = partFive * 3;
    return createFareMultiplier;
};



function selectDifferentDrivers(drivers, driverLists) {
    if(driverLists === returnFirstTwoDrivers){
        return (returnFirstTwoDrivers(drivers));
    }else if(driverLists === returnLastTwoDrivers){
        return(returnLastTwoDrivers(drivers));
    };
};