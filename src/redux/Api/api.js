import axios from "axios";

export const getRandomImage = () => {
  return new Promise((resolve, reject) => {
    let url =
      "https://api.unsplash.com/photos/random?client_id=4RcG_5MyWoVgAbK7BPVNadf5LtkpA6dj9GUIo1z9uhA";
    axios
      .get(url)
      .then((r) => {
        console.log("r: ", r);
        resolve(r.data.urls.small);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
