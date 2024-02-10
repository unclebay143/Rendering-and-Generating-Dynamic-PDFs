"use client";

import React, { useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: "12px",
    height: "100px",
  },
  section: {
    backgroundColor: "#E4E4E4",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  logo: {
    width: 70,
    height: 70,
    marginTop: "15px",
  },
});

// Create Document Component
const PDFView = ({
  fullname,
  profession,
  yearsOfExperience,
}: {
  fullname: string;
  profession: string;
  yearsOfExperience: string;
}) => (
  <Document>
    <Page size='A4' style={styles.page}>
      <View style={styles.section}>
        <Text>Fullname: {fullname}</Text>
        <Text>Profession: {profession}</Text>
        <Text>Years of Experience: {yearsOfExperience}</Text>
      </View>
    </Page>
  </Document>
);

const PDFCreatorPage = () => {
  const [showPdf, setShowPdf] = useState(false);
  const [fullname, setFullname] = useState("");
  const [profession, setProfession] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");

  const handleGeneratePDF = () => {
    if (!fullname || !profession || !yearsOfExperience)
      return alert("All fields are required");
    setShowPdf(true);
  };

  const inputStyles = "border border-slate-200 p-1.5 rounded";

  return (
    <div className='flex justify-center items-center min-h-screen'>
      {showPdf ? (
        <div className='flex flex-col items-center'>
          <PDFView
            fullname={fullname}
            profession={profession}
            yearsOfExperience={yearsOfExperience}
          />
          <PDFDownloadLink
            className='text-blue-500 underline'
            document={
              <PDFView
                fullname={fullname}
                profession={profession}
                yearsOfExperience={yearsOfExperience}
              />
            }
            fileName='my_pdf.pdf'
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download pdf file"
            }
          </PDFDownloadLink>
        </div>
      ) : (
        <section className='flex flex-col gap-2'>
          <input
            className={inputStyles}
            placeholder='Fullname'
            onChange={(e) => setFullname(e.target.value)}
          />
          <input
            className={inputStyles}
            placeholder='Profession'
            onChange={(e) => setProfession(e.target.value)}
          />
          <input
            className={inputStyles}
            placeholder='Years of experience'
            onChange={(e) => setYearsOfExperience(e.target.value)}
          />
          <button
            onClick={handleGeneratePDF}
            className='bg-slate-700 px-2 py-1.5 rounded text-slate-100'
          >
            Generate PDF
          </button>
        </section>
      )}
    </div>
  );
};

export default PDFCreatorPage;
