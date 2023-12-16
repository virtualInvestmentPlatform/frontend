import React, { useState, useEffect } from 'react';
import './allCurrencies.css'
import CurrencyRow from '../../components/currencyRow/currencyRow';
import { getAllCurrencies } from '../../service/currency'; 


function AllCurrencies() {
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllCurrencies();
            if (response && response.data) {
                setCurrencies(response.data);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='container'>
            <div className='col'>
                
            <div className="card currency-header">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-3" style={{textAlign : 'left' , paddingLeft : 20} }>Döviz</div>
                            <div className="col-2">Satış</div>
                            <div className="col-2">Alış</div>
                            <div className="col-2">Son Güncelleme</div>
                            <div className="col-2">Değişim</div>
                        </div>
                </div>
            </div>

            {currencies.map(currency => (
                    <CurrencyRow 
                        key={currency.code}
                        code={currency.code} 
                        selling={currency.selling} 
                        buying={currency.buying}
                        rate={currency.rate} 
                        time={currency.time}
                    />
                ))
            }
            </div>
        </div>
      );
    }

export default AllCurrencies;
