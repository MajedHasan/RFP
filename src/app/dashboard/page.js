"use client";

import { useSelector } from "react-redux";

export default function Dashboard() {
  const user = useSelector((state) => state.user);

  return (
    <main>
      <div>{user?.data?.name}</div>
    </main>
  );
}
