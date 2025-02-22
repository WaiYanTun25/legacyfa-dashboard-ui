import Cookies from "js-cookie";

export const setCookie = (name: string, value: string, expiresDays: number) => {
  Cookies.set(name, value, {
    expires: expiresDays,
    secure: true,
    sameSite: "Strict",
  });
};

export const getCookie = (name: string) => {
  return Cookies.get(name);
};

export const removeCookie = (name: string) => {
  Cookies.remove(name);
};
