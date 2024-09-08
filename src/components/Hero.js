import React from 'react'
import officePaperImg from '../img/hero/office-paper.png'
import officePaperRollImg from '../img/hero/office-paper-roll.png'
import lightCoaterPaperImg from '../img/hero/light-coated-paper.png'
import supercalenderedPaperImg from '../img/hero/supercalendered-paper.png'
import thickPaperForPrintingRollImg from '../img/hero/thick-paper-for-printing-roll.png'
import formatPaperImg from '../img/hero/format-paper.png'
import packingPaperImg from '../img/hero/packing-paper.png'
import coatedCardboardImg from '../img/hero/coated-cardboard.png'

export default function Hero() {
  return (
    <div className="container-fluid py-5 mb-5 hero-header">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-md-12 col-lg-7">
                        <h4 className="mb-3 text-secondary">Оптовая торговля</h4>
                        <h1 className="mb-5 display-3 text-primary">Ваш поставщик бумаги и картона с 1992 года</h1>
                        <div className="position-relative mx-auto">
                            {/*<input className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill" type="number" placeholder="Search"/>*/}
                            <button type="submit" className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-200" style={{top: "0", right: "25%"}}>Купить сейчас</button>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active rounded">
                                    <img src={officePaperImg} className="img-fluid w-100 h-100 bg-secondary rounded" alt="First slide"/>
                                    <a href="#" className="btn px-4 py-2 text-white rounded">Бумага для офиса</a>
                                </div>
                                <div className="carousel-item rounded">
                                    <img src={officePaperRollImg} className="img-fluid w-100 h-100 rounded" alt="Second slide"/>
                                    <a href="#" className="btn px-4 py-2 text-white rounded">Бумага офисная в рулонах</a>
                                </div>
                                <div className="carousel-item rounded">
                                    <img src={lightCoaterPaperImg} className="img-fluid w-100 h-100 rounded" alt="Second slide"/>
                                    <a href="#" className="btn px-4 py-2 text-white rounded">Бумага легкая мелованная</a>
                                </div>
                                <div className="carousel-item rounded">
                                    <img src={supercalenderedPaperImg} className="img-fluid w-100 h-100 rounded" alt="Second slide"/>
                                    <a href="#" className="btn px-4 py-2 text-white rounded">Бумага суперкаландрированная</a>
                                </div>
                                <div className="carousel-item rounded">
                                    <img src={thickPaperForPrintingRollImg} className="img-fluid w-100 h-100 rounded" alt="Second slide"/>
                                    <a href="#" className="btn px-4 py-2 text-white rounded">Бумага пухлая для печати в рулонах</a>
                                </div>
                                <div className="carousel-item rounded">
                                    <img src={formatPaperImg} className="img-fluid w-100 h-100 rounded" alt="Second slide"/>
                                    <a href="#" className="btn px-4 py-2 text-white rounded">Бумага полиграфическая нарезанная по формату</a>
                                </div>
                                <div className="carousel-item rounded">
                                    <img src={packingPaperImg} className="img-fluid w-100 h-100 rounded" alt="Second slide"/>
                                    <a href="#" className="btn px-4 py-2 text-white rounded">Бумага упаковочная</a>
                                </div>
                                <div className="carousel-item rounded">
                                    <img src={coatedCardboardImg} className="img-fluid w-100 h-100 rounded" alt="Second slide"/>
                                    <a href="#" className="btn px-4 py-2 text-white rounded">Картон мелованный</a>
                                </div>

                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
