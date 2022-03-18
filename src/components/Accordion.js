import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onClickTitle = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
     const active=index===activeIndex?"active":"";
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onClickTitle(index)}>
          <i className="arrow down icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <React.Fragment>
      <div className="ui styled accordion">{renderedItems}</div>
    
    </React.Fragment>
  );
};

export default Accordion;
