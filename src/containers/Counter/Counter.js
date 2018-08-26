import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import './Counter.css';
import * as actionCreators from '../../store/actions';
const olStyle = {
    border: '1px solid lightgrey', 
    fontSize: '25px'
  };

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button className="Counter" onClick={()=> this.props.onStoreResult(this.props.ctr)}> Store Result</button>
                <ol style={olStyle}>
                    {this.props.storedResults.map(strResult => (
                         <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
          
                </ol>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results 
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(5)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(5)),
        onStoreResult:(result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult:(id) => dispatch(actionCreators.deleteResult(id))
    };
} 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);