console.log("Let's get this party started!");

const form = document.querySelector("#searchForm");
const input = document.querySelector("#searchInput");
const imageContainer = document.querySelector("#img-container");
const notFound = document.querySelector("#error-div p");
const removeGifs = document.querySelector("#remove-gifs");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  getGiphy(input.value);
});

async function getGiphy(string) {
  notFound.innerText = "";
  try {
    const res = await axios.get(
      `http://api.giphy.com/v1/gifs/search?q=${string}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
    );
    const index = Math.floor(Math.random() * res.data.data.length);
    createImgTage(res.data.data[index].images.preview_gif.url);
  } catch {
    notFound.innerText = "Couldn't find any match";
  }
  input.value=""
}

removeGifs.addEventListener("click", function () {
  notFound.innerText = "";
  imageContainer.innerHTML = "";
});

function createImgTage(url) {
  const image = document.createElement("img");
  image.src = url;
  imageContainer.append(image);
}
