import React from 'react';
import { useSelector } from 'react-redux';
import DragonElement from './DragonElement';
import './dragons.css';

const Dragons = () => {
  const dragonsList = useSelector((newState) => newState.dragons);
  return (
    <section className="dragon">
      <ul className="dragonsList">
        {dragonsList.map((dragon) => (
          <DragonElement
            key={dragon.id}
            id={dragon.id}
            name={dragon.name}
            description={dragon.description}
            flickrImages={dragon.image}
            reserved={dragon.reserved}
          />
        ))}
      </ul>
    </section>
  );
};

export default Dragons;
