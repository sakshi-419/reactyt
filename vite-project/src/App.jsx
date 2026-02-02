import React from 'react';
import Card from './components/Card';

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com?size=80",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Senior UI/UX Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 120,
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com?size=80",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 95,
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com?size=80",
      companyName: "Meta",
      datePosted: "1 week ago",
      post: "Product Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 130,
      location: "Remote",
    },
   
  ];

  return (
    <div className="parent">
      <div className="card-container">
        {jobOpenings.map((elem, idx) => (
          <Card
            key={idx}
            brandLogo={elem.brandLogo}
            companyName={elem.companyName}
            datePosted={elem.datePosted}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
