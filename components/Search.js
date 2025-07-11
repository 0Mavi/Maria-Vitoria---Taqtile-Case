import * as React from 'react';
import { ActivityIndicator, Text, View, TextInput } from 'react-native';
import Constants from 'expo-constants';

// Remove this list after the request to the API is complete
const mockList = [
  { name: 'Nario' },
  { name: 'Bokimun' },
  { name: 'Helu' },
  { name: 'God of Bar' },
  { name: 'Call of responsability' },
  { name: 'Quarter life' },
  { name: 'Dark Spirits' },
  { name: 'Initial Fantasy' },
  { name: 'Road Fighters' },
  { name: 'Super Tofu Boy' }
];

export function Search(props) {
  const [loading, setLoading] = React.useState(true);
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      setList(mockList);
      setLoading(false);
    }, 2000);
  });

  return (
    <View>
      <TextInput style={inputStyle}/>
      {loading && <ActivityIndicator size={'large'} />}
      {list.map((i) => {
        return (
          <View style={{ padding: 8 }}>
            <Text>{i.name}</Text>
          </View>
        );
      })}
    </View>
  );
}

const inputStyle = {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
};