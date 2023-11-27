import React from 'react';
import './commodity.css'
import { useParams } from "react-router-dom";

function Commodity() {
    const { commodityName } = useParams();

    return (
        <div className='container'>
            <h1>{commodityName}</h1>
        </div>
      );
    }

export default Commodity;
