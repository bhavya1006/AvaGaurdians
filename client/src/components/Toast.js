import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearToastMessage, setToastMessage } from '../store/slices/toastSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
  const dispatch = useDispatch();
  const toastMessage = useSelector(state => state.Toast.message);
  const toastType = useSelector(state => state.Toast.type);

  useEffect(() => {
    if (toastMessage) {
      toast[toastType ? 'success' : 'error'](toastMessage, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
      dispatch(clearToastMessage());
    }
  }, [toastMessage,toastType]);

  return <ToastContainer />;
}

export default Toast;
