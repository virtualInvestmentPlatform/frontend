import React from 'react';
import './allCommodity.css'
import CurrencyRow from '../../components/commodityRow/commodityRow';
import CommodityRow from '../../components/commodityRow/commodityRow';


function AllCommodity() {
    return (
        <div className='container'>
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
            <CommodityRow name={"Gold"} sellPrice={14} buyPrice={14.3} percentageChange={3} time={'12:34:12'}/>
            <CommodityRow name={"Gold"} sellPrice={14} buyPrice={14.3} percentageChange={3} time={'12:34:12'}/>
            <CommodityRow name={"Gold"} sellPrice={14} buyPrice={14.3} percentageChange={-1} time={'12:34:12'}/>
            <CommodityRow name={"Gold"} sellPrice={14} buyPrice={14.3} percentageChange={3} time={'12:34:12'}/>
            <CommodityRow name={"Gold"} sellPrice={14} buyPrice={14.3} percentageChange={3} time={'12:34:12'}/>
            </div>
        </div>
      );
    }

export default AllCommodity;
