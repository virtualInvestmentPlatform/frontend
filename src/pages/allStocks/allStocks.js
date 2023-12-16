import React, { useState, useEffect } from 'react';
import './allStocks.css'
import StockRow from '../../components/stockRow/stockRow';
import { getAllStocks } from '../../service/stock'; 

function AllStocks() {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllStocks();
            if (response && response.data) {
                setStocks(response.data);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='container'>
            <div className='col'>
                
            <div className="card stock-header">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-2" style={{textAlign : 'left' , paddingLeft : 20} }>Hisse</div>
                            <div className="col-2">Güncel Fiyat</div>
                            <div className="col-2">Min</div>
                            <div className="col-2">Max</div>
                            <div className="col-2">Son Güncelleme</div>
                            <div className="col-1">Değişim</div>
                        </div>
                </div>
            </div>

            {stocks.map(stock => (
                    <StockRow 
                        key={stock.code}
                        name={stock.code} 
                        currentPrice={stock.lastprice} 
                        min={stock.min}
                        max={stock.max}
                        percentageChange={stock.rate} 
                        time={stock.time}
                    />
                ))
            }
            </div>
        </div>
      );
    }

export default AllStocks;
