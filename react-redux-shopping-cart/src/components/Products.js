import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addBasket } from '../actions';

const Products = (props) => {
  console.log('cart: ',props.cart)
  return (
    <div>
      <h2>
        Book List
        <Link to='/cart'>Basket</Link>
      </h2>
      {props.bookList.map((item) => (
        <div className='book' key={item.id}>
          <img src={item.image} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>
              <strong>Author: </strong>
              {item.name}
            </p>
            <p>
              <strong>Price: </strong>&#8378; {item.price}
            </p>
            <button onClick={() => props.addBasket(item)}>Add Basket</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList,
    cart: state.cart
  };
};

// const mapActionsToProps = () => ({ addBasket });

export default connect(mapStateToProps, {addBasket})(Products);
