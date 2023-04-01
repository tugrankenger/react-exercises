import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div>
      <h2>
        <Link to='/'>Book List</Link> <span>Basket</span>
      </h2>
      <h3>Total Price: &#8378;199.99</h3>

      <div className='book'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/I/51eqjXwFzwL._SX344_BO1,204,203,200_.jpg'
          alt='Simyacı'
        />
        <div>
          <h4>Simyaci</h4>
          <p>
            <strong>Author: </strong>Paulo Coelho
          </p>
          <p>
            <strong>Price: </strong>&#8378;199.99
          </p>
          <p>
            <strong>Total Price: </strong>&#8378;199.99
          </p>
          <p>You have 1 of this book in your cart</p>
          <button>-</button> &nbsp;
          <button>Remove basket</button> &nbsp;
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
