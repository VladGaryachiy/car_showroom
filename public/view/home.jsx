let React = require('react');


class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <h4>Home page</h4>
            </div>
        )
    }
}

module.exports.Home = Home;