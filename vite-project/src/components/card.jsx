import React from 'react';
import { Bookmark } from 'lucide-react';

const Card = (props) => {
  return (
    <div className="card">

      <div className="top">
        <img
          src={props.brandLogo}
          alt={props.companyName}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/80?text=Logo";
          }}
        />
        <button>
          Save <Bookmark size={12} />
        </button>
      </div>

      <div className="center">
        <h3>
          {props.companyName} <span>{props.datePosted}</span>
        </h3>
        <h2>{props.post}</h2>

        <div>
          <button>{props.tag1}</button>
          <button>{props.tag2}</button>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>${props.pay}/hr</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>

    </div>
  );
};

export default Card;
