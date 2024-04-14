import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";


const TopicList = ({topics, fetchPhotosByTopic}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topicList) => (
        <TopicListItem key={topicList.id} topics={topicList} fetchPhotosByTopic={fetchPhotosByTopic} />
      ))}
      
    </div>
  );
};

export default TopicList;
