import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hamVkdWxAZ21haWwuY29tIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY2NTAzMzM0MywiZXhwIjoxNjY1MjkyNTQzfQ.gXWdOJQ0Q_kpefAH_kZ2VmiT9jjmewdkhAklft976d8";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${accessToken}` },
});
