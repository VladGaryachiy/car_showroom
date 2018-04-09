let React = require('react');
let Tween = require('rc-tween-one/lib/TweenOne');

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartVisible: false
        };

        this.CartVisible = this.CartVisible.bind(this);
    }
    CartVisible() {
        this.setState(prevState => ({
            cartVisible: !prevState.cartVisible
        }));
    }

    render() {

        let cart = null;
        if (this.state.cartVisible === true) {
            cart = React.createElement('iframe', { src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.8148605807824!2d30.538976915439214!3d50.44454907947455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cfac27646245%3A0x87fbbce3afe2e31f!2z0LLRg9C70LjRhtGPINCc0LjRhdCw0LnQu9CwINCT0YDRg9GI0LXQstGB0YzQutC-0LPQviwgNjUsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1523272957646', width: '600', height: '450', frameBorder: '0', style: { border: 0 }, allowFullScreen: true });
        } else {
            cart = null;
        }

        return React.createElement(
            Tween,
            {
                animation: {
                    type: 'from',
                    ease: 'easeOutQuart',
                    opacity: 0,
                    translateY: '300px',
                    duration: 900
                }
            },
            React.createElement(
                'div',
                { className: 'contact-main-container' },
                React.createElement(
                    'h1',
                    { className: 'contact-main-name' },
                    'GMC MOTORS'
                ),
                React.createElement(
                    'h3',
                    { className: 'official-diler-gmc-name' },
                    ' \u043E\u0444\u0456\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u0439 \u0434\u0438\u043B\u0435\u0440 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u0456\u0432 GMC \u0432 \u041A\u0438\u0454\u0432\u0456'
                ),
                React.createElement('br', null),
                React.createElement(
                    'h3',
                    { className: 'contacts-text' },
                    '\u043C.\u041A\u0438\u0457\u0432 - \u0432\u0443\u043B.\u0413\u0440\u0443\u0448\u0435\u0432\u0441\u044C\u043A\u043E\u0433\u043E 65'
                ),
                React.createElement(
                    'h2',
                    { className: 'parent-contacts-info phone-contact' },
                    '\u0422\u0435\u043B\u0435\u0444\u043E\u043D: ',
                    React.createElement(
                        'span',
                        { className: 'contacts-info' },
                        '+38(093)7524035'
                    )
                ),
                React.createElement(
                    'h2',
                    { className: 'parent-contacts-info' },
                    'Email: ',
                    React.createElement(
                        'span',
                        { className: 'contacts-info' },
                        'gmc.motors.ua@gmail.com'
                    )
                ),
                React.createElement('br', null),
                React.createElement(
                    'h3',
                    { className: 'job-graph' },
                    '\u0413\u0440\u0430\u0444\u0456\u043A \u0440\u043E\u0431\u043E\u0442\u0438:'
                ),
                React.createElement(
                    'h2',
                    { className: 'about-job-graph' },
                    '\u0412\u0456\u0434\u0434\u0456\u043B \u043F\u0440\u043E\u0434\u0430\u0436\u0443: \u0446\u0456\u043B\u043E\u0434\u043E\u0431\u043E\u0432\u043E \u0437 9.00 - 21.00 \u0431\u0435\u0437 \u043F\u0435\u0440\u0435\u0440\u0432\u0438 \u043D\u0430 \u043E\u0431\u0456\u0434'
                ),
                React.createElement(
                    'h2',
                    { className: 'about-job-graph service-contact' },
                    '\u0421\u0435\u0440\u0432\u0456\u0441: \u0446\u0456\u043B\u043E\u0434\u043E\u0431\u043E\u0432\u043E \u0441 9.00 - 21.00 \u0431\u0435\u0437 \u043F\u0435\u0440\u0435\u0440\u0432\u0438 \u043D\u0430 \u043E\u0431\u0456\u0434'
                ),
                React.createElement('br', null),
                React.createElement(
                    'button',
                    { className: 'look-on-cart', onClick: this.CartVisible },
                    '\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044F \u043D\u0430 \u043A\u0430\u0440\u0442\u0456'
                ),
                React.createElement(
                    'div',
                    { className: 'cart-container ' },
                    React.createElement(
                        Tween,
                        {
                            animation: {
                                type: 'from',
                                ease: 'easeOutQuart',
                                opacity: 0,
                                translateY: '300px',
                                duration: 900
                            }
                        },
                        cart
                    )
                )
            )
        );
    }
}

module.exports.Contacts = Contacts;
