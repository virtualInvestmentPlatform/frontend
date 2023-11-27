import React from 'react';
import './commodityRow.css';
import up from '../../assets/img/up.png'
import down from '../../assets/img/down.png'
import stable from '../../assets/img/stable.png'

const CommodityRow = ({ name, sellPrice, buyPrice, time, percentageChange }) => {
  const boxClass = percentageChange === 0 ? stable : percentageChange > 0 ? up : down;

  return (
    <a href={'/commodity/' + name}>
        <div className="card commodity-row">
            <div className="card-body">
                <div className="row">
                <div className='change-box-wrapper col-1'>
                    <img class="change-box" src={boxClass}/>
                </div>
                <div className="col-3 text" style={{textAlign : 'left' , paddingLeft : 20}}>{name}</div>
                <div className="col-2 text">{sellPrice}</div>
                <div className="col-2 text">{buyPrice}</div>
                <div className="col-2 text">{time}</div>
                <div className="col-2 text">{percentageChange}%</div>
                </div>
            </div>
        </div>
    </a>
  );
};

export default CommodityRow;
