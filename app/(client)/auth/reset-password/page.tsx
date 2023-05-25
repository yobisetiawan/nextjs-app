import Form from "./Form";

export default function Page() {
  return (
    <main>
      <div className="container max-w-[500px] mt-20 mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-5">
          Reset Password
        </h1>
        <Form />
      </div>
    </main>
  );
}
