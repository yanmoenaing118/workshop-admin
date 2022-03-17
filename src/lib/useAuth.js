import { context, LOGIN, LOGOUT } from "./../lib/store";
import { useContext } from "react";

export default function useAuth() {
  const ctx = useContext(context);
  const {
    state: { token },
    dispatch,
  } = ctx;

  const login = async (body) => {
    console.log("login body", body);
    const result = await fetch(
      "https://workshop-api-project.herokuapp.com/api/v1/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    )
      .then((res) => res.json())
      .catch((err) => err);

    if (result.error) {
      return console.log(result.message);
    }
    dispatch({ type: LOGIN, payload: result.data.token });
    localStorage.setItem("token", result.data.token);
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("token");
  };

  return {
    token,
    login,
    logout,
  };
}
