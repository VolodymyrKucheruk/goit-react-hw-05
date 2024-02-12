import axios from "axios";
export const fetchImages = async (query, page) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      client_id: "Yo0KKVVQ8kudBr27pa0MH93vsfi6wU9HNB0uuUV8uxI",
      query,
      page,
      per_page: 30,
    },
  });
  return response.data.results;
};

