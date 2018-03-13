let React = require('react');
let ReactDOM = require('react-dom');
let Carousel = require('./component/carousel').Carousel;



let ReactCSSTransitionGroup = require('react-addons-css-transition-group');


        class Home extends React.Component{
            constructor(props){
                super(props);
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
                                    Про нас
                                </h1>

                                 <div className="row history-company">
                                     <div className="col-md-6">
                                        <p className="about-company-text">
                                            GMC - це найбільша американська автомобільна корпорація, до 2008 року протягом 77 років
                                            найбільший виробник автомобілів в світі. За результатами 2014 концерн займає третє місце
                                            в світі (після Toyota і Volkswagen) за кількістю проданих автомобілів (9,92 мільйона авто).
                                            Виробництво налагоджене в 35 країнах, продаж в 192 країнах. Штаб-квартира компанії розташована
                                            в Детройті. На певних етапах свого існування входила до двадцятки найбільших компаній-підрядників
                                            ВПК США. Близько п'ятої частини доходів від продажів продукції і послуг, що надаються становить
                                            федеральний клієнтський сектор обслуговування військових замовлень (без урахування іноземних
                                            замовників американського озброєння і військової техніки).
                                        </p>
                                     </div>
                                     <div className="col-md-6">
                                         <img src="../img/gmc1.jpg" height="460px" width="600px" alt=""/>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </React.Fragment>

                )
            }
        }


    module.exports.Home = Home;










