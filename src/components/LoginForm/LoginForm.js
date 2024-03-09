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
    <div>
      <form className="form bg-dark text-white mt-5" onSubmit={handleSubmit}>
        <h1 className="title text-center m-3">Store Login</h1>
        <div className="input">
          <div className="row mb-3">
            <div className="col-sm-10 mx-auto">
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-10 mx-auto">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-outline-light">
              Log in
            </button>
          </div>
          {error ? <p>{error}</p> : null}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
