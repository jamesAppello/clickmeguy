// import { useState } from 'react'
import Characters from '../Characters.json'

import Layout from '../components/Layout'
import CharCard from '../components/CharCard'
import GridComp from '../components/GridComp/'
import PaperComp from '../components/PaperComp/'
import Alert from '../components/Alert/'
import Score from '../components/Score/'


class index extends React.Component {

    state = {
     characters: Characters,
     pickedChars: [],
     topScore: 0,
     alertMessage: "" 
    }
    
  
    handlePicked = (e) => {
      // storing name attribute and its value to its charCard in a const variable
      const name = e.target.attributes.getNamedItem("name").value;
      // cb >> shuffleCharacter 'function'
      this.shuffleCharacters();
      // cb >> check guess takes 'name variable' holding the data value for the given card handling ...
      // ... >>> second parameter for checkGuess is a method that is used as a ...
      // ... >>> callback in the checkguess function denoted >> 'cb'
      this.checkGuess(name, this.updateTopScore)
    }
    
    
      updateTopScore = (currentState) => {
        switch (currentState) {
          case this.checkGuess = false:
            this.setState(this.state.topScore + 1)
            if (this.state.topScore >= 12) {
              this.setState(this.state.topScore = 0)
            }
            break;
          
          case this.checkGuess = true: 
          this.setState(this.state.topScore = 0)
          break;  
        }
        // console.log(this.state);
      }
      
    shuffleCharacters = () => {
      this.setState(this.state.characters = this.shuffleArray(this.state.characters))
    }
  
    shuffleArray = (arr) => {
      var j, x, i;
      for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i +1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
      }
      return arr;
    }
  
    checkGuess = (name,cb) => {
      const newState = { ...this.state };
  
      if (newState.pickedChars.includes(name)) {
        newState.alertMessage = `YOU ALREADY PICKED THAT GIF!!! TRY AGAIN!!!`;
        newState.pickedChars = [];
        this.setState(this.state = newState)
        // console.log(newState);
      } else {
        newState.pickedChars.push(name);
        newState.alertMessage = `GOOD CHOICE!!!`;
        // * \/\/~ THIS CHANGES THE TOP SCORE ~\/\/ *
        // ***** put and if-statement for each run thru if the choice is wrong then the state is held to the top score!
       // newState.topScore++;
       // *INSERT* cb to a function to control the topscore
        this.setState(this.state =newState);
        // console.log(newState);
      } 
         
      //cb(newState, this.alertWinner);
      this.alertWinner(newState)
    }
  
    
  
    alertWinner = (newState) => {
      if (newState.pickedChars.length === 12) {
        newState.alertMessage = alert("CONGRADULATIONS! YOU WON!");
        window.location.reload(false);
        //newState.pickedChars = [];
        this.setState(this.state = newState);
      } else {
      }
    }
  
    render() {
      // console.log(this.state.charGifs[0])
      const GIFDATA = this.state.charGifs
      // console.log(GIFDATA)
      return(
        <div>
            <Layout {...this.props}>
          {/* <NavBar style={{ background: "#313133", marginBottom: "5px" }} /> */}
          <GridComp container direction="column" style={{ margin: "0 auto", maxWidth: 945, textAlign:'center' }}>
          
          <GridComp item lg={12}>
              <PaperComp>
                {this.state.alertMessage === "GOOD CHOICE!" ? (
                  <Alert message={this.state.alertMessage} style={{ color: "green", fontWeight: "bolder" }} />
                ) : (
                    <Alert message={this.state.alertMessage} style={{ color: "blue", fontWeight: "bolder" }} />
                  )}
              </PaperComp>
            </GridComp>
  
            <GridComp container justify="space-between">
              <GridComp 
                item lg={6} md={6} 
                sm={12} xs={12} 
                style={{ paddingLeft: "100px", marginLeft: "161.8px" }}
                >
                <PaperComp>
                  <Score type="Current Score" score={this.state.pickedChars.length} />
                </PaperComp>
              </GridComp>
            </GridComp>
          </GridComp>
  
          <GridComp container spacing={6} justify="center" style={{ maxWidth: 945, margin: "0 auto" }}>
            {this.state.characters.map(char => (
              <GridComp item lg={3} md={3} sm={4} xs={6}>
              <CharCard
                id={char.id}
                name={char.name}
                image={char.image}
                key={char.id}
                handlePicked={this.handlePicked}
              />
              </GridComp>
            ))}
          </GridComp>
          
          </Layout>
        
        </div>
      )
    }
  
  
  
  }
  export default index;
