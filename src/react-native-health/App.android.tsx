import React from "react";

import { View, Text } from "react-native";
import { A } from '@expo/html-elements';

export default () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ marginBottom: 8 }}>Not implemented on Android</Text>
        <A href="https://github.com/agencyenterprise/react-native-health">Open an Issue?</A>
    </View>
);
