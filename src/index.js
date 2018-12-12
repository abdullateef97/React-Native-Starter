import React, { Component } from 'react'
import { View, StatusBar } from 'react-native';
import Routes from './config/routes'

class Index extends Component {


    render(){
        return(
            <View>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <Routes/>
            </View>
        )
    }
} 

export default Index;