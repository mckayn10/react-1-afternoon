import React, { Component } from 'react';

class FilterObject extends Component {

    constructor(){
        super();

        this.state = {
            unFilteredArray: [
                {
                color: 'blue',
                tall: 'yes', 
                good: 'no'
                },
                {
                 color: 'red',
                 tall: 'no'
                },
              {
                  color: 'red',
                   tall: 'no',
                    good: 'yes'
                }],
            userInput: '',
            filteredArray: []
        }
    }

     handleChange(val) {
        this.setState({ userInput: val });
    }

    handleClick(prop){
        const unFilteredArray = this.state.unFilteredArray;
        const filteredArray = [];

        for ( var i = 0; i < unFilteredArray.length; i++ ) {
            if ( unFilteredArray[i].hasOwnProperty(prop) ) {
              filteredArray.push(unFilteredArray[i]);
            }
          }
          this.setState({filteredArray: filteredArray})
        }

        render() {
            return (
              <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.handleClick(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
              </div>
            )
          }
        }

export default FilterObject;