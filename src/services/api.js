import { http } from "./config";

export default {
  get: () => {
    return http.get(postagem.postagem_id);
  },
  get_all: () => {
    return http.get();
  },
  post: (postagem) => {
    return http.post("", postagem);
  },
  put: (postagem) => {
    return http.put(postagem.postagem_id, postagem);
  },
  delete: (postagem) => {
    return http.delete(postagem.postagem_id, { data: postagem });
  },
};
