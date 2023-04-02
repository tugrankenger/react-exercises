import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Products = (props) => {
  return (
    <div>
      <h2>
        Book List
        <Link to='/cart'>Basket</Link>
      </h2>
      {props.bookList.map((item) => (
        <div className='book' key={item.id}>
          <img
            src={item.image}
            alt={item.name}
          />
          <div>
            <h4>{item.name}</h4>
            <p>
              <strong>Author: </strong>{item.name}
            </p>
            <p>
              <strong>Price: </strong>&#8378; {item.price}
            </p>
            <button>Add Basket</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList,
  };
};

export default connect(mapStateToProps)(Products);
