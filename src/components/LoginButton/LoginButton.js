"use client";

import { useRouter } from "next/navigation";

const LoginButton = () => {
  const router = useRouter();

  const onClick = () => {
    router.replace("/login");
  };

  return (
    <button className="btn btn-lg btn-dark w-50 m-5" onClick={onClick}>
      <h1>Login</h1>
    </button>
  );
};

export default LoginButton;
