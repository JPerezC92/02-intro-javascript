import apiKey from "./data/apiKey";

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const image = document.createElement("img");
    image.src = url;

    document.body.append(image);
  })
  .catch(console.warn);
