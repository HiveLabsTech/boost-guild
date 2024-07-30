'use client';

import React from 'react';
import { DollarSign, Clock, CheckCircle } from 'lucide-react';

interface Grant {
  title: string;
  description: string;
  amount: string;
  status: 'Open' | 'Closed';
}

const grants: Grant[] = [
  {
    title: "DeFi Innovation Grant",
    description: "Supporting projects that push the boundaries of decentralized finance.",
    amount: "$50,000",
    status: "Open"
  },
  {
    title: "Blockchain for Social Good",
    description: "Funding initiatives that leverage blockchain technology to address social challenges.",
    amount: "$75,000",
    status: "Open"
  },
  {
    title: "Interoperability Research Grant",
    description: "Exploring solutions for seamless communication between different blockchain networks.",
    amount: "$100,000",
    status: "Closed"
  }
];

const Grants: React.FC = () => {
  return (
    <section id="grants" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Boost On-Chain Grants</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {grants.map((grant, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{grant.title}</h3>
                <p className="text-gray-600 mb-4">{grant.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-green-600">
                    <DollarSign className="w-5 h-5 mr-1" />
                    <span className="font-bold">{grant.amount}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    grant.status === 'Open' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {grant.status === 'Open' ? (
                      <Clock className="w-4 h-4 inline mr-1" />
                    ) : (
                      <CheckCircle className="w-4 h-4 inline mr-1" />
                    )}
                    {grant.status}
                  </span>
                </div>
                <button
                  className={`w-full px-4 py-2 rounded-md font-medium transition duration-150 ease-in-out ${
                    grant.status === 'Open'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={grant.status === 'Closed'}
                >
                  {grant.status === 'Open' ? 'Apply Now' : 'Closed'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Grants;