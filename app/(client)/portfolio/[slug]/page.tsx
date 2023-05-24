import React from "react";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Slug {params.slug}</h1>
    </main>
  );
}
