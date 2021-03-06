import React, { Component } from 'react';

const AstronomyCard = (props) => {

  const { title, url, hdurl, explanation, date, copyright } = props.data;

  return (
    <div className="astronomy-card">

      <h6 className="astronomy-heading">Astronomy Picture Of The Day App with the NASA API and React + Redux</h6>
      <h6 className="astronomy-title">{title}</h6>

      <a href={hdurl} className="astronomy-image-wrapper">

        <img src={url} alt={title} />

      </a>

      <p>{explanation}</p>

      <span>{date} - {copyright}</span>

    </div>
  )
}

export default AstronomyCard;
