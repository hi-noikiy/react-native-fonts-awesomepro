# react-native-fonts-awesomepro
React Native Fontawesome Pro Icons

[![npm version](https://img.shields.io/npm/v/react-native-fonts-awesomepro.svg?style=flat-square)](https://www.npmjs.com/package/react-native-fonts-awesomepro)
[![npm downloads](https://img.shields.io/npm/dm/react-native-fonts-awesomepro.svg?style=flat-square)](https://www.npmjs.com/package/react-native-fonts-awesomepro)

# Benefits
- No bloatware, one package with one iconset, nothing more nothing less
- Full set of FontAwesome Icons properly updated
- Insanely fast with minimal memory footprint
- Uses the OS to render icons, for best in class performance (refer to performance note bellow)

# Installation process

## Using yarn
`npm i -g yarn`

`yarn add react-native-fonts-awesomepro`

## Using npm
`npm i --save react-native-fonts-awesomepro`

This module uses Font Awesome Pro version [5.2.0]
Buy Font Awesome Pro (https://fontawesome.com/pricing)

Download zip file name fontawesome-pro-5.2.0-desktop

Go to fontawesome-pro-5.2.0-desktop/otfs

Edit file otf name to:
    FontAwesomeBrands.otf
    FontAwesomeLight.otf
    FontAwesomeRegular.otf
    FontAwesomeSolid.otf

Copy all file and paste it in

Adding Custom Fonts to A React Native Application for Android

1 \android\app\build\intermediates\assets\debug
    create folder name fonts and paste file
2 \android\app\build\intermediates\assets\release
    create folder name fonts and paste file

[Adding Custom Fonts to A React Native Application for IOS](https://medium.com/@dabit3/adding-custom-fonts-to-react-native-b266b41bff7f)

# Usage
```javascript
import FontAwesomePro, { Icons } from 'react-native-fonts-awesomepro';

...
render() {
  return (
    <View>
      <FontAwesomePro 
        size={100}
        color='red'
        font='light'
        icon={Icons.barcodeAlt}
      />
    </View>
  );
},
```
# Note on hyphens
Javascript don't accept hyphens as valid object names hence all hyphens where removed and
names converted to camel case.

Example: `th-large` becomes `thLarge`

# Why this is fast, and uses almost no extra memory
This package uses the Text element to render Icons. The Text element delegates
to the OS the render process of the icons based on the Font file.
Both IOS and Android render fonts amazingly fast with little memory overhead. In essence
FontAwesome.ttf will be used by the OS to render icons and will benefit of years
of native software improvement as well hardware acceleration.


