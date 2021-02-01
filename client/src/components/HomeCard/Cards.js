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
              src='images/price.jpg'
              text='Genuine products at reasonable price.'
              label='Genuine'
              path='/services'
            />
            <CardItem
              src='images/genuine.jpg'
              text='Original OEM products only.'
              label='Original'
              path='/services'
            />
             <CardItem
              src='images/stop.png'
              text='One stop for all your needs.'
              label='Solution'
              path='/services'
            />
            
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;