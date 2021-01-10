import apiKey from "./data/apiKey";

// const getImagenPromesa = () =>
//   new Promise((resolve) => resolve("http://interesting.com"));

// getImagenPromesa().then(console.log);

const getImagen = async () => {
  try {
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    const image = document.createElement("img");
    image.src = url;

    document.body.append(image);
  } catch (error) {
    // manejo del error
    console.error(error);
  }
};

getImagen();
