import Layout from '../components/Layout'
import Characters from '../Characters.json'


const index = (props) => {
    console.log(props)
    console.log(Characters)

    const charTEST = Characters.map(char => (
        <div
            key={char.name}
            className='card'
        >
        <h1> {char.name} </h1>
        </div>
    ))

    return (
        <>
        <Layout>
            {/* ?- make this('<h1>') into a js-jsxVar >> 'switch' -? */}
        <h1>
           Welcome to ClickMeGuy!
        </h1>
        <div className="container Holder" style={{ 
            textAlign:'center',
            backgroundColor:'lightgrey',
            borderRadius:10.1618 
        }}>
            <h1>this is a TEST_H1_TAG</h1>
            <div className="row">
                {/* CHARACTERS */}
                {charTEST}
                
            </div>
            
            
        </div>
        </Layout>
        </>
    );
};

// index.getInitialProps = async function

export default index