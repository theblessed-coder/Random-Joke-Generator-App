const jokeContainer = document.getElementById("joke");
const button = document.getElementById("button");
//Joke API link
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

    const getJoke = async () => {
    const response = await fetch(url);
    const data = await response.json();
    jokeContainer.textContent = data.joke;
  }

button.addEventListener("click",getJoke);
getJoke();
