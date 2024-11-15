export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="text-center px-4 max-w-2xl mx-auto">
        <h1 className="text-7xl font-bold text-white mb-4">401</h1>
        <h2 className="text-3xl font-light text-gray-300 mb-8 tracking-wide">
          UNAUTHORIZED ACCESS
        </h2>
        <div className="h-[1px] w-16 bg-red-500 mx-auto mb-8"></div>
        <p className="text-gray-400 mb-8 leading-relaxed">
          The article you are trying to access is not available on this domain. 
          Please ensure you are using the correct domain for this content.
        </p>
        <a 
          href="/"
          className="inline-block px-8 py-3 border border-gray-500 text-gray-300 
                     hover:bg-gray-700 transition-colors duration-300 
                     tracking-wider uppercase text-sm"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
