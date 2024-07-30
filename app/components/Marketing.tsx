'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Activity {
  title: string;
  prize: string;
  steps: string[];
  announcement: string;
  link: string;
  image: string;
}

const activities: Activity[] = [
  {
    title: "Boost Daily Bonanza",
    prize: "100 USDC",
    steps: [
      "Login to boost.xyz daily",
      "Complete at least one boost task",
      "Automatically enter the next day's draw",
      "Check results at UTC 00:00 in Discord"
    ],
    announcement: "Results announced daily in the \"Boost Daily Bonanza\" Discord channel",
    link: "https://boost.xyz/",
    image: "/park-1.png"
  },
  {
    title: "Weekly Challenge",
    prize: "500 USDC",
    steps: [
      "Complete 5 boost tasks in a week",
      "Share your progress on Twitter",
      "Tag three friends to join",
      "Winners announced every Monday"
    ],
    announcement: "Top performers featured on our website",
    link: "https://boost.xyz/weekly-challenge",
    image: "/park-2.png"
  },
  // Add more activities as needed
];

const Marketing: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % activities.length);
      }, 5000);
  
      return () => clearInterval(timer);
    }, []);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % activities.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + activities.length) % activities.length);
    };
  
    const currentActivity = activities[currentIndex];
  
    return (
      <section id="marketing" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Boost Growth Activities</h2>
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:flex">
              <div className="md:w-1/2 md:pr-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold">{currentActivity.title}</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Active</span>
                </div>
                <p className="text-lg font-medium text-gray-700 mb-4">Daily Prize: {currentActivity.prize}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">How to participate:</h4>
                  <ol className="list-decimal list-inside space-y-2">
                    {currentActivity.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
                <p className="text-gray-600 mb-6">{currentActivity.announcement}</p>
                <a
                  href={currentActivity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Participate Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0 relative">
                <Image
                  src={currentActivity.image}
                  alt={currentActivity.title}
                  width={500}
                  height={300}
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-between">
                  <button
                    onClick={prevSlide}
                    className="bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full shadow-md transition duration-300 ml-2"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-800" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full shadow-md transition duration-300 mr-2"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-800" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            {activities.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 mx-1 rounded-full ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Marketing;