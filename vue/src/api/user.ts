import { SignModel } from "@/models/sign";
import { User } from "@/models/user";
import api from ".";

const getCurrentUser = () =>
  api.get<User>("http://localhost:3003/auth/current-user", {
    withCredentials: true,
  });
const login = (signModel: SignModel) =>
  api.post<User>("http://localhost:3003/auth/login", signModel, {
    withCredentials: true,
  });
const signup = (signModel: SignModel) => api.post<User>("users/", signModel);

export { getCurrentUser, login, signup };
