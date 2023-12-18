import React from 'react';
import './stockRow.css';
import up from '../../assets/img/up.png'
import down from '../../assets/img/down.png'
import stable from '../../assets/img/stable.png'

const StockRow = ({ name, currentPrice, min, max, time, percentageChange }) => {
  const boxClass = percentageChange === 0 ? stable : percentageChange > 0 ? up : down;

  return (
    <a href={'/stock/' + name}>
        <div className="card stock-row">
            <div className="card-body">
                <div className="row">
                <div className='change-box-wrapper col-1'>
                    <img class="change-box" src={boxClass}/>
                </div>
                <div className="col-2 text" style={{textAlign : 'left' , paddingLeft : 20}}>{name}</div>
                <div className="col-2 text">{currentPrice} TL</div>
                <div className="col-2 text">{min} TL</div>
                <div className="col-2 text">{max} TL</div>
                <div className="col-2 text">{time}</div>
                <div className="col-1 text">{percentageChange}%</div>
                </div>
            </div>
        </div>
    </a>
  );
};

export default StockRow;
