"use client";

import { useStateContext } from "@/provider/form-state/formStateProvider";

export default function Page() {
  const { email, phone, name } = useStateContext();

  return (
    <>
      <h1>Dashboard</h1>
      <h2>Email - {email}</h2>
      <h2>Phone - {phone}</h2>
      <h2>Name - {name}</h2>
    </>
  );
}
