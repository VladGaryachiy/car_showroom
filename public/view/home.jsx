let React = require('react');
let Carousel = require('./component/carousel').Carousel;

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
          <div>
                <h2>Home Page</h2>
                {/*Carousel*/}
           {/*     <Carousel/>*/}



          </div>

        )
    }
}

module.exports.Home = Home;