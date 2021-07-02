import React, { useState } from "react";
import DatePicker from "react-native-date-picker";
import { View } from 'react-native'
export default () => {
    const [date, setDate] = useState(new Date());

    return <View style={{ backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}><DatePicker date={date} onDateChange={setDate} /></View>;
};
