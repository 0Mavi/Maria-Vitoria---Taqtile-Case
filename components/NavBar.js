import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, Text } from 'react-native';


import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isTablet = width > 600;


export default function NavBar({ onSearch }) {
  return (
    <Bar>
      <LogoContainer> 
        <Image
          source={require('../assets/Logo.png')}
          style={{ 
            width: isTablet ? 80 : 60, 
            height: isTablet ? 80 : 60, 
            resizeMode: 'contain' }} 
        />

         <Text
         style={{
           fontSize: isTablet ? 24 : 16,
           fontWeight: '700',
           color: '#10091D',
         }}
         >Purrfect Deals</Text>
      </LogoContainer>
         
      <Touchable onPress={onSearch}>
        <Ionicons name="search" size={isTablet ? 26 : 22} color="#10091D" />
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
