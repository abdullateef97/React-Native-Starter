import React, { Component } from 'react'
import {ActivityIndicator} from 'react-native'
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {AppScene} from '../containers/_kernel';
const ConnectedRouter = connect()(Router);

const Scenes = (props) => {
    return Actions.create(
            <Stack key="root" >
                <Scene key="app" component={AppScene} title="App" />
            </Stack>
    )
}

class Routes extends Component {
    state  = {
        scenes: null
    };

    componentDidMount(){
        let scenes = Scenes();
        this.setState({scenes})
    }

    render(){
         // Show nothing if scenes have not been created
        if(!this.state.scenes) return null;
        return (
            <ConnectedRouter scenes={this.state.scenes}/>
        )
    }
}

export default Routes;