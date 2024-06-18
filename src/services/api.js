import Http from "./Http";
export const register = (data)=>Http.post("/Register", data);
export const getOTP = (data)=>Http.post("/getOTP", data);
export const login = (data)=>Http.post("/Login", data);
export const profile = (data)=>Http.post("/Profile", data);
export const getCategories = (config)=>Http.get("/categories", config);
export const getProducts = (config)=>Http.get("/products", config);
export const createCommentProduct = (id, data)=>Http.post(`/products/${id}/comments`, data);
export const getInfoProduct = (id, config)=>Http.get(`/products/${id}`, config);
export const getComments = (id, config)=>Http.get(`/comments/${id}`, config);
export const order = (data)=>Http.post("/order", data);
export const history = (config)=>Http.get("/history", config);
export const detailsCart = (id, config)=>Http.get(`/details/${id}`, config);
export const historyComment = (config)=>Http.get("/historyComment", config);