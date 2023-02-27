import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FetchProducts, RemoveProduct } from '../../redux/reducers/productsSlice';

export const useProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(FetchProducts());
  }, []);

  const DeleteProduct = (id) => {
    dispatch(RemoveProduct(id));
    toast.success('Product succesfully deleted!');
    dispatch(FetchProducts());
  };

  const toAdd = () => {
    navigate('/add-fruit');
  };

  return {
    products,
    loading,
    DeleteProduct,
    toAdd,
  };
};
