import React, {Component} from 'react';
import queryString from 'query-string';
import axios from 'axios';

class Callback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
        }
    }

    componentDidMount() {
        const values = queryString.parse(this.props.location.search)
        if (values.error === 'access_denied') {
            this.setState({error: true});
        } else {
            axios.post('http://localhost:9000/api/code', {code: values.code})
        }
    }

    render() {
        return(
            <div>
                {this.state.error === true ? <h2>Failure</h2> : <h2>Success</h2>}
            </div>
        )
    }
}

export default Callback;