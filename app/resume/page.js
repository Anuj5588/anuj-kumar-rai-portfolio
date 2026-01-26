export default function ResumePage() {
  return (
    <div className="min-h-screen flex  flex-col items-center py-10 px-4">
      
      {/* Download Button */}
      <a
        href="/resume/akr.pdf"
        download
        className="mb-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium transition"
      >
        ⬇ Download Resume
      </a>

      {/* PDF Preview */}
      <div className="w-full max-w-6xl h-[95vh]  rounded-lg ">
        <iframe 
      
          src="/resume/akr.pdf#toolbar=0&navpanes=0&scrollbar=0"
          className="w-full h-full border-none sc"
          title="Resume PDF"
        />
      </div>

       <a
        href="/resume/akr.pdf"
        download
        className="mt-10 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium transition"
      >
        ⬇ Download Resume
      </a>

    </div>
  );
}