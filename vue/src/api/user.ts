import api from ".";

const currentUser = () => api.get("/auth/current-user");

export { currentUser };
