"use client";

import { authClient } from "@/lib/auth-client";

export default function ClientComponent() {
  const {
    data: session,
    isPending, //loading state
    error, //error object
  } = authClient.useSession();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!session || error) {
    return <div>Please log in. {error?.message}</div>;
  }

  return (
    <div className="bg-slate-100 m-4">
      <h1>This is from client component</h1>
      <h1>Session id: {session.user.id}</h1>
    </div>
  );
}
