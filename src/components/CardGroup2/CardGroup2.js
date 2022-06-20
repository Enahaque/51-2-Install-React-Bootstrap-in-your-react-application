import React from 'react';
import {CardGroup} from 'react-bootstrap';
import Card2 from '../Card2/Card2';

const CardGroup2 = () => {
    const products =[
        {id:1,img:'https://i.ibb.co/sRn8y4q/image100.jpg',name:'laptop-pro',price:25000},
        {id:2,img:'https://i.ibb.co/sRn8y4q/image100.jpg',name:'laptop-cro',price:30000},
        {id:3,img:'https://i.ibb.co/sRn8y4q/image100.jpg',name:'laptop-bro',price:35000},
    ];
    return (
        <div>
            {/* <h1>This is My Cards</h1> */}
            <CardGroup>
                {
                    products.map(product=><Card2
                    key={product.id}
                    product={product}
                    ></Card2>)
                }
            </CardGroup>
        </div>
    );
};

export default CardGroup2;