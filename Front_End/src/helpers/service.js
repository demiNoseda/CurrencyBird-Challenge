import axios from "axios";
const baseURL = process.env.REACT_APP_BACKEND_URL;

const header = {
  headers: {
    "Content-Type": "application/json",
    Authorization: process.env.REACT_APP_AUTHORIZATION_API,
  },
};

export const postRegisterUser = (body) => {
  console.log(
    ` asssssssssssssss ${baseURL}/api/referral/generate-link`,
    body,
    header
  );
  return axios.post(`${baseURL}/api/users`, body, header);
};

export const getReferrerList = () => {
  return axios.get(`${baseURL}/api/referral/referrer-list`, header);
};

export const postReferralLink = (body) => {
  return axios.post(`${baseURL}/api/referral/generate-link`, body, header);
};
