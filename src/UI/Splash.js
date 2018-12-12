import React, { Component } from 'react'
import { View,Text } from 'react-native';
import Styles from '../styles/styles'


class Splash extends Component {

    render(){
        return (
            <View style={[Styles.misc.flexContainer]}>
                <Text>Holla</Text>
            </View>
        )
    }


}

export default Splash