import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productsActionDetail } from '../redux/actions/products';
import { productsCart } from '../redux/actions/card';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const [count, setCount] = useState(1);
  //const {product} = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(productsActionDetail(id));
  }, [dispatch, id]);
  console.log('product: ', product);

  const decrement = (stock) => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const increment = (stock) => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const addCard = () => {
    dispatch(productsCart(id, count));
    dispatch({ type: 'DRAWER', payload: true });
  };
  return (
    <div className='flex items-center justify-center my-4'>
      <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg flex flex-col items-center shadow-lg'>
        <img
          className='w-5/6 h-5/6 p-8 rounded-t-lg'
          src={product.image}
          alt=''
        />
        <div className='px-5 pb-5'>
          <h5 className='text-xl font-semibold tracking-tight text-gray-900'>
            {product.title}
          </h5>
          <p className='text-gray-400 text-sm  my-2'>{product.description}</p>
          <div className='flex items-center justify-between'>
            <div className='flex items-center mt-2.5 mb-5'>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-yellow-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>First star</title>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-yellow-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Second star</title>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-yellow-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Third star</title>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-yellow-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Fourth star</title>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-yellow-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Fifth star</title>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
              <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
                5.0
              </span>
            </div>
            <div className='mt-2.5 mb-5 px-1'>
              <span>Stock: {product?.rating?.count}</span>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <span className='text-3xl font-bold text-gray-900'>
              ${product.price}
            </span>
            <div className='flex items-center space-x-4'>
              <AiOutlineMinus
                onClick={() => decrement(product?.rating?.count)}
                size={30}
                className='border rounded-full p-1 cursor-pointer'
              />
              <span>{count}</span>
              <AiOutlinePlus
                onClick={() => increment(product?.rating?.count)}
                size={30}
                className='border rounded-full p-1 cursor-pointer'
              />
            </div>
            <NavLink
              onClick={addCard}
              to='#'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus: outline-none
            focus:ring-blue-500 font-medium rounded-lg text-sm py-2.5 px-2.5 text-center'
            >
              Add to cart
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
