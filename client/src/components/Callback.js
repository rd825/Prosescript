import React, {Component} from 'react';

class Callback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: null,
            error: null,
        }
    }

    componentDidMount() {
        console.log(this.props.location.search)
    }

    render() {
        return(
            <h2>Success</h2>
        )
    }
}

export default Callback;