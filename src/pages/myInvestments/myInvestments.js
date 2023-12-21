import React, { useState, useEffect } from 'react';
import './myInvestments.css'
import InvestmentStockRow from '../../components/investmentStockRow/investmentStockRow';
import CurrencyRow from '../../components/currencyRow/currencyRow';
import CommodityRow from '../../components/commodityRow/commodityRow';
import { getMyInvestments} from '../../service/transaction';
import { useAuth } from '../../context/authContext';

function MyInvestments() {
    const {token} = useAuth();
    const [myInvestments,setMyInvestments] = useState([]);
    const [totalStockWorth,setTotalStockWorth] = useState([]);
    const [totalCurrencyWorth,setTotalCurrencyWorth] = useState([]);
    const [totalCommodityWorth,setTotalCommodityWorth] = useState([]);

    useEffect(() => {
        const fetchMyInvestments = async () => {
            const response = await (getMyInvestments(token));
            if (response && response.data ) {
                console.log(response.data);
                setMyInvestments(response.data);

                const totalWorth = response.data.stockInvestments.reduce((acc, stock) => {
                    return acc + stock.tl;
                }, 0);

                setTotalStockWorth(totalWorth);
                setTotalCurrencyWorth(0);
                setTotalCommodityWorth(0);
            }
        };

        fetchMyInvestments();
    }, []);

    return (
        <div className='container'>
            <div className='investment-title-body-wrapper col'>
                <div className='investment-title row'>
                    <h4 className='col'>Borsa Yatırımlarım</h4>
                    <h4 className='col total-worth-title'>Toplam Varlık : {totalStockWorth} TL</h4>
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
                        {myInvestments.stockInvestments && Array.isArray(myInvestments.stockInvestments) && myInvestments.stockInvestments.map(investment => (
                                <InvestmentStockRow 
                                name={investment.code} 
                                currentPrice={investment.lastprice} 
                                time={investment.time} 
                                profitLose={investment.profitLoss} 
                                tl={investment.tl}
                                rate={investment.rate}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div className='investment-title-body-wrapper col'>
                <div className='investment-title row'>
                    <h4 className='col'>Döviz Yatırımlarım</h4>
                    <h4 className='col total-worth-title'>Toplam Varlık : {totalCurrencyWorth} TL</h4>
                </div>
                <div className='my-investment-wrapper row'>
                    <div className='col'>
                        <div className="card currency-header">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-1"></div>
                                        <div className="col-2" style={{textAlign : 'left' , paddingLeft : 20} }>Döviz</div>
                                        <div className="col-2">Güncel Fiyat</div>
                                        <div className="col-2">Son Güncelleme</div>
                                        <div className="col-2">Toplam Kar/Zarar</div>
                                        <div className="col-2">TL Karşılığı</div>
                                        <div className="col-1">Değişim</div>
                                    </div>
                            </div>
                        </div>







                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div className='investment-title-body-wrapper col'>
                <div className='investment-title row'>
                    <h4 className='col'>Emtia Yatırımlarım</h4>
                    <h4 className='col total-worth-title'>Toplam Varlık : {totalCommodityWorth} TL</h4>
                </div>
                <div className='my-investment-wrapper row'>
                    <div className='col'>
                        <div className="card commodity-header">
                                <div className="card-body">
                                    <div className="row">
                                    <div className="col-1"></div>
                                        <div className="col-2" style={{textAlign : 'left' , paddingLeft : 20} }>Emtia</div>
                                        <div className="col-2">Güncel Fiyat</div>
                                        <div className="col-2">Son Güncelleme</div>
                                        <div className="col-2">Toplam Kar/Zarar</div>
                                        <div className="col-2">TL Karşılığı</div>
                                        <div className="col-1">Değişim</div>
                                    </div>
                            </div>
                        </div>







                    </div>
                </div>
            </div>
        </div>
      );
    }

export default MyInvestments;
