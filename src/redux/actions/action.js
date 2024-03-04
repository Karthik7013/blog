import { LOGIN,USERDATA } from "../types/types";

function handleLogin(payload) {
  return {
    type: LOGIN,
    payload,
  };
}

function handleUserData(payload) {
  console.log(payload)
  return {
    type: USERDATA,
    payload,
  };
}

export { handleLogin,handleUserData };
