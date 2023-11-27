import React from 'react';
import './allCurrencies.css'
import CurrencyRow from '../../components/currencyRow/currencyRow';


function AllCurrencies() {
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

            <CurrencyRow name={"USD"} sellPrice={14} buyPrice={14.3} percentageChange={3} time={'12:34:12'}/>
            <CurrencyRow name={"USD"} sellPrice={14} buyPrice={14.3} percentageChange={-3} time={'12:34:12'}/>
            <CurrencyRow name={"USD"} sellPrice={14} buyPrice={14.3} percentageChange={3} time={'12:34:12'}/>
            <CurrencyRow name={"USD"} sellPrice={14} buyPrice={14.3} percentageChange={-2} time={'12:34:12'}/>
            <CurrencyRow name={"USD"} sellPrice={14} buyPrice={14.3} percentageChange={3} time={'12:34:12'}/>
            <CurrencyRow name={"USD"} sellPrice={14} buyPrice={14.3} percentageChange={3} time={'12:34:12'}/>
            <CurrencyRow name={"USD"} sellPrice={14} buyPrice={14.3} percentageChange={-1} time={'12:34:12'}/>
            <CurrencyRow name={"USD"} sellPrice={14} buyPrice={14.3} percentageChange={3} time={'12:34:12'}/>
            <CurrencyRow name={"USD"} sellPrice={14} buyPrice={14.3} percentageChange={3} time={'12:34:12'}/>
            </div>
        </div>
      );
    }

export default AllCurrencies;
