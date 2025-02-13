import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  price: string;
  image: string;
  details: string[];
}

const services: ServiceItem[] = [
  {
    title: 'Resume Designing',
    description: 'Professional ATS-friendly resumes tailored to your career goals',
    price: '₹75 - ₹250',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800',
    details: [
      'Chronological Resume',
      'Functional Resume',
      'Combination Resume',
      'Infographic Resume',
      'Targeted Resume',
      'Minimalist Resume',
      'Portfolio Resume',
      'Video Resume'
    ]
  },
  {
    title: 'Portfolio Designing',
    description: 'Showcase your work with a stunning portfolio',
    price: '₹250 - ₹500',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800',
    details: [
      'LinkedIn Portfolio',
      'GitHub Portfolio',
      'PDF Portfolio',
      'Social Media Portfolio',
      'Cloud-Based Portfolio'
    ]
  },
  {
    title: 'LinkedIn Optimization',
    description: 'Stand out in the professional world with an optimized LinkedIn presence',
    price: '₹350 - ₹500',
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=800',
    details: [
      'Profile Optimization',
      'Network Optimization',
      'Content Optimization',
      'Skill Endorsements & Recommendations',
      'SEO Optimization',
      'Activity Optimization',
      'Portfolio/Media Optimization',
      'Job Search Optimization',
      'Analytics Optimization'
    ]
  },
  {
    title: 'Project Development',
    description: 'Custom software solutions for your business needs',
    price: '₹750 - ₹4000',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
    details: [
      'Web Development (E-Commerce, Online Bookstore)',
      'App Development (Language Translator, Slides Remote)',
      'Cybersecurity (SpyGen, Web Scraping)',
      'AI/ML (Pong AI Game, Chatbot Development)',
      'Java Projects (Bus Ticketing, Management Systems)',
      'Health Systems (HealthPlus, Train Booking)'
    ]
  },
  {
    title: 'Domain & Hosting',
    description: 'Complete hosting solutions for your digital presence',
    price: '₹300 - ₹500',
    image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&q=80&w=800',
    details: [
      'Website Hosting',
      'Custom Domain Registration',
      'Portfolio Hosting'
    ]
  }
];

export default function Services() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (title: string) => {
    setExpandedService(expandedService === title ? null : title);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#2C3531] text-center mb-16">
          Professional Services
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2C3531] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#116466] mb-4">{service.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-[#D1E8E2] text-[#116466] px-3 py-1 rounded-full text-sm font-semibold">
                    {service.price}
                  </span>
                  <button
                    onClick={() => toggleService(service.title)}
                    className="text-[#FFCB9A] hover:text-[#D9B08C] font-semibold flex items-center gap-1"
                  >
                    Learn More
                    {expandedService === service.title ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>
                
                {expandedService === service.title && (
                  <div className="border-t border-[#D1E8E2] pt-4 mt-4">
                    <ul className="space-y-2">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center gap-2 text-[#116466]"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#FFCB9A]" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}