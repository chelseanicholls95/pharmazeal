"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import "./loginform.css";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const session = useSession();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.replace("/");
    }
  }, [session, router]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target);
    const username = event.target[0].value;
    const password = event.target[1].value;

    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/");
    } else {
      setError("");
    }
  };

  return (
    <div className="m5">
      <form className="form bg-dark text-white mt-5">
        <h1 className="text-center pt-3">Login Form</h1>
        <div className="pt-5 p-3">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            className="form-control"
            required
          ></input>
        </div>
        <div className="p-3">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="form-control"
            required
          ></input>
        </div>
        <div className="p-3 d-grid gap-2">
          <button className="btn btn-light btn-lg">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
