import React from 'react';
import './myInvestments.css'
import StockRow from '../../components/stockRow/stockRow';
import CurrencyRow from '../../components/currencyRow/currencyRow';
import CommodityRow from '../../components/commodityRow/commodityRow';

function MyInvestments() {
    return (
        <div className='container'>
            <div className='investment-title-body-wrapper col'>
                <div className='investment-title row'>
                    <h4>Borsa Yatırımlarım</h4>
                </div>
                <div className='my-investment-wrapper row'>
                    <div className='col'>
                        <div className="card stock-header">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-1"></div>
                                        <div className="col-2" style={{textAlign : 'left' , paddingLeft : 20} }>Hisse</div>
                                        <div className="col-2">Güncel Fiyat</div>
                                        <div className="col-2">Son Güncelleme</div>
                                        <div className="col-2">Toplam Kar/Zarar</div>
                                        <div className="col-2">TL Karşılığı</div>
                                        <div className="col-1">Değişim</div>
                                    </div>
                            </div>
                        </div>
                        <StockRow name={"GARAN"} currentPrice={14} lastPrice={14.3} percentageChange={3} time={'12:34:12'}/>
                        <StockRow name={"GARAN"} currentPrice={14} lastPrice={14.3} percentageChange={-3} time={'12:34:12'}/>
                        <StockRow name={"GARAN"} currentPrice={14} lastPrice={14.3} percentageChange={3} time={'12:34:12'}/>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div className='investment-title-body-wrapper col'>
                <div className='investment-title row'>
                    <h4>Döviz Yatırımlarım</h4>
                </div>
                <div className='my-investment-wrapper row'>
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
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div className='investment-title-body-wrapper col'>
                <div className='investment-title row'>
                    <h4>Emtia Yatırımlarım</h4>
                </div>
                <div className='my-investment-wrapper row'>
                    <div className='col'>
                        <div className="card commodity-header">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-1"></div>
                                        <div className="col-3" style={{textAlign : 'left' , paddingLeft : 20} }>Emtia</div>
                                        <div className="col-2">Satış</div>
                                        <div className="col-2">Alış</div>
                                        <div className="col-2">Son Güncelleme</div>
                                        <div className="col-2">Değişim</div>
                                    </div>
                            </div>
                        </div>

                        <CommodityRow name={"Gold"} sellPrice={14} buyPrice={14.3} percentageChange={3} time={'12:34:12'}/>
                        <CommodityRow name={"Gold"} sellPrice={14} buyPrice={14.3} percentageChange={-3} time={'12:34:12'}/>
                        <CommodityRow name={"Gold"} sellPrice={14} buyPrice={14.3} percentageChange={3} time={'12:34:12'}/>
                        <CommodityRow name={"Gold"} sellPrice={14} buyPrice={14.3} percentageChange={-2} time={'12:34:12'}/>
                    </div>
                </div>
            </div>
        </div>
      );
    }

export default MyInvestments;
