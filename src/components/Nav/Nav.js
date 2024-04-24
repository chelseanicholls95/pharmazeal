"use client";
import Image from "next/image";
import logo from "@/assets/images/nb-logo.png";
import { signOut, useSession } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  return (
    <nav
      className="navbar sticky-top navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <Image
            src={logo}
            alt="Logo"
            width="60"
            height="45"
            className="d-inline-block align-text-middle"
          />
          PharmaZeal
        </a>
        {session ? (
          <div className="navbar-nav">
            <a className="nav-link" href="/dashboard">
              Dashboard
            </a>
            <a className="nav-link" href="/customers">
              Customer Database
            </a>
            <a className="nav-link" href="/inventory">
              Inventory
            </a>
            <a className="nav-link" href="/sales">
              Sales
            </a>
            {session.user?.username}
            <button
              onClick={() => {
                signOut();
              }}
              className="btn btn-sm btn-outline-danger me-2 logout"
              type="button"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="navbar-nav">
            <a className="nav-link" href="/login">
              Login
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
