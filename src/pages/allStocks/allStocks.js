import React from 'react';
import './allStocks.css'
import StockRow from '../../components/stockRow/stockRow';


function AllStocks() {
    return (
        <div className='container'>
            <div className='col'>
                
            <div className="card stock-header">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-3" style={{textAlign : 'left' , paddingLeft : 20} }>Hisse</div>
                            <div className="col-2">Güncel Fiyat</div>
                            <div className="col-2">Son Kapanış</div>
                            <div className="col-2">Son Güncelleme</div>
                            <div className="col-2">Değişim</div>
                        </div>
                </div>
            </div>

            <StockRow name={"GARAN"} currentPrice={14} lastPrice={14.3} percentageChange={3} time={'12:34:12'}/>
            <StockRow name={"GARAN"} currentPrice={14} lastPrice={14.3} percentageChange={-3} time={'12:34:12'}/>
            <StockRow name={"GARAN"} currentPrice={14} lastPrice={14.3} percentageChange={3} time={'12:34:12'}/>
            <StockRow name={"GARAN"} currentPrice={14} lastPrice={14.3} percentageChange={-2} time={'12:34:12'}/>
            <StockRow name={"GARAN"} currentPrice={14} lastPrice={14.3} percentageChange={3} time={'12:34:12'}/>
            <StockRow name={"GARAN"} currentPrice={14} lastPrice={14.3} percentageChange={3} time={'12:34:12'}/>
            <StockRow name={"GARAN"} currentPrice={14} lastPrice={14.3} percentageChange={-1} time={'12:34:12'}/>
            <StockRow name={"GARAN"} currentPrice={14} lastPrice={14.3} percentageChange={3} time={'12:34:12'}/>
            <StockRow name={"GARAN"} currentPrice={14} lastPrice={14.3} percentageChange={3} time={'12:34:12'}/>
            </div>
        </div>
      );
    }

export default AllStocks;
