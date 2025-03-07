/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react-native';
import { SvgUri } from 'react-native-svg'; // For loading SVG images

const styles = StyleSheet.create({
  bgImage: {
    height: 200, // Adjust height based on UI requirements
    width: '100%', // Fixed width
  },
  logoImage: {
    height: 50, // Set appropriate height
    margin: 20,
    width: 100, // Set appropriate width
  },
});
const Layout = ({ navigation, rendering, ...otherProps }: any) => (
  <View style={{flex:1}}>
    <ImageBackground
      resizeMode="cover"
      source={require('./assets/images/tom.png')} // Directly require image
      style={styles.bgImage}
    >
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <SvgUri height={50} uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/410.svg" width={100} />
      </TouchableOpacity>
    </ImageBackground>
    
    <Placeholder name="jss-main" navigation={navigation} rendering={rendering} {...otherProps} />
  </View>
);

export default Layout;
