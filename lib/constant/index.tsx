export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "MSSHOP";
export const APP_DESC = process.env.NEXT_PUBLIC_APP_DESC || "msshop your dream shop";
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
export const LATEST_PRODUCTS_LIMIT = Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;

export const signInDefaultValues = {
  email: "",
  password: "",
};

export const signUpDefaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};