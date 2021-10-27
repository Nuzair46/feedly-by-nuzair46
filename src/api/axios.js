import axios from "axios";
import { CATEGORY } from "../components/Common/constants";

export const API = axios.create({
  baseURL: "https://inshortsapi.vercel.app",
});

function News() {
  const newsdata = {};

  CATEGORY.map(async item => {
    let response = await API.get(`/news?category=${item.toLowerCase()}`);
    newsdata[item] = response.data;
  });
  return newsdata;
}
const NEWS_DATA = News();
export default NEWS_DATA;
