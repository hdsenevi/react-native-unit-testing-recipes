import React, { Component } from 'react';
import { Text, TouchableOpacity, Platform, Linking } from 'react-native';

// 1. Changed to a class based component
class Button extends Component {
    constructor(props) {
        super(props);
    }

    // 2. Custom function called onPress TouchableOpacity
    onPressHandler = () => {
        const { onPress, url } = this.props
        if (url) {
            Linking.openURL(url)
        }
        onPress()
    }

    render(){
        const { buttonStyle, textStyle } = styles;
        const { label, primary } = this.props;
        
        // 3. Custom platform specific rendering
        const height = Platform.OS === 'ios' ? 45 : 65;

        // 4. Change color of button depending on 'primary' prop
        const newButtonStyle = primary ? 
            [buttonStyle, { height }] : 
            [buttonStyle, {height, backgroundColor: '#f34541', borderBottomColor: '#a43532'}];

        // 5. Platform specific font styling
        const fontSize = Platform.OS === 'ios' ? 16 : 20;

        return (
            <TouchableOpacity onPress={this.onPressHandler} style={newButtonStyle}>
                <Text style={[textStyle, { fontSize }]}>
                    {label}
                </Text>
            </TouchableOpacity>
        );
    }
};

Button.defaultProps = {
    primary: true,
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontWeight: '600',
    },
    buttonStyle: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#38ba7d',
        borderBottomWidth: 6,
        borderBottomColor: '#1e6343',
        borderWidth: 1,
        marginLeft: 15,
        marginRight: 15
    }
};

export default Button;
