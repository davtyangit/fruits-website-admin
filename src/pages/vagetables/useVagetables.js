import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FetchVagetables, RemoveVagetable } from '../../redux/reducers/vagetablesSlice';

export const useVagetables = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { vagetables, loading } = useSelector((state) => state.vagetables);

  useEffect(() => {
    dispatch(FetchVagetables());
  }, []);

  const DeleteVagetables = (id) => {
    dispatch(RemoveVagetable(id));
    dispatch(FetchVagetables());
  };

  const toAdd = () => {
    navigate('/add-vagetable');
  };

  return {
    vagetables,
    loading,
    DeleteVagetables,
    toAdd,
  };
};
