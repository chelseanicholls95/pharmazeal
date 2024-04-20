"use client";

import { useSession } from "next-auth/react";

const DashboardTitle = () => {
  const { data: session, status } = useSession();

  return (
    <div>
      {session ? (
        <h1 className="m-5 text-center display-1">
          Hi, {session.user.firstName}!{" "}
        </h1>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default DashboardTitle;
