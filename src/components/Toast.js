import React, { useEffect } from 'react';
import {ToastContainer, toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function Toast({ type = 'info', message = ''}) {
    
    useEffect(() => {
        if(message) {
            toast[type](message);
        }
    }, [message, type])

    return (
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
        />
    )
}

export default Toast
