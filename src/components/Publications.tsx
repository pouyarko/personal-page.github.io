import React from 'react';
import { FileText, Download } from 'lucide-react';
import FadeSection from './FadeSection';

const Publications = () => {
  const publications = [
    {
      title: "UDiNet: A dilated U-net for improving OCR performance",
      authors: [
        { name: "Mahyar Fardinfar", url: "https://mahyarfardin.github.io/personal_page/" },
        { name: "Pouya Rashidi Kia" }
      ],
      conference: "the 2nd GCC International Conference on IEOM Muscat, Oman",
      year: "2024",
      abstract: "This paper introduces the UDiNet architecture, a dilated variant of the U-Net, specifically designed to address image denoising challenges.",
      pdfUrl: "./publications/udinet.pdf",
      fileName: "UDiNet_Paper.pdf"
    }
  ];

  const handleDownload = async (e: React.MouseEvent, url: string, fileName: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    const fullUrl = new URL(url, window.location.href).href;
    
    try {
      const response = await fetch(fullUrl);
      if (!response.ok) throw new Error('Failed to fetch PDF');
      
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Error downloading file:', error);
      alert('Failed to download PDF. Please try again later.');
    }
  };

  const renderAuthors = (authors: Array<{ name: string; url?: string }>) => {
    return authors.map((author, index) => (
      <React.Fragment key={author.name}>
        {index > 0 && ", "}
        {author.url ? (
          <a
            href={author.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            {author.name}
          </a>
        ) : (
          author.name
        )}
      </React.Fragment>
    ));
  };

  return (
    <FadeSection index={2}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Publications</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <div key={index} className="glass-card p-6 rounded-xl mb-6">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {pub.title}
                  </h3>
                  <p className="text-gray-300 mb-2">
                    {renderAuthors(pub.authors)}
                  </p>
                  <p className="text-cyan-400 mb-4">
                    {pub.conference} • {pub.year}
                  </p>
                  <p className="text-gray-300 mb-4">
                    {pub.abstract}
                  </p>
                  <button
                    onClick={(e) => handleDownload(e, pub.pdfUrl, pub.fileName)}
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <Download size={20} />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeSection>
  );
};

export default Publications;
