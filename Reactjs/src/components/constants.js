export const ip = "http://192.168.43.112:8000";

export let capitalize = function(str) {
  let finalstr = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0) finalstr = str.charAt(i).toUpperCase();
    else finalstr += str.charAt(i);
  }
  return finalstr;
};
