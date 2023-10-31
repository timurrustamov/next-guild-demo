import Counter from "./counter";

export default async function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-12">
      <h1 className="text-4xl text-center">Welcome to Server Components !</h1>

      <Counter />
    </main>
  );
}
