// https://expo.canny.io/feature-requests/p/replace-asyncstorage-with-mmkv
// https://github.com/mrousavy/react-native-mmkv
// no plugin
import React from 'react';
import { TextInput, View } from 'react-native';
import { MMKV } from 'react-native-mmkv';


export default function App() {
    const [value, onChangeText] = React.useState(MMKV.getString('input'));

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', padding: 30, }}>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => {
                    MMKV.set('input', text)

                    onChangeText(text)
                }}
                value={value}
            />
        </View>
    );
};