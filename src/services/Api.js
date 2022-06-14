import axios from "axios";

const API_KEY = "25386607-95d0e983e40ec632c77b88b9e";
const url = "https://pixabay.com/api";

export const getImages = (text, count) => {
  try {
    const data = axios.get(
      `${url}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}&safesearch=true`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
