import React from 'react';
import Header from './../Header/Header'
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    // constructor(){
    //     super();
    //     this.state={
    //         headertext: 'Name It!',
    //     }
    // }

    state = {
        headerText: 'Name🔍',
        headerExpanded: true,
        suggestedNames: [],
    };

    handleInputChange = (inputText) => {
        // alert('I am called');
        // console.log('input text - ', inputText);
        // name(inputText);
        this.setState({
            // headerExpanded: !(inputText.length > 0),
            headerExpanded: !inputText,
            /*inputText.length > 0 ? false : true*/ 
            // suggestedNames: name(inputText)
            suggestedNames: inputText ? name(inputText) : [],
         });
    }


    render() {
        console.log(name('cloud'));
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} headtitle = {this.state.headerText}/>
                <SearchBox onInputChange={this.handleInputChange}/>
                <ResultsContainer suggestedNames={this.state.suggestedNames}/>
                {/* <h3>{this.state.headerText}</h3> */}
                {/* <button 
                onClick= {() => {this.setState({headerText: "woaah It's the new headertext"})
                console.log(this.state.headerText);    
            }}></button> */}
            </div>
        );
        //<h1> This is the start </h1>;
    }
}

// function App() {
//     return <h1> This is the start </h1>
// }

export default App