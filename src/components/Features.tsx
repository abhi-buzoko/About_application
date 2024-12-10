import React from 'react';
import { Users, MessageCircle, Heart, Newspaper, Brain, Sparkles } from 'lucide-react';

export function Features({ theme }: { theme: 'buzoko' | 'newsblitz' }) {
  const features = theme === 'buzoko' ? [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Campus Connections",
      description: "Connect with thousands of students within your university community"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-blue-600" />,
      title: "Seamless Messaging",
      description: "Integrated messaging system for easy communication with peers"
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Dating Features",
      description: "Find meaningful connections within your college community"
    }
  ] : [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "AI-Powered Curation",
      description: "Smart news filtering based on your interests and reading habits"
    },
    {
      icon: <Newspaper className="h-8 w-8 text-blue-600" />,
      title: "Personalized Feed",
      description: "Get news that matters to you from trusted sources"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-blue-600" />,
      title: "Smart Summaries",
      description: "AI-generated summaries of long articles for quick consumption"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}