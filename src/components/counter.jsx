import React, { Fragment } from 'react';


class counter extends React.Component {
    state = {
        count: 0
    };

    render() { 
        return (
            <Fragment>
            <span>{this.formatCount()}</span>
            <button onClick="updateCount()">Increment</button>
            </Fragment>
        );
    }

    updateCount() {
        this.setState.count = this.state.count + 1;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default counter;