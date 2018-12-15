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

    // consider redirecting users immediately on success

    componentDidMount() {
        const values = queryString.parse(this.props.location.search)
        if (values.error === 'access_denied') {
            this.setState({error: true});
        } else {
            if (values.state !== 'opensesame') {
                alert('Access denied');
            } else {
                axios.post('http://localhost:9000/api/auth', {code: values.code})
            }
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