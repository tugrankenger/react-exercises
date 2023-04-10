import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productsActionDetail } from '../redux/actions/products';
const Detail = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsActionDetail(id));
  }, [dispatch]);
  console.log('product: ', product);

  return (
    <div>
      <img src={product?.image} alt='' />
      <pre>{JSON.stringify(product)}</pre>
      <hr />
      <span>{product.id}</span>
      <span>{product.title}</span>
    </div>
  );
};

export default Detail;
