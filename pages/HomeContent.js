import React from 'react';
import { SectionList } from 'react-native';
import styled from 'styled-components/native';

import GameCard from '../components/GameCard';
import NavBar from '../components/NavBar';

export default function HomeContent({ sections, loading, onSearch }) {
  return (
    <SectionList
      sections={sections}
      keyExtractor={(item) => item.dealID.toString()}
      ListHeaderComponent={() => (
        <>
          <NavBar onSearch={onSearch} />
          <H1>Seu Próximo Jogo Começa Aqui!</H1>
          <H2>Encontre as melhores ofertas e mergulhe em novas aventuras.</H2>
        </>
      )}
      renderItem={({ item }) => (
        <GameCard
          title={item.title}
          metacritic={`Metacritic: ${item.metacriticScore || 'N/A'}`}
          coverUri={item.thumb}
          oldPrice={parseFloat(item.normalPrice)}
          price={parseFloat(item.salePrice)}
        />
      )}
      renderSectionHeader={({ section }) => (
        <SectionTitle>{section.title}</SectionTitle>
      )}
      ListEmptyComponent={
        loading ? <Center>Carregando…</Center> : <Center>Nenhuma oferta</Center>
      }
      stickySectionHeadersEnabled={false}
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
    />
  );
}

const H1 = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin: 15px 12px 10px 0;
  color: #000;
`;

const H2 = styled.Text`
  font-size: 16px;
  font-weight: 500;
  margin: 0 20px 15px 0 ;
  color: #555;
`;

const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 16px 0 8px;
  color: #000;
`;

const Center = styled.Text`
  text-align: center;
  margin-top: 32px;
`;
