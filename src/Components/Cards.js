import React from 'react';
import bg1 from './../images/bg1.jpg';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CardPlay = (props) => {
  return (
    <Card  className="CardPlays mx-4 flex-grow-1">
      <CardImg src={bg1} alt="Card image cap" className="w-100 img-fluid"/>
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
};

export default CardPlay;