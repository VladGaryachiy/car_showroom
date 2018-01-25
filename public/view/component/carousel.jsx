
let React = require('react');


class Carousel extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="carousel" className="carousel slide">
               <ol className="carousel-indicators">
                   <li className="active" data-target="#carousel" data-slide="0"></li>
                   <li data-target="#carousel" data-slide="1"></li>
                   <li data-target="#carousel" data-slide="2"></li>
                   <li data-target="#carousel" data-slide="3"></li>
               </ol>
                <div className="carousel-inner">
                    <div className="item active">
                        <img src="../img/test1.jpg" alt=""/>
                    </div>
                    <div className="item ">
                        <img src="../img/test2.jpg" alt=""/>
                    </div>
                    <div className="item">
                        <img src="../img/test3.jpg" alt=""/>
                    </div>
                    <div className="item ">
                        <img src="../img/test4.jpg" alt=""/>
                    </div>
                </div>

                <a href="#carousel" className="left carousel-control" data-slide="prev">
                   <span className="glyphicon glyphicon-chevron-left"></span>
                </a>
                <a href="#carousel" className="right carousel-control" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                </a>
            </div>

        )
    }

}

module.exports.Carousel = Carousel;
