import React from 'react';
import './currency.css'
import { useParams } from "react-router-dom";

function Currency() {
    const { currencyName } = useParams();

    return (
        <div className='container'>
            <h1>{currencyName}</h1>
        </div>
      );
    }

export default Currency;
