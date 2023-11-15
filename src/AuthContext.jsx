import { jwtDecode } from "jwt-decode";

function SaveJWT(jwtData) {
    const userData = jwtDecode(jwtData);

    localStorage.setItem("jwt", jwtData);
    localStorage.setItem("userData", JSON.stringify(userData));
}

function GetUserData() {
    return (localStorage.getItem("userData"));
}

function GenerateHeader() {
    const usuarioLogado = CheckUserLogin();

    if (usuarioLogado == false) {
        Navegar('Login')
    }

    const token = (localStorage.getItem("jwt"));
    return new Headers({
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
    });
}

function CheckUserLogin() {
    const token = (localStorage.getItem("jwt"));
    if (!token) {
      return false;
    }
  
    const userData = JSON.parse(localStorage.getItem("userData"));
    const actualDate = Date.parse(new Date()) / 1000;
  
    if (actualDate > userData.exp) {
      //usuario expirado
      localStorage.remove("jwt");
      return false;
    }
  
    return true;
}

export const AuthContextFunctions = {
    SaveJWT,
    GetUserData,
    GenerateHeader
};