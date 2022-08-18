// lay du lieu tu firebase
import { fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();

export const initialState = {
  user: userInfo,
  foodItems: null,
  cartShow: false,
};
