import React from 'react';
import './investmentStockRow.css';
import up from '../../assets/img/up.png'
import down from '../../assets/img/down.png'
import stable from '../../assets/img/stable.png'

const InvestmentStockRow = ({ name, currentPrice, time, profitLose, tl, rate }) => {
  const boxClass = rate === 0 ? stable : rate > 0 ? up : down;

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
                <div className="col-2 text">{time}</div>
                <div className="col-2 text">{profitLose} TL</div>
                <div className="col-2 text">{tl} TL</div>
                <div className="col-1 text">{rate}%</div>
                </div>
            </div>
        </div>
    </a>
  );
};

export default InvestmentStockRow;
