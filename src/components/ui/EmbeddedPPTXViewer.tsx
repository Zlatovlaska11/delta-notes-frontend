import React from 'react';

interface EmbeddedPPTXViewerProps {
    embedUrl: string;
}

const EmbeddedPPTXViewer: React.FC<EmbeddedPPTXViewerProps> = ({ embedUrl }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <iframe
        src={embedUrl}
        className="w-full h-full max-w-screen-lg max-h-screen-lg"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default EmbeddedPPTXViewer;

