
let React = require('react');
let ReactDOM = require('react-dom');
let Link = require('react-router-dom').Link;

class Navbar extends React.Component{

    constructor(props){
       super(props);

        this.UpScroll = this.UpScroll.bind(this);
        this.reloadScript = this.reloadScript.bind(this);

    }
    UpScroll(){
        window.scrollTo(0, 0);
    }

    reloadScript(){

        let oneScript = $('#carousel1').detach();
        let twoScript = $('#carousel2').detach();


        $( "body" ).append( ' <script id="carousel1" src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.0/owl.carousel.js"></script>'+
            '<script id="carousel2" src="/js/carousel.js"></script>');
    }


    render(){
        return(
            <div className="container-fluid NavbarContainer" id="navbar" >
                <div className="row">
                    <div className="navbar navbar-inverse navbar-fixed-top  col-xs-12 col-md-12 col-sm-12">
                        <div className="container">
                            <div className="navbar-header">
                               <img alt="" src="../../img/logo1.png" width="80px" height="30px" className="brandStyle"/>


                            </div>
                            <div className="collapse navbar-collapse" id="responsive-menu">
                                <ul className="nav navbar-nav">
                                    <li onClick={this.reloadScript} ><Link to="/"  className ="MainPage">Головна</Link></li>
                                    <li className="dropdown">
                                        <a href="#"  className="dropdown-toggle" data-toggle="dropdown">Автомобілі
                                            <b className="caret"/>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li onClick={this.UpScroll}><Link to="/cars"  >Всі автомобілі</Link></li>
                                            <hr/>
                                            <li  onClick={this.UpScroll}><Link to="/pickups">Пікапи</Link></li>
                                            <li  onClick={this.UpScroll}><Link to="/suvs">Позашляховики</Link></li>
                                            <li  onClick={this.UpScroll}><Link to="/vans">Фургони</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#"  className="dropdown-toggle" data-toggle="dropdown">Сервіси
                                            <b className="caret"/>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><Link to="/services">Сервіси</Link></li>
                                            <hr/>
                                            <li><Link to="/">Інше</Link></li>
                                            <li><Link to="/">Інше</Link></li>
                                            <li><Link to="/">Інше</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/finance">Фінансові послуги</Link></li>
                                    <li><Link to="/contacts">Контакти</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

module.exports.Navbar = Navbar;








