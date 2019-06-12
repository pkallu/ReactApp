import httpService from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/movies";

function movieUrl(id) {
  return `${apiEndpoint}/${id}`;
}
export function getMovies() {
  return httpService.get(apiEndpoint);
}

export function deleteMovie(id) {
  return httpService.delete(movieUrl(id));
}

export function getMovie(id) {
  return httpService.get(movieUrl(id));
}

export function saveMovie(movie) {
  console.log(movie);
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    console.log(body);
    return httpService.put(movieUrl(movie._id), body);
  } else {
    return httpService.post(apiEndpoint, movie);
  }
}
