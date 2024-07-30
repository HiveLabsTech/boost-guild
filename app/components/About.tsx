import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About BoostGuild</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            {/* Uncomment and adjust the Image component when ready to use the image */}
            {/* <Image
              src="/images/how-boostguild-work.webp"
              alt="How BoostGuild Works"
              width={1200}
              height={600}
              layout="responsive"
              className="rounded-lg mb-6"
            /> */}
            <div className="space-y-4 text-gray-700">
              <p>
                <strong className="text-blue-600">Boost Guild</strong> is a decentralized organization of community stakeholders
                increasing global economic opportunities through accessible, merit-based cryptocurrency.
                It manages the Boost protocol, drives ecosystem growth, and distributes rewards.
                Members include core team, moderators, contributors, and community members.
              </p>
              <p>
                The Guild operates on principles of open-source, on-chain operations, transparency,
                and contribution-based rewards. Its community-driven governance model aims for
                sustainable growth and wider adoption of the cryptocurrency ecosystem.
              </p>
            </div>
            <Link
              href="https://rabbithole.mirror.xyz/kGknQ-qZaq3lfpi3hxi0Ka93EEgusm9x7zSkf3s-X6A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-6 px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
            >
              Learn More About BoostGuild
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;