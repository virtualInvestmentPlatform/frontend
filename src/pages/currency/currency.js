import React from 'react';
import './currency.css'
import { useParams } from "react-router-dom";

function Currency() {
    const { currencyName } = useParams();
    const isLogined = true;

    return (
        <div className="container currency-container text-white bg-dark mb-0">
          <div className="card-body row">
            <h5 className={"card-title left " + (isLogined ? "col-4" : "col-6")}>
                <div className='row currency-title'>
                  <div className={"col currency-name"}>
                      {currencyName}
                  </div>
                  <div className={"col currency-code"}>
                    ({'XXX'})
                  </div>
                </div>
                <div className='row currency-price'>
                  <span className={"col number " + (3 > 0 ? 'text-success' : 'text-danger')}>
                      {121}
                  </span>
                  <span className={"col indicator " + (3 > 0 ? 'text-success' : 'text-danger')}>
                      {3 > 0 ? '↑' : '↓'}
                  </span>
                </div>
            </h5>
            <p className={"card-text right " + (isLogined ? "col-4" : "col-6")}>
              Satış: {123}<br />
              Alış: {3}%<br />
              Son Güncelleme: {120}<br />
              Değişim: {300}<br />
            </p>
            {(isLogined) ? <div className='col-4'>
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
