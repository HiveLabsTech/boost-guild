'use client';
import styles from '../../styles/Actions.module.css';


import React from 'react';
import { Calendar, MapPin, Check, Clock } from 'lucide-react';

interface Action {
  title: string;
  date: string;
  location: string;
  description: string;
  status: 'Executed' | 'Planned';
}

const actions: Action[] = [
  {
    title: "Blockchain Technology Summit",
    date: "August 15, 2024",
    location: "Online",
    description: "An annual event bringing together blockchain experts and enthusiasts.",
    status: "Executed"
  },
  {
    title: "DeFi Innovation Workshop",
    date: "September 20, 2024",
    location: "Shanghai",
    description: "A hands-on workshop exploring the latest trends in decentralized finance.",
    status: "Planned"
  }
];

const Actions: React.FC = () => {
  return (
    <section id="actions" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">BoostGuild Actions</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {actions.map((action, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{action.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{action.date}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{action.location}</span>
                </div>
                <p className="text-gray-700 mb-4">{action.description}</p>
                <div className="flex items-center">
                  {action.status === 'Executed' ? (
                    <span className="flex items-center text-green-600">
                      <Check className="w-4 h-4 mr-1" />
                      Executed
                    </span>
                  ) : (
                    <span className="flex items-center text-blue-600">
                      <Clock className="w-4 h-4 mr-1" />
                      Planned
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Actions;