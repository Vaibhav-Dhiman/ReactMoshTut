import React, { Fragment } from 'react';


class counter extends React.Component {
    state = {
        value: this.props.value,
        tags: ['tag1', 'tag2', 'tag3']
    };


    // use arrow function as blow to not get error of state not defined or bind onclick with this keyword if not using arrow function. as
    // {this.updateCount.bind(this)}
    updateCount = () => {
        this.setState({ value: this.state.value + 1 })
        //console.log(this.state.count);
    }

    render() { 
        console.log('props', this.props);

        return (
            <Fragment>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm" onClick={this.updateCount}>Increment</button>
                 <li>{this.state.value}</li>
              {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning": "primary"
        return classes;
    }

   

    formatCount() {
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default counter;
