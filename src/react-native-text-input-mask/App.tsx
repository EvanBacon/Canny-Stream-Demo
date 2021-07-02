// https://expo.canny.io/admin/feedback/feature-requests/p/support-for-react-native-text-input-mask?boards=feature-requests&sort=top
// https://github.com/react-native-text-input-mask/react-native-text-input-mask
// no plugin
import React from 'react';
import { View } from 'react-native';
import TextInputMask from 'react-native-text-input-mask';


export default function App() {
    const [value, onChangeText] = React.useState('');

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', padding: 30, }}>
            <TextInputMask
                mask="+1 ([000]) [000] [00] [00]"
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => {

                    onChangeText(text)
                }}
                value={value}
            />
        </View>
    );
};