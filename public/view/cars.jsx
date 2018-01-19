let React = require('react');



class Cars extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <h4>Different cars</h4>
            </div>
        )
    }
}

module.exports.Cars = Cars;