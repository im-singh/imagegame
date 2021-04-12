export const capFirstLtr = (str) => {
  //captialize first letter of var str
  if (str && str.length > 0) {
    return str[0].toUpperCase() + str.slice(1);
  }
};
