"use client";

import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import "./loginform.css";

const LoginForm = () => {
  const form = useForm();
  const { register, control, handleSubmit } = form;

  const router = useRouter();
  const [error, setError] = useState("");
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard");
    }
  }, [sessionStatus, router]);

  const onSubmit = async ({ username, password }) => {
    const response = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (response?.error) {
      setError("Invalid email or password");
      if (response?.url) router.replace("/login");
    } else {
      setError("");
    }
  };

  return (
    <div className="m5">
      <form
        className="form bg-dark text-white mt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center pt-3">Login Form</h1>
        <div className="pt-5 p-3">
          <input
            type="text"
            id="username"
            {...register("username")}
            placeholder="Username"
            className="form-control"
            required
          ></input>
        </div>
        <div className="p-3">
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Password"
            className="form-control"
            required
          ></input>
        </div>
        <div className="p-3 d-grid gap-2">
          <button className="btn btn-light btn-lg">Submit</button>
        </div>
        {error ? (
          <div className="text-center">
            <p>{error}</p>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default LoginForm;
