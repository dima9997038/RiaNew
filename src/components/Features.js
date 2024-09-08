import React from 'react'

export default function Features() {
  return (
    <div className="container-fluid featurs py-5">
            <div className="container py-5">
                <div className="row g-4">
                    <div className="col-md-6 col-lg-3">
                        <div className="featurs-item text-center rounded bg-light p-4">
                            <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                <i className="fas fa-car-side fa-3x text-white"></i>
                            </div>
                            <div className="featurs-content text-center">
                                <h5>Доставка</h5>
                                <p className="mb-0">Доставка оптовым покупателям</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="featurs-item text-center rounded bg-light p-4">
                            <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                <i className="fas fa-handshake fa-3x text-white"></i>
                            </div>
                            <div className="featurs-content text-center">
                                <h5>Персональный подход</h5>
                                <p className="mb-0">Подберем вам наилучшее предложение</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="featurs-item text-center rounded bg-light p-4">
                            <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                <i className="fas fa-heart fa-3x text-white"></i>
                            </div>
                            <div className="featurs-content text-center">
                                <h5>Доверие</h5>
                                <p className="mb-0">Добросовестно выполняем свои обязательства</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="featurs-item text-center rounded bg-light p-4">
                            <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                <i className="fa fa-phone-alt fa-3x text-white"></i>
                            </div>
                            <div className="featurs-content text-center">
                                <h5>Коммуникации</h5>
                                <p className="mb-0">Всегда на связи с клиентами</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
