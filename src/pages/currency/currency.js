import React, { useState, useEffect } from 'react';
import './currency.css'
import { useParams } from "react-router-dom";
import { useAuth } from '../../context/authContext';
import { getCurrency } from '../../service/currency'; 

function Currency() {
    const {token} = useAuth();
    const { currencyName } = useParams();
    const [currency, setCurrency] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
          const response = await (getCurrency(currencyName));
          if (response && response.data) {
              setCurrency(response.data);
          }
      };
      fetchData();
  }, []);

    return (
        <div className="container currency-container text-white bg-dark mb-0">
          <div className="card-body row">
            <h5 className={"card-title left " + (token ? "col-4" : "col-6")}>
                <div className='row currency-title'>
                  <div className={"col currency-name"}>
                      {currency.name}
                  </div>
                </div>
                <div className={"row currency-code"}>
                    ({currency.code})
                  </div>
                <div className='row currency-price'>
                  <span className={"col number " + (currency.rate > 0 ? 'text-success' : 'text-danger')}>
                      {currency.buying} TL
                  </span>
                  <span className={"col indicator " + (currency.rate > 0 ? 'text-success' : 'text-danger')}>
                      {currency.rate > 0 ? '↑' : '↓'}
                  </span>
                </div>
            </h5>
            <p className={"card-text right " + (token ? "col-4" : "col-6")}>
              Değişim: {currency.rate} %<br />
              Satış: {currency.selling} TL<br />
              Alış: {currency.buying} TL<br />
              Son Güncelleme: {currency.time}<br />
            </p>
            {(token) ? <div className='col-4'>
              <div className='row own-title align-items-center'>
                <p>Sahiplik : {'0'}</p>
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

export default Currency;

