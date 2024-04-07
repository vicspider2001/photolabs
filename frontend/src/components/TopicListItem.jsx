import React from "react";
import { TextField, Autocomplete } from "@mui/material";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ topics }) => {
  
  return (
    <div className="topic-list__item">
      <Autocomplete
        disablePortal
        id={`topic-combo-box-${topics.id}`}
        options={[{ title: topics.title }]} // Pass an array of objects containing title
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Choose a topic" />}
      />
    </div>
    
  );
};


export default TopicListItem;