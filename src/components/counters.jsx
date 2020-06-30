import React from 'react';
import Counter from './counter';

class Counters extends React.Component {
    state = { 
        counters : [
            { id: 1, value: 1 },
            { id: 2, value: 0 },
            { id: 3, value: 3 },
        ]
     };

     handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });

    };

    handleReset = () => {

        const counters =this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters })
    };

    handleIncrement = counter => {
        console.log(counter);
        // const counters = [...this.state.counters];
        // const index = counters.indexOf(counter);
        // counters[index] = {...counter};
        // counters[index].value++;
        // this.setState({ counters });
    };

    render() { 
        return ( 
            <div>
                <button onClick={this.handleReset}
                className="btn btn-primary btn-sm m-2">
                    Reset
                    </button>
              {this.state.counters.map(counter =>
                 <Counter 
                 key={counter.id} 
                 onDelete={()=> this.handleDelete(counter.id)} 
                 onIncrement = {this.handleIncrement}
                 //onDelete={this.handleDelete} 
                 counter = {counter}
                 />)}
            </div>  
         );
    }
}
 
export default Counters;