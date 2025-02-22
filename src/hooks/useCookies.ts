import { setCookie, getCookie, removeCookie } from "@services/storage";

export const useCookies = () => {
  const getUserData = () => {
    return getCookie("user_data");
  };

  const storeUserData = (data: object) => {
    setCookie("user_data", JSON.stringify(data), 7);
  };

  const removeUserData = () => {
    removeCookie("user_data");
  };

  return { getUserData, storeUserData, removeUserData };
};
