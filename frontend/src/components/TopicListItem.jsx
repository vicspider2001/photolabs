import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ topics }) => {
  
  return (
    <div className="topic-list__item">
      <span>{topics.title}</span>
    </div>
    
  );
};


export default TopicListItem;