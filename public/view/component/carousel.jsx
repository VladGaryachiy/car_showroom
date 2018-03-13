
let React = require('react');


class Carousel extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='owl-carousel' id='owlCarousel'>
                <div className='slide'>
                    <img className='owl-item-bg' src='../../img/slider/slide1.jpg'/>
                        <div className='slide-content'>
                            <div className='overlay'></div>
                            <h3><span className = "slider-logo">GMC</span> Canyon</h3>
                            <h2>Автомобіль з яким ти зруйнуєш всі стереотипи</h2>
                        </div>
                </div>
                <div className='slide'>
                    <img className='owl-item-bg' src='../../img/slider/slide2.jpg'/>
                        <div className='slide-content'>
                            <div className='overlay'></div>
                            <h3><span className = "slider-logo">GMC</span> Sierra</h3>
                            <h2>Автомобіль з яким комфортно подорожувати</h2>
                        </div>
                </div>
                <div className='slide'>
                    <img className='owl-item-bg' src='../../img/slider/slide3.jpg'/>
                        <div className='slide-content'>
                            <div className='overlay'></div>
                            <h3><span className = "slider-logo">GMC</span> Acadia</h3>
                            <h2>Автомобіль 2017 року</h2>
                            <hr/>
                            <h1>Ціна від - 550000 грн</h1>
                        </div>
                </div>
                <div className='slide'>
                    <img className='owl-item-bg' src='../../img/slider/slide4.jpg'/>
                        <div className='slide-content'>
                            <div className='overlay'></div>
                            <h3><span className = "slider-logo">GMC</span> Terrain</h3>
                            <h2>Автомобіль, що пасує до вашого стилю</h2>
                        </div>
                </div>
                <div className='slide'>
                    <img className='owl-item-bg' src='../../img/slider/slide5.jpg'/>
                        <div className='slide-content'>
                            <div className='overlay'></div>
                            <h3><span className = "slider-logo">GMC</span> Yukon</h3>
                            <h2>Автомобіль, що має характер</h2>
                </div>
                </div>
            </div>

        )
    }

}

module.exports.Carousel = Carousel;
