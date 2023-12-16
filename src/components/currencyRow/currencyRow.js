import React from 'react';
import './currencyRow.css';
import up from '../../assets/img/up.png'
import down from '../../assets/img/down.png'
import stable from '../../assets/img/stable.png'

const CurrencyRow = ({ code, selling, buying, time, rate }) => {
  const boxClass = rate === 0 ? stable : rate > 0 ? up : down;

  return (
    <a href={'/currency/' + code}>
      <div className="card currency-row">
        <div className="card-body">
          <div className="row">
            <div className='change-box-wrapper col-1'>
              <img class="change-box" src={boxClass}/>
            </div>
            <div className="col-3 text" style={{textAlign : 'left' , paddingLeft : 20}}>{code}</div>
            <div className="col-2 text">{selling}</div>
            <div className="col-2 text">{buying}</div>
            <div className="col-2 text">{time}</div>
            <div className="col-2 text">{rate}%</div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CurrencyRow;
