import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className ="cards__h1">TOP CONSUMER CHOICES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='You Can not Start Marketing Without A Website'
              label='Website Design'
              path='/Website'
            />
            <CardItem
              src='images/img-2.jpg'
              text='If You Have Anything To Sell Do It Online'
              label='E-Commerce'
              path='/ecommerce'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='If Client Can Not Find YOU Online You Need US !'
              label='SEO'
              path='/SEO'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Best Of Marketing'
              label='Advertising '
              path='/ads'
            />
            <CardItem
              src='images/img-8.jpg'
              text='We Will Take Care Of It For You'
              label='Website hosting'
              path='/hosting'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
