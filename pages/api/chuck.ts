import axios from 'axios';

const url = 'https://api.chucknorris.io/jokes/random';

export async function getChuckJoke() {
  return axios(url);
}
