import React from 'react';
import { Users, Newspaper, Construction } from 'lucide-react';
import { PdfButton } from './PdfButton';

export function Hero({ theme }: { theme: 'buzoko' | 'newsblitz' }) {
  const content = {
    buzoko: {
      title: "Local Social Media",
      subtitle: "A localized social platform bringing college students closer withing campus",
      description: "Most social media applications focus on a global audience, but none of them are specific to local communities. Take your college as an example. An average college has 8,000-10,000 students, You may know hardly 1000, leaving many unknown to each other. My team and I are exactly working on this problem by building local social media app.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200"
    },
    newsblitz: {
      title: "AI-Powered content generator",
      subtitle: "Leveraging A.I to write down content",
      description: "Currently internet is overflowing with content, so we plan to scrape vast amounts of data in live and create an application that generates personalized content for everyone. From news , jokes , politices ..etc.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1200"
    }
  };

  const current = content[theme];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              🚧 Work in Progress
            </div>
            <h1 className="text-5xl font-bold leading-tight">
              {current.title}
            </h1>
            <p className="text-xl text-gray-600">
              {current.subtitle}
            </p>
            <p className="text-gray-600">
              {current.description}
            </p>
            <div className="pt-4">
              <PdfButton theme={theme} />
            </div>
          </div>
          <div className="flex-1">
            <img
              src={current.image}
              alt="Hero"
              className="rounded-lg shadow-xl w-full object-cover"
              style={{ height: '500px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}