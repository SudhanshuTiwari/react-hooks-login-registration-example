import React from 'react';

function SeparatorView () {
    return (<span className="breadcrumb-item-separator"> &gt; </span>);
  }
  
function BreadcrumbItemView ({id, label, onItemClick}) {
    return (
        <div className="breadcrumb-item"
                onClick={() => {
                onItemClick(id)
                }}>
            {label}
        </div>
    );
  }


export default function BreadcrumbView ({ items, onClick }) {

  const TOTAL_ITEMS = items.length;
  let itemDOMS = [];

  const onItemClick = (id) => {
    //If onclick function is passed
    if(onClick) {
      onClick(id);
    }
  };

  items.forEach(({id, label}, index) => {

    itemDOMS.push(
        <BreadcrumbItemView key={id} id={id} label={label} onItemClick={onItemClick}/>
    );

    if(index < TOTAL_ITEMS - 1) {
      itemDOMS.push(<SeparatorView key={index}/>)
    }

  });

  return (
      <div className="breadcrumb-container">
        {itemDOMS}
      </div>
  )
}