'ue strict';

let reverseArray = arr => {
  const newArray = [];
  arr.array.forEach(element => {
    newArray.unshift(element);

  });
  return newArray;
};
