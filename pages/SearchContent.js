import React from 'react';
import { FlatList, } from 'react-native'; 
import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import GameCard from '../components/GameCard';
import PriceFilterRow from '../components/PriceFilterRow';


export default function SearchContent({
  query, onQuery,
  min, onMin,
  max, onMax,
  deals, loading,
  onClose,
  onClearFilters, 
}) {
  return (
    <>
      <Header>
        <BackBtn onPress={onClose}>
          <Ionicons name="chevron-back" size={  isTablet ? 30 : 26} color="#10091D" />
        </BackBtn>
        <SearchInput
          placeholder="Buscar jogo..."
          value={query}
          onChangeText={onQuery}
          placeholderTextColor="#ccc"
        />
       
        {(query || min || max) ? (
          <ClearButton onPress={onClearFilters}>
            <Ionicons name="trash-outline" size={  isTablet ? 26 : 24} color="#10091D" />
          </ClearButton>
        ) : null}
      </Header>
      
      <PriceFilterContainer>
            <PriceFilterRow min={min} onMin={onMin} max={max} onMax={onMax} />
      </PriceFilterContainer>

      <FlatList
        data={deals}
        keyExtractor={(item) => item.dealID.toString()}
        renderItem={({ item }) => (
          <GameCard
            title={item.title}
            metacritic={`Metacritic: ${item.metacriticScore || 'N/A'}`}
            coverUri={item.thumb}
            oldPrice={parseFloat(item.normalPrice)}
            price={parseFloat(item.salePrice)}
          />
        )}
        ListEmptyComponent={
          loading ? <Center>Carregando…</Center> : <Center>Nada encontrado</Center>
        }
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
      />
    </>
  );
}

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
  margin-top: 40px;
  padding: 2px 15px;
`;

const BackBtn = styled.TouchableOpacity``;


const SearchInput = styled.TextInput`
  flex: 1;
  margin-left: 8px;
  background:  ${(props) => props.theme.colors.purpleLight};
  border-radius: 8px;
  padding: 8px 12px;
  color: #fff;
`;

const ClearButton = styled.TouchableOpacity`
  margin-left: 12px;
  padding: 4px;
`;

const PriceFilterContainer = styled.View`
  margin-bottom: 14px;
`;


const Center = styled.Text`
  text-align: center;
  margin-top: 32px;
`;