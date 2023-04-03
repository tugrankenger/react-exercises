import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBasket } from '../actions/deleteBasket';

const Cart = (props) => {
  console.log(props);
  const totalPrice = props.cart.reduce(
    (total, item) => (total += item.price),
    0
  );
  return (
    <div>
      <h2>
        <Link to='/'>Book List</Link> <span>Basket</span>
      </h2>
      <h3>Total Price: &#8378;{totalPrice.toFixed(2)}</h3>

      {props.cart.map((item) => (
        <div className='book' key={item.id}>
          <img src={item.image} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>
              <strong>Author: </strong>
              {item.author}
            </p>
            <p>
              <strong>Price: </strong>&#8378;{item.price}
            </p>
            <p>
              <strong>Total Price: </strong>&#8378; {item.price}
            </p>
            <p>You have 1 of this book in your cart</p>
            <button>-</button> &nbsp;
            <button onClick={()=>props.deleteBasket(item)}>Remove basket</button> &nbsp;
            <button>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps,{deleteBasket})(Cart);
