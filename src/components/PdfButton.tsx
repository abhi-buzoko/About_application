import React from 'react';
import { FileText } from 'lucide-react';

export function PdfButton({ theme = 'buzoko' }: { theme?: 'buzoko' | 'newsblitz' }) {
  const gradients = {
    buzoko: {
      base: "from-blue-500 via-purple-500 to-pink-500",
      hover: "from-blue-600 via-purple-600 to-pink-600"
    },
    newsblitz: {
      base: "from-emerald-500 via-teal-500 to-blue-500",
      hover: "from-emerald-600 via-teal-600 to-blue-600"
    }
  };

  const current = gradients[theme];

  return (
    <a
      href="#"
      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${current.base} rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-white font-medium relative overflow-hidden group`}
      onClick={(e) => {
        e.preventDefault();
        alert('PDF viewer will be integrated soon!');
      }}
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${current.hover} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <FileText className="h-5 w-5 relative z-10" />
      <span className="relative z-10">View Summary PDF</span>
    </a>
  );
}