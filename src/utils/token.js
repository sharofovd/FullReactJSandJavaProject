export const getAuthToken = () => localStorage.getItem("Auth");
export const setAuthToken = (token) => localStorage.setItem("Auth", token);
export const delAuthToken = () => localStorage.removeItem("Auth");