import { useState } from 'react'
import Characters from '../Characters.json'

import Layout from '../components/Layout'
import CharCard from '../components/CharCard'
import GridComp from '../components/GridComp/'
import PaperComp from '../components/PaperComp/'
import Alert from '../components/Alert/'
import Score from '../components/Score/'


const index = (props) => {
    // console.log(props)
    // CHARCTERS ARRAY
    const [character, setCharacters] = useState(Characters)
    console.log(character)
    // SCORE
    const [score, setScore] = useState(0);
    console.log(score)
    // ALERT MESSAGE
    const [alert, setAlert] = useState('');
    console.log(alert)

    // METHODS
    const handlePicked = e => {
        const name = e.target.attributes.getNamedItem('name').value;
        console.log(name)
        shuffleCharacters()
        checkGuess(name, updateTopScore)
    }
    const updateTopScore = (currentScore) => {
        console.log(currentScore)
    }

    // * calledback from handlePicked
    const checkGuess = (name, cb) => {
        console.log(name)
        console.log(cb)
    }
    // * calledback from handlePicked
    const shuffleCharacters = () => {
        setCharacters(shuffleArray(character))
        console.log(character)
        // ** characters shuffle but pics dont shuffle as the data does...
    }
    // * callback from shuffleCharacters
    const shuffleArray = arr => {
        let j, x, i;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        }
        return arr
    }

    return (
        <>
            <Layout>
                <GridComp 
                    container 
                    direction='column' 
                    style={{ mrgin: "0 auto", maxWidth: 945 }}>
                        <GridComp item lg={12}>
                            <PaperComp>
                                {alert === "Good Choice!" ? (
                                    <Alert message={alert} style={{ color: 'green' }} />
                                ) : (
                                        <Alert message={alert} style={{ color: 'blue' }} />
                                    )}
                            </PaperComp>
                        </GridComp>

                    <GridComp 
                        container 
                        justify="space-between">
                        <GridComp 
                            item 
                                lg={6} 
                                md={6} 
                                sm={12} 
                                xs={12} 
                            style={{ padingLeft: '100px', marginLeft: "101.8px" }}>
                            <PaperComp>
                                <Score type="Score To Win" Score={character.length} currentScore={score} />
                            </PaperComp>
                        </GridComp>
                    </GridComp>
                </GridComp>

                <GridComp container spacing={8} justify='center' style={{ maxWidth: 945, margin: '0 auto' }}>
                    {character.map(char => (
                        <CharCard
                            id={char.id}
                            key={char.id}
                            name={char.name}
                            image={char.image}
                            handlePicked={handlePicked}
                        />
                    ))}
                </GridComp>
            </Layout>
        </>
    );
};



export default index