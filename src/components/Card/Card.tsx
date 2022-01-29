import React from 'react';
import CardAdvertisment from './CardAdvertisment';

const Card = (props: {children: React.ReactNode}) => {
  return props.children;
};

Card.Advertisment = CardAdvertisment;

export default Card;
