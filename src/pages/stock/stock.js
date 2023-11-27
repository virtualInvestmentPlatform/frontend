import React from 'react';
import './stock.css'
import { useParams } from "react-router-dom";

function Stock() {
    const { stockName } = useParams();

    return (
        <div className="container text-white bg-dark mb-3">
          
          <div className="card-body row">
            <h5 className="card-title col-6 left">
                <div>
                    {stockName} ({'XXXX'})
                </div>
                {121} 
                <span className={3 > 0 ? 'text-success' : 'text-danger'}>
                    {3 > 0 ? '↑' : '↓'}
                </span>
            </h5>
            <p className="card-text col-6 right">
              Dün: {123}<br />
              Değişim: {3}%<br />
              En Düşük: {120}<br />
              En Yüksek: {300}<br />
              Hacim Lot: {123123312}<br />
              Hacim TL: {234234234}
            </p>
          </div>
        </div>
      );
    }

export default Stock;
