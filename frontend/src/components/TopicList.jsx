import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";


const TopicList = ({topics}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topicList) => (
        <TopicListItem key={topicList.id} topics={topicList} />
      ))}
    </div>
  );
};

export default TopicList;
