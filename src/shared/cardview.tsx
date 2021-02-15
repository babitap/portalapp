import React from 'react';
import {Card} from 'react-bootstrap';

const CardView: React.FC <{card: any}>= (props) => {
    return (   
        <Card className="card-bkg">               
          <Card.Img variant="top" src={props.card.img} width="100" height="200"/>
          <Card.Body>
            <Card.Title className="style-f">{props.card.title}</Card.Title>
            <Card.Text className="style-f">
            <i className="fa fa-map-marker" aria-hidden="true"></i> {props.card.location}
            </Card.Text>           
          </Card.Body>
        </Card>                      
    );
  }

export default CardView;


