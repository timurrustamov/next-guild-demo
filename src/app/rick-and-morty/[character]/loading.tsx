export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center p-4 gap-12">
      <h1 className="text-4xl mt-12">Loading...</h1>

      <div className="grid grid-cols-12 w-full gap-2">
        <div className="grid aspect-square grid-rows-6 col-span-12 md:col-span-6 lg:col-span-4 p-4 gap-4">
          <div className="relative row-span-5">
            <div className="bg-gray-200 animate-pulse" />
          </div>
          <h2 className="text-2xl text-center animate-pulse">Loading...</h2>
        </div>
      </div>
    </div>
  );
}
