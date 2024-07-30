import React from 'react';
import MemberCard from './MemberCard';

interface Member {
  name: string;
  twitter: string;
  profileUrl: string;
}

interface ContributorsProps {
  members: Member[];
}

const Contributors: React.FC<ContributorsProps> = ({ members }) => {
  return (
    <section id="contributors" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contributors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {members.map((member, index) => (
            <MemberCard
              key={index}
              name={member.name}
              twitter={member.twitter}
              profileUrl={member.profileUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contributors;