import { http, http_filter } from "./config";

export default {
  get: (postagem_id) => {
    return http.get(postagem_id);
  },
  get_all: () => {
    return http.get();
  },
  filter: (filter_field, filter_value) => {
    return http_filter.get(`api?${filter_field}=${filter_value}`);
  },
  post: (postagem) => {
    return http.post("", postagem);
  },
  put: (postagem) => {
    return http.put(postagem.postagem_id, postagem);
  },
  delete: (postagem_id) => {
    return http.delete(postagem_id);
  },
};
