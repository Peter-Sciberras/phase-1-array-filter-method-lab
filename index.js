// Code your solution here
const findMatching = (drivers, str) => {
    return drivers.filter(driver => driver.toLowerCase().includes(str.toLowerCase()));
  };
  
  const fuzzyMatch = (drivers, str) => {
    return drivers.filter(driver => driver.toLowerCase().startsWith(str.toLowerCase()));
  };
  
  const matchName = (drivers, str) => {
    return drivers.filter(driver => driver.name.toLowerCase().includes(str.toLowerCase()));
  };