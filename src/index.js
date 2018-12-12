import React, { Component } from 'react'
import { View, StatusBar, Text } from 'react-native';
import Routes from './config/routes'

class Index extends Component {


    render(){
        return(
            <View style={{display: "flex", flex:1}}>
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