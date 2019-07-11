import React, {Component} from 'react';
import './../App.css';
import WithCounter from './withCounter';

class HocComponent extends Component {
    
    render() {
        const {count, incrementCount} = this.props;
        return (
            <div className="hoc-style">
                <div>HOC</div>
                <button onClick={incrementCount}>Click {count} times </button>
            </div>
        );
    }
}

export default WithCounter(HocComponent);
