import { parse } from "cookie";
const COOKIE_NAME = "visitorId";

export const parseCookies = (req) => {
  if (req.cookies) return req.cookies;

  const cookie = req.headers?.cookie;
  return parse(cookie || "");
};

export const getVisitorCookie = (req) => {
  const cookies = parseCookies(req);
  return cookies[COOKIE_NAME];
};