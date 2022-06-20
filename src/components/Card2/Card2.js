import React from 'react';

import { Card } from 'react-bootstrap';

const Card2 = (props) => {
    const { img, name, price } = props.product;
    return (

        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {price}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Newly Arrival</small>
            </Card.Footer>
        </Card>




    );
};

export default Card2;