import React, { useState, useEffect } from 'react';
import './commodity.css'
import { useParams } from "react-router-dom";
import { useAuth } from '../../context/authContext';
import { getCommodity } from '../../service/commodity'; 

function Commodity() {
    const {token} = useAuth();
    const { commodityName } = useParams();
    const [commodity, setCommodity] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
          const response = await (getCommodity(commodityName));
          if (response && response.data) {
              setCommodity(response.data);
          }
      };
      fetchData();
  }, []);

    return (
        <div className="container commodity-container text-white bg-dark mb-0">
          <div className="card-body row">
            <h5 className={"card-title left " + (token ? "col-4" : "col-6")}>
                <div className='row commodity-title'>
                  <div className={"col commodity-name"}>
                      {commodity.text}
                  </div>
                </div>
                <div className={"row commodity-code"}>
                    ({commodity.name})
                  </div>
                <div className='row commodity-price'>
                  <span className={"col number " + (commodity.rate > 0 ? 'text-success' : 'text-danger')}>
                      {commodity.buying} TL
                  </span>
                  <span className={"col indicator " + (commodity.rate > 0 ? 'text-success' : 'text-danger')}>
                      {commodity.rate > 0 ? '↑' : '↓'}
                  </span>
                </div>
            </h5>
            <p className={"card-text right " + (token ? "col-4" : "col-6")}>
              Değişim: {commodity.rate} %<br />
              Alış: {commodity.buying} TL<br />
              Satış: {commodity.selling} TL<br />
              Son Güncelleme: {commodity.time}<br />
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


