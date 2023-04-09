import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from '../redux/actions/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(productsActions());
  }, [dispatch]);
  console.log('products: ', products);
  return (
    <div className='flex flex-wrap justify-center'>
      {products &&
        products.map((item, i) => {
          return <ProductCard key={i} product={item} />;
        })}
    </div>
  );
};

export default Home;
