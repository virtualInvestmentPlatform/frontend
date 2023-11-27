import React from 'react';
import './stock.css'
import { useParams } from "react-router-dom";

function Stock() {
    const { stockName } = useParams();

    return (
        <div className='container'>
            <h1>{stockName}</h1>
        </div>
      );
    }

export default Stock;
