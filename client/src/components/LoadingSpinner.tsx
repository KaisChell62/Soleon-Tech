export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-neutral-800 border-t-indigo-500 rounded-full animate-spin"></div>
    </div>
  );
}
