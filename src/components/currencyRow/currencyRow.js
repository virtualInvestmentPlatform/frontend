import React from 'react';
import './currencyRow.css';
import logo from '../../assets/img/logo.png'
import up from '../../assets/img/up.png'
import down from '../../assets/img/down.png'
import stable from '../../assets/img/stable.png'

const CurrencyRow = ({ name, sellPrice, buyPrice, time, percentageChange }) => {
  const boxClass = percentageChange === 0 ? stable : percentageChange > 0 ? up : down;

  return (
    <div className="card currency-row">
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
  );
};

export default CurrencyRow;
