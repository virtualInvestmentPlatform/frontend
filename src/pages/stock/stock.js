import React, { useState, useEffect } from 'react';
import './stock.css'
import { useParams } from "react-router-dom";
import { useAuth } from '../../context/authContext';
import { getStock } from '../../service/stock'; 

function Stock() {
    const {token} = useAuth();
    const { stockName } = useParams();
    const [stock, setStock] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await (getStock(stockName));
            if (response && response.data) {
                setStock(response.data);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container stock-container text-white bg-dark mb-0">
          <div className="card-body row">
            <h5 className={"card-title left " + (token ? "col-4" : "col-7")}>
                <div className='row stock-title'>
                  <div className={"col stock-name"}>
                      {stock.text}
                  </div>
                </div>
                <div className={"row stock-code"}>
                    ({stock.code})
                  </div>
                <div className='row stock-price'>
                  <span className={"col number " + (stock.rate > 0 ? 'text-success' : 'text-danger')}>
                      {stock.lastprice} TL
                  </span>
                  <span className={"col indicator " + (stock.rate > 0 ? 'text-success' : 'text-danger')}>
                      {stock.rate > 0 ? '↑' : '↓'}
                  </span>
                </div>
            </h5>
            <p className={"card-text right " + (token ? "col-4" : "col-5")}>
              Değişim : {stock.rate}%<br />
              En Düşük : {stock.min} TL<br />
              En Yüksek : {stock.max} TL<br />
              Hacim : {stock.hacim} TL<br />
              Son Güncelleme : {stock.time}
            </p>
            {(token) ? <div className='col-4'>
              <div className='row own-title align-items-center'>
                <p>Sahiplik : {'0'} Lot</p>
              </div>
              <div className='row'>
                <div className='row buy-section'>
                  <input className='col-3' type='number' min={0}></input>
                  <p className='col-2'>Lot</p>
                  <btn className='col-4'>Satın Al</btn>
                </div>
                <div className='row sell-section'>
                  <input className='col-3' type='number' min={0}></input>
                  <p className='col-2'>Lot</p>
                  <btn className='col-4'>Sat</btn>
                </div>
              </div>
            </div> : <div></div> } 
            
          </div>
        </div>
      );
    }

export default Stock;
