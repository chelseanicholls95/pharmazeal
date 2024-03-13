"use client";

import { useRouter } from "next/navigation";

const Button = () => {
  const router = useRouter();

  const onClick = () => {
    router.replace("/login");
  };

  return (
    <button
      className="btn btn-lg btn-secondary w-50 h-25 m-5"
      onClick={onClick}
    >
      Login
    </button>
  );
};

export default Button;
