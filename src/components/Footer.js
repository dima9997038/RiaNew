import React from 'react'

export default function Footer() {
  return (
    <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
      <div className="container py-5">
        <div
          class="pb-4 mb-4"
          style={{borderBottom: "1px solid rgba(226, 175, 24, 0.5)" }}
        >
          <div className="row g-4">
            <div className="col-lg-3">
              <a href="#">
                <h1 className="text-primary mb-0">РИАгрупп М</h1>
                <p className="text-secondary mb-0">Бумага и картон</p>
              </a>
            </div>
            <div className="col-lg-6">
              <div className="position-relative mx-auto">
                <input
                  className="form-control border-0 w-100 py-3 px-4 rounded-pill"
                  type="number"
                  placeholder="Ваш Email"
                />
                <button
                  type="submit"
                  className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white"
                  style={{ top: "0", right: "0" }}
                >
                  Отправить сообщение
                </button>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="d-flex justify-content-end pt-3">
                <a
                  className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle"
                  href=""
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                  href=""
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                  href=""
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  className="btn btn-outline-secondary btn-md-square rounded-circle"
                  href=""
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <div className="footer-item">
              <h4 className="text-light mb-3">Быстро и качественно</h4>
              <p className="mb-4">
                Поставщик бумаги и картона с 1982 года
              </p>
              <a
                href=""
                className="btn border-secondary py-2 px-4 rounded-pill text-primary"
              >
                Ассортимент
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="d-flex flex-column text-start footer-item">
              <h4 className="text-light mb-3">Информация о нас</h4>
              <a className="btn-link" href="">
                Главная страница
              </a>
              <a className="btn-link" href="">
                О компании
              </a>
              <a className="btn-link" href="">
                Ассортимент
              </a>
              <a className="btn-link" href="">
                Наши сотрудники
              </a>
              <a className="btn-link" href="">
                Контакты
              </a>
              {/*<a className="btn-link" href="">*/}
              {/*  FAQs & Help*/}
              {/*</a>*/}
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="d-flex flex-column text-start footer-item">
              <h4 className="text-light mb-3">Наш ассортимент</h4>
              <a className="btn-link" href="">
                Бумага для офиса
              </a>
              <a className="btn-link" href="">
                Бумага офисная в рулонах
              </a>
              <a className="btn-link" href="">
                Бумага легкая мелованная
              </a>
              <a className="btn-link" href="">
                Бумага суперкаландрированная
              </a>
              <a className="btn-link" href="">
                Бумага пухлая для печати в рулонах
              </a>
              <a className="btn-link" href="">
                Бумага полиграфическая нарезанная по формату
              </a>
              <a className="btn-link" href="">
                Бумага упаковочная
              </a>
              <a className="btn-link" href="">
                Картон мелованный
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-item">
              <h4 className="text-light mb-3">Контакты</h4>
              <p>г.Минск ул.Краснозвездная 18-Б, офис 703,+375(17)284-35-25</p>
              <p>Email: ria-opt@tut.by</p>
              <p>Телефоны:</p>
              <p> +375(17) 284-35-25</p>
              <p>+375(17) 290-41-19(20)</p>
              <p>+375(29) 659-99-87</p>
              <p>+375(29) 578-35-25</p>
              {/*<p>Payment Accepted</p>*/}
              {/*<img src="img/payment.png" className="img-fluid" alt="" />*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
