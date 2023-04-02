import './style.css';
import { Routes, Route } from 'react-router-dom';
import {connect} from 'react-redux'
import Products from './components/Products';
import Cart from './components/Cart';
function App(props) {
  console.log(props.bookList);
  return (
    <div className='App'>
      <h1>
        Shopping Cart
        <img
          src='https://avatars3.githubusercontent.com/u/60869810?v=4'
          alt='React Dersleri'
        />
        React-redux
      </h1>
      <Routes>
        <Route exact path='/' element={<Products />} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

const mapStateToProps = state =>{
  return{
    bookList: state.bookList
  }
}

export default connect(mapStateToProps)(App);
