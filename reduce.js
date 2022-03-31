// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

export const getSneaks = (brands) => {
  return brands.reduce((acc, brand) => [...acc, ...brand.shoes], []);
};

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce

export const getAverageAge = (dogs) => {
  const age = [6, 3, 4, 2, 1];
  return age.reduce((acc, age) => (acc += age / 5), 0);
};
