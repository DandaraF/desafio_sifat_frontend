import axios from "axios";

export const http = axios.create({
  baseURL: "https://dandarafonseca.pythonanywhere.com/api",
});

export const http_filter = axios.create({
  baseURL: "https://dandarafonseca.pythonanywhere.com",
});
