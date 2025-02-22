import axios from "axios";

const baseDonmain = "https://apiholisbrand.pappplanner.com";

export const customHeader = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const baseUrl = `${baseDonmain}`;
export const currentDemo = 23;

export default axios.create({
  baseUrl,
  headers: customHeader,
});
