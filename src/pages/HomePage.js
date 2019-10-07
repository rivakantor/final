import React from 'react'
import {Jumbotron, Button, Container} from 'react-bootstrap'
import RecipeNavbar from '../components/RecipeNavbar';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <RecipeNavbar/>
                <Jumbotron>
                    <Container>
                        <h1 className="display-3">Recipe Book</h1>
                        <p>Master your recipes</p>
                        <p>
                            <Button variant="primary" href="#/login">Login</Button>
                        </p>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default HomePage;