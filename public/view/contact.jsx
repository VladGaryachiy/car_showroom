let React = require('react');
let Tween = require('rc-tween-one/lib/TweenOne');






class Contacts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cartVisible:false
        };

        this.CartVisible = this.CartVisible.bind(this);
    }
    CartVisible(){
        this.setState(prevState => ({
           cartVisible: !prevState.cartVisible
        }));
    }

    render() {


        let cart = null;
        if(this.state.cartVisible === true){
            cart =  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.8148605807824!2d30.538976915439214!3d50.44454907947455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cfac27646245%3A0x87fbbce3afe2e31f!2z0LLRg9C70LjRhtGPINCc0LjRhdCw0LnQu9CwINCT0YDRg9GI0LXQstGB0YzQutC-0LPQviwgNjUsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1523272957646" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
        }
        else {
            cart = null;
        }

        return(
            <Tween
                animation={{
                    type: 'from',
                    ease: 'easeOutQuart',
                    opacity: 0 ,
                    translateY: '300px',
                    duration:900,
                }}
            >
                <div className = "contact-main-container">
                    <h1 className="contact-main-name">GMC MOTORS</h1>
                    <h3 className="official-diler-gmc-name"> офіціальний дилер автомобілів GMC в Києві</h3>
                    <br/>
                    <h3 className="contacts-text">м.Київ - вул.Грушевського 65</h3>
                    <h2 className="parent-contacts-info phone-contact" >Телефон: <span className="contacts-info">+38(093)7524035</span></h2>
                    <h2 className="parent-contacts-info">Email: <span className="contacts-info">gmc.motors.ua@gmail.com</span></h2>
                    <br/>
                    <h3 className="job-graph">Графік роботи:</h3>
                    <h2 className="about-job-graph">
                        Відділ продажу: цілодобово з 9.00 - 21.00 без перерви на обід
                    </h2>
                    <h2 className="about-job-graph service-contact">
                        Сервіс: цілодобово с 9.00 - 21.00 без перерви на обід
                    </h2>
                    <br/>
                    <button className="look-on-cart" onClick={this.CartVisible}>Дивитися на карті</button>
                    <div className="cart-container ">
                        <Tween
                            animation={{
                                type: 'from',
                                ease: 'easeOutQuart',
                                opacity: 0 ,
                                translateY: '300px',
                                duration:900,
                            }}
                        >
                            {cart}
                        </Tween>
                    
                    </div>
                </div>
            </Tween>
        )
    }
}





module.exports.Contacts = Contacts;