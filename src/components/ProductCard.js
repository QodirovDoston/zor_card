import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { useCart } from 'react-use-cart';
import { Link } from  "@reach/router";

const ProductCard = (props) => {
    let { img, price, title, id} = props.data;
    const [theme] = useThemeHook();
    const { addItem } = useCart();

    const addToCart = () =>{
        addItem(props.data);
    }
    
    
    return (
        <Card 
            style={{ width: '18rem', height: 'auto' }}
            className={`${theme? 'bg-light-black text-light':'bg-lihgt text-black'} text-center p-0 overflow-hidden shadow mx-auto mb-4`}
        >
            <Link to={`/product-details/${id}`}>
                <div style={{ background: 'white', height: '15rem', overflow: 'hidden', display: 'flex',
                justifyContent: 'center', alignItems: 'center', marginBottom: 'inherit' }}>
                    <div style={{ width: '15rem'}}>
                        <Card.Img   variant="top" src={img} className="img-fluid" />
                    </div>
                </div>
            </Link>
            <Card.Body>
                <Card.Title style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                    {title}
                </Card.Title>
                <Card.Title>
                    Sum.<span className="h3">{price}</span>
                </Card.Title>
                <Button
                    onClick={()=> addToCart()}
                    className={`${theme? 'bg-dark-red text-black':'bg-light-red' } d-flex align-item-center m-auto border-0`}
                >
                        Add cart
                </Button>                  
            </Card.Body>
        </Card>
    );
};

export default ProductCard;