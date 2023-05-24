import React from "react";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main >
      <h1>Slug {params.slug}</h1>
    </main>
  );
}
