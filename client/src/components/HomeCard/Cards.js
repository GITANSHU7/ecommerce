import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Why Hypekar?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/genuine.jpg'
              text='Genuine products at reasonable price.'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/oem.png'
              text='Original OEM products only.'
              label='Luxury'
              path='/services'
            />
             <CardItem
              src='images/stop.png'
              text='One stop for all your needs.'
              label='Mystery'
              path='/services'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;