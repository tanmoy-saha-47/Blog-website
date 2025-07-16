import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function Protected({ children, authetication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authetication && authStatus != authetication) {
      navigate("/login");
    } else if (!authetication && authStatus != authetication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authetication]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
