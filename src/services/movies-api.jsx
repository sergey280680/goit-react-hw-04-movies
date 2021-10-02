import axios from "axios";

const API_KEY = "8857d429b3f4a90bd68818ba1dfea9bc";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: API_KEY,
};

export async function getSearchMovie({ movieQuery }) {
  try {
    const data = await axios.get(
      `/search/movie?language=en-US&page=1&include_adult=false&query=${movieQuery}`
    );
    return data.data.results;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getMovies() {
  try {
    const data = await axios.get(`/trending/all/day?`);
    return data.data.results;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getMovieById({ movieId }) {
  // console.log("getMovieById");
  try {
    const data = await axios.get(`/movie/${movieId}?language=en-US`);
    return data.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getCastById({ movieId }) {
  // console.log("getCastById");
  try {
    const data = await axios.get(`/movie/${movieId}/credits?language=en-US`);
    return data.data.cast;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getReviewsById({ movieId }) {
  // console.log("getReviewsById");
  try {
    const data = await axios.get(
      `/movie/${movieId}/reviews?language=en-US&page=1`
    );
    return data.data.results;
  } catch (error) {
    console.log(error.message);
  }
}
