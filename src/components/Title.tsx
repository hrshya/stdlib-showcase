
function Title() {
  return (
    <div className="text-center py-12 bg-fuchsia-700 text-white">
      <h1 className="text-5xl font-extrabold tracking-wide">
        Float Array Performance Comparison
      </h1>
      <code className="flex flex-col text-lg mt-4 font-mono gap-2">
        <span className="bg-fuchsia-500 px-4 py-2 rounded-md">import float64 from "@stdlib/array/float64";</span>
        <span className="bg-fuchsia-500 px-4 py-2 rounded-md">import float32 from "@stdlib/array/float32";</span>
      </code>
    </div>
  );
}

export default Title;