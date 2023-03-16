import { SignModel } from "@/models/sign";
import { User } from "@/models/user";
import api from ".";

const currentUser = () => api.get<User>("/auth/current-user");
const login = (signModel: SignModel) =>
  api.post<User>("/auth/login/", signModel);
const signup = (signModel: SignModel) => api.post<User>("/users/", signModel);

export { currentUser, login, signup };
