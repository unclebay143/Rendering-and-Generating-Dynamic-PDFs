"use client";

import { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Import worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Home() {
  const [numPages, setNumPages] = useState(0);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <main className='flex flex-col justify-center items-center gap-3 py-5 px-24'>
      <h3 className='text-center md:text-lg mb-4 font-medium text-slate-700'>
        View PDF using React-PDF
      </h3>
      <Document file='/multiple.pdf' onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={currentPageNumber}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      </Document>
      <section className='flex justify-center items-center gap-3 mb-10'>
        {currentPageNumber !== 1 ? (
          <button
            className='border border-slate-200 py-1.5 px-2 rounded'
            onClick={() => {
              setCurrentPageNumber(currentPageNumber - 1);
            }}
          >
            Prev
          </button>
        ) : null}
        <p className='text-lg font-medium'>
          Page {currentPageNumber} of {numPages}
        </p>
        {numPages && numPages > currentPageNumber ? (
          <button
            className='border border-slate-200 py-1.5 px-2 rounded'
            onClick={() => {
              setCurrentPageNumber(currentPageNumber + 1);
            }}
          >
            Next
          </button>
        ) : null}
      </section>
    </main>
  );
}
