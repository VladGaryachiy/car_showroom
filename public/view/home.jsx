let React = require('react');
let ReactDOM = require('react-dom');
let Carousel = require('./component/carousel').Carousel;

let Tween = require('rc-tween-one/lib/TweenOne');
let ScrollOverPack = require('rc-scroll-anim/lib/ScrollOverPack');
let Link = require('react-router-dom').Link;

let ReactCSSTransitionGroup = require('react-addons-css-transition-group');


        class Home extends React.Component{
            constructor(props){
                super(props);

                this.UpScroll = this.UpScroll.bind(this);
            }

            UpScroll(){
                window.scrollTo(0, 0);
            }

            render() {

                return(
                 <React.Fragment>
                     <div className="container-fluid home-part-one">
                         <div className="row delele-margin">
                             <div className="col-md-12 col-sm-12 col-xs-12 title-container" >
                                 {/*----CAROUSEL----*/}
                                 <Carousel/>
                             </div>
                             <div className="col-md-12 col-sm-12 col-xs-12 about-company-container " >
                                <h1 className="about-company">
                                   <p className="side-line">   </p>  Про нас  <p className="side-line">   </p>
                                </h1>

                                <ScrollOverPack>
                                    <Tween
                                        key="1"
                                        animation={{ y: 50, type: 'from', ease: 'easeOutQuart', opacity: 0  }}
                                        reverseDelay={200}
                                    >
                                        <div className="row history-company">
                                            <div className="col-md-6 about-company-text-container">
                                                <div className="banner-home">
                                                    <p className="about-company-text">
                                                        <span className="logo-home">GMC</span> - це найбільша американська автомобільна корпорація, до 2008 року протягом 77 років
                                                        найбільший виробник автомобілів в світі. За результатами 2014 концерн займає третє місце
                                                        в світі (після Toyota і Volkswagen) за кількістю проданих автомобілів (9,92 мільйона авто).
                                                        Виробництво налагоджене в 35 країнах, продаж в 192 країнах. Штаб-квартира компанії розташована
                                                        в Детройті. На певних етапах свого існування входила до двадцятки найбільших компаній-підрядників
                                                        ВПК США. Близько п'ятої частини доходів від продажів продукції і послуг, що надаються становить
                                                        федеральний клієнтський сектор обслуговування військових замовлень (без урахування іноземних
                                                        замовників американського озброєння і військової техніки).
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 about-company-img-container" >

                                            </div>
                                        </div>
                                    </Tween>
                                </ScrollOverPack>
                                 <ScrollOverPack>
                                     <Tween
                                         key="2"
                                         animation={{ y: 50, type: 'from', ease: 'easeOutQuart', opacity: 0  }}
                                         reverseDelay={200}
                                     >
                                         <div className="col-md-12">
                                             <h1 className="about-company">
                                                 <p className="side-line">   </p>  Типи автомобілів  <p className="side-line">   </p>
                                             </h1>
                                             <div className="row home-type-cars-container">
                                                 <div className="col-md-4">
                                                     <h3 className="home-type-cars-name">
                                                         Пікапи
                                                     </h3>
                                                     <Link to="/pickups" onClick={this.UpScroll}>
                                                         <img src="../img/home/type1.jpg" className="home-type-img" alt=""/>
                                                     </Link>
                                                 </div>
                                                 <div className="col-md-4">
                                                     <h3 className="home-type-cars-name">
                                                         Позашляховики
                                                     </h3>
                                                     <Link to="/suvs" onClick={this.UpScroll}>
                                                         <img src="../img/home/type2.jpg" className="home-type-img" alt=""/>
                                                     </Link>
                                                 </div>
                                                 <div className="col-md-4">
                                                     <h3 className="home-type-cars-name">
                                                         Фургони
                                                     </h3>
                                                     <Link to="/vans" onClick={this.UpScroll}>
                                                         <img src="../img/home/type3.jpg" className="home-type-img" alt=""/>
                                                     </Link>
                                                 </div>
                                             </div>
                                         </div>
                                     </Tween>
                                 </ScrollOverPack>
                             </div>
                         </div>
                     </div>
                 </React.Fragment>

                )
            }
        }


    module.exports.Home = Home;










