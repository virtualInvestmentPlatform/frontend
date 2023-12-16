import React, { useState, useEffect } from 'react';
import './allCommodity.css'
import CommodityRow from '../../components/commodityRow/commodityRow';
import { getAllCommodities } from '../../service/commodity'; 


function AllCommodity() {
    const [commodities, setCommodities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllCommodities();
            if (response && response.data) {
                setCommodities(response.data);
            }
        };
        fetchData();
    }, []);

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

            {commodities.map(commodity => (
                    <CommodityRow 
                        key={commodity.name}
                        name={commodity.name} 
                        selling={commodity.selling} 
                        buying={commodity.buying}
                        rate={commodity.rate} 
                        time={commodity.time}
                    />
                ))
            }
            </div>
        </div>
      );
    }

export default AllCommodity;
