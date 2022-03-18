import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "./../lib/useAuth";

export default function RequireAuth({ children }) {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    !token && navigate("/login");
  }, [token]);

  return token && children;
}
