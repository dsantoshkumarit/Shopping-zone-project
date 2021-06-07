//process.NODE_ENV is inbuilt in node
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://shopping-zone.vercel.app"
    : "http://localhost:3000";

export default baseUrl;
