function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F9E4BC]">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#BF222B] border-t-transparent"></div>
    </div>
  );
}

export default LoadingSpinner;
