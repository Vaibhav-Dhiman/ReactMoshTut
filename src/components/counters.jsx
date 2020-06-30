import React from 'react';
import Counter from './counter';

class Counters extends React.Component {
    state = { 
        counters : [
            { id: 1, value: 0 },
            { id: 2, value: 0 }
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

    handleIncrement = counterId => {
        let counters = [...this.state.counters];
        console.log(counters);
        let index = counters.indexOf(counterId)
        let item = {...counters[index]};
        item.value++;
        counters[counterId] = item;
        console.log(counters);
        this.setState({counters: counters});
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
                //  onIncrement={this.handleIncrement(counter)}
                 onIncrement={this.handleIncrement.bind(counter.id)}
                 //onDelete={this.handleDelete} 
                 counter = {counter}
                 />)}
            </div>  
         );
    }
}
 
export default Counters;