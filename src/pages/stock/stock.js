import React from 'react';
import './stock.css'
import { useParams } from "react-router-dom";

function Stock() {
    const { stockName } = useParams();
    const isLogined = true;

    return (
        <div className="container stock-container text-white bg-dark mb-0">
          <div className="card-body row">
            <h5 className={"card-title left " + (isLogined ? "col-4" : "col-6")}>
                <div className='row stock-title'>
                  <div className={"col stock-name"}>
                      {stockName}
                  </div>
                  <div className={"col stock-code"}>
                    ({'XXX'})
                  </div>
                </div>
                <div className='row stock-price'>
                  <span className={"col number " + (3 > 0 ? 'text-success' : 'text-danger')}>
                      {121}
                  </span>
                  <span className={"col indicator " + (3 > 0 ? 'text-success' : 'text-danger')}>
                      {3 > 0 ? '↑' : '↓'}
                  </span>
                </div>
            </h5>
            <p className={"card-text right " + (isLogined ? "col-4" : "col-6")}>
              Dün: {123}<br />
              Değişim: {3}%<br />
              En Düşük: {120}<br />
              En Yüksek: {300}<br />
              Hacim Lot: {123123312}<br />
              Hacim TL: {234234234}
            </p>
            {(isLogined) ? <div className='col-4'>
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
