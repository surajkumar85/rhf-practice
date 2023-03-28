"use client";

import { useMajorFormState } from "@/provider/major-form/majorFormProvider";

export default function Page() {
  const { email, name, source } = useMajorFormState();

  return (
    <>
      <h1>Dashboard</h1>
      <h2>Email - {email}</h2>
      <h2>Name - {name}</h2>
      <h2>
        Source-
        {source?.map((item: any) => (
          <span key={item.sourceName}>{item.sourceName}-----</span>
        ))}
      </h2>
    </>
  );
}
