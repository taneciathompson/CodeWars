//Task :
// Given a year, return the century it is in.

// Input , Output Examples ::
// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)
// Hope you enjoy it .. Awaiting for Best Practice Codes

//answer
let century = (year) => Math.ceil(year / 100)
