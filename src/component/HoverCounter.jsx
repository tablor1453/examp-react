import React, {Component} from 'react';
import WithCounter from './withCounter';


class HoverCounter extends Component {

    render() {

        const {count, incrementCount} = this.props;

        return (
            <div onMouseOver={incrementCount}> Hoveres {count} Times</div>
        )
    }
}

export default WithCounter(HoverCounter);