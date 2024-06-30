import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (innerText: string) => toast(innerText);

export const Toast = () =>  {
  return <ToastContainer /> ;
}