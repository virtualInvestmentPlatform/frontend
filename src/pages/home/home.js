import React from 'react';
import './home.css'
import tl from '../../assets/img/tl.png';
import easy from '../../assets/img/easy.png';
import coop from '../../assets/img/coop.png';


function Home() {
    return (
        <div class="container">
            <div class="col">
                <div class="row info-block">
                    <div class="col-md-4 image-wrapper">
                        <img src={tl} alt="Logo" class="img-fluid"/>
                    </div>
                    <div class="col-md-8 card-wrapper">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Sanal Para ile Riske Girmeden Yatırım Tecrübesi Kazan</h5>
                                <p class="card-text">Sanal Yatırım Platformu ile gerçek paranı riske atmadan hisse , döviz ve emtia yatırımı yap , yatırıma gerçekten başlamadan önce tecrübe kazan.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row info-block">
                    <div class="col-md-4 image-wrapper">
                        <img src={easy} alt="Logo" class="img-fluid"/>
                    </div>
                    <div class="col-md-8 card-wrapper">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Kolay Kullanım</h5>
                                <p class="card-text">Sanal Yatırım Platformunda , istediğin yatırım ürününü tek tıkla satın al.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row info-block">
                    <div class="col-md-4 image-wrapper">
                        <img src={coop} alt="Logo" class="img-fluid"/>
                    </div>
                    <div class="col-md-8 card-wrapper">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Türkiye’nin En Büyük Şirketlerine Ortak Ol</h5>
                                <p class="card-text">Sanal Yatırım Platformunda , İstanbul borsasında yer alan tüm şirketlere saniyeler içinde sanal olarak ortak olabilirsin.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }

export default Home;
