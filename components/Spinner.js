export default function Spinner() {
  return (
    <div className="w-5 h-5 rounded-full relative">
      <div className="w-full h-full border border-gray-200 rounded-full absolute top-0 left-0 z-10"></div>
      <div className="w-full h-full border-t-2 border-gray-800 rounded-full absolute top-0 left-0 z-20 animate-spin"></div>
    </div>
  );
}
