import { Order } from "@/models/order";
import api from ".";

const createOrder = (order: Order) => api.post("orders/", order);

export { createOrder };
