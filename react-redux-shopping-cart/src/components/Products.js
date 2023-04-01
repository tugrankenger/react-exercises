import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <h2>
        Book List
        <Link to='/cart'>Basket</Link>
      </h2>
      <div className='book'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/I/51eqjXwFzwL._SX344_BO1,204,203,200_.jpg'
          alt='Simyaci'
        />
        <div>
          <h4>Simyaci</h4>
          <p><strong>Author: </strong>Paulo Coelho</p>
          <p><strong>Price: </strong>&#8378; 99.99</p>
          <button>Add Basket</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
