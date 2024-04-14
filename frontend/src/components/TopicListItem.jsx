import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({topics, fetchPhotosByTopic}) => {
  
  const handleClick = () => {
    fetchPhotosByTopic(topics.id)
  }
  
  return (
    <div className="topic-list__item" onClick={handleClick}>
      <span>{topics.title}</span>
    </div>
    
  );
};


export default TopicListItem;