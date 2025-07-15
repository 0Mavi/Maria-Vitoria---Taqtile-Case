import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, Text } from 'react-native';


export default function NavBar({ onSearch }) {
  return (
    <Bar>
      <LogoContainer> 
        <Image
          source={require('../assets/Logo.png')}
          style={{ 
            width: 60, 
            height: 60, 
            resizeMode: 'contain' }} 
        />

         <Text
         style={{
           fontSize: 16,
           fontWeight: '700',
           color: '#10091D',
         }}
         >Purrfect Deals</Text>
      </LogoContainer>
         
      <Touchable onPress={onSearch}>
        <Ionicons name="search" size={22} color="#10091D" />
      </Touchable>
    </Bar>
  );
}

const Bar = styled.View`
  padding-top: 10px;
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  

`;

const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;


const Touchable = styled.TouchableOpacity``;
