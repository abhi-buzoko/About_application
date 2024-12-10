import React from 'react';
import { Linkedin, Mail, Phone, Github } from 'lucide-react';

export function Team() {
  const teamMembers = [
    {
      name: "Sai Abhinav Dunna",
      role: "Founder | a.k.a V.Dora",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      bio: "Passionate about building innovative solutions that connect people and make information accessible.",
      social: {
        linkedin: "https://www.linkedin.com/in/sai-abhinav-dunna-178799338",
        email: "mailto:abhi_dunna@buzoko.com",
        phone: "+91 7396428078"
      }
    },
    {
      name: "Farooq Umar",
      role: "Full Stack Developer | a.k.a Full Stack Farooq",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300",
      bio: "Expert full-stack developer crafting seamless user experiences and robust backend solutions.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "mailto:umarfarooq_shaik@srmap.edu.in"
      }
    },
    {
      name: "Sharan Mekkala",
      role: "AI/ML Expert | a.k.a lollipop",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300",
      bio: "Specialized in artificial intelligence and machine learning solutions for next-gen applications.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "mailto:sharanchiranjeevulu_m@srmap.edu.in"
      }
    },
    {
      name: "Utkarsh Sharma",
      role: "Strategist | a.k.a uttu darling",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
      bio: "Strategic thinker focused on growth, market analysis, and business development.",
      social: {
        linkedin: "https://linkedin.com",
        email: "mailto:utkarsh_sharma@srmap.edu.in"
      }
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-center">{member.name}</h3>
              <p className="text-gray-600 text-center mb-4">{member.role}</p>
              <p className="text-gray-600 text-center mb-6">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                {member.social.github && (
                  <a href={member.social.github} className="text-gray-600 hover:text-gray-900">
                    <Github className="h-5 w-5" />
                  </a>
                )}
                <a href={member.social.linkedin} className="text-gray-600 hover:text-gray-900">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={member.social.email} className="text-gray-600 hover:text-gray-900">
                  <Mail className="h-5 w-5" />
                </a>
                {member.social.phone && (
                  <a href={`tel:${member.social.phone}`} className="text-gray-600 hover:text-gray-900">
                    <Phone className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}