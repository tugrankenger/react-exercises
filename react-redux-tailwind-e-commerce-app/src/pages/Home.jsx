import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from '../redux/actions/products';

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);
  useEffect(() => {
    dispatch(productsActions());
  }, [dispatch]);
  console.log('products: ', products)
  return <div>Home</div>;
};

export default Home;
