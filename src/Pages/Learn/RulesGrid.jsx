import React from 'react';
import RuleCard from './RuleCard';

function RulesGrid({ filteredRules }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredRules.map((rule, idx) => (
        <RuleCard key={idx} rule={rule} />
      ))}
    </div>
  );
}

export default RulesGrid;