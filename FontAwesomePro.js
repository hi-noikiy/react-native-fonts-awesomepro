import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

type Props = {
    size?: '',
    icon?: '',
    color?: '',
    font?: 'solid' | 'regular' | 'light' | 'brand',
    style?: ?StyleSheet.DangerouslyImpreciseStyleProp,
};

const propTypes = {
    icon: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
    style: Text.propTypes.style,
    font: PropTypes.oneOf([
        'solid', 'regular', 'light', 'brand'
    ]),
};

class FontAwesomePro extends React.Component<Props> {

    static defaultProps = {
        icon: '',
        size: 15,
        font: 'solid',
        color: 'black',
    }

    setNativeProps(nativeProps) {
        this._root.setNativeProps(nativeProps);
    }

    render() {
        const { color, font, size } = this.props;
        let fontFamily = 'FontAwesomeSolid';
        if (font === 'regular') fontFamily = 'FontAwesomeRegular';
        else if (font === 'light') fontFamily = 'FontAwesomeLight';
        else if (font === 'brand') fontFamily = 'FontAwesomeBrand';
        return (
            <Text
                style={[
                    {
                        color,
                        fontFamily,
                        fontSize: size,
                        backgroundColor: 'transparent'
                    },
                    this.props.style
                ]}
                ref={component => this._root = component}
            >
                {this.props.icon}
            </Text>
        );
    }
}

FontAwesomePro.propTypes = propTypes;

export default FontAwesomePro;
