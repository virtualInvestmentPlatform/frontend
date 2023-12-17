import React from 'react';
import './commodity.css'
import { useParams } from "react-router-dom";
import { useAuth } from '../../context/authContext';

function Commodity() {
    const {token} = useAuth();
    const { commodityName } = useParams();

    return (
        <div className="container commodity-container text-white bg-dark mb-0">
          <div className="card-body row">
            <h5 className={"card-title left " + (token ? "col-4" : "col-6")}>
                <div className='row commodity-title'>
                  <div className={"col commodity-name"}>
                      {commodityName}
                  </div>
                  <div className={"col commodity-code"}>
                    ({'XXX'})
                  </div>
                </div>
                <div className='row commodity-price'>
                  <span className={"col number " + (3 > 0 ? 'text-success' : 'text-danger')}>
                      {121}
                  </span>
                  <span className={"col indicator " + (3 > 0 ? 'text-success' : 'text-danger')}>
                      {3 > 0 ? '↑' : '↓'}
                  </span>
                </div>
            </h5>
            <p className={"card-text right " + (token ? "col-4" : "col-6")}>
              Satış: {123}<br />
              Alış: {3}%<br />
              Son Güncelleme: {120}<br />
              Değişim: {300}<br />
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

export default Commodity;


