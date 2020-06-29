import React, { Fragment } from 'react';


class counter extends React.Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    render() { 
        return (
            <Fragment>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm" onClick={this.updateCount.bind(this)}>Increment</button>
              {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning": "primary"
        return classes;
    }

    updateCount() {
        this.setState({ count: this.state.count +1})
        //console.log(this.state.count);
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default counter;