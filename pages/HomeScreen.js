// src/screens/HomeScreen.js
import React from 'react';
import { SafeAreaView, SectionList } from 'react-native';
import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons'; 

import GameCard from '../components/GameCard';
import useDealsSearch from '../hook/useDealsSearch';

export default function HomeScreen() {
  const { deals, loading } = useDealsSearch();

  const dealsBySavings = [...deals].sort((a, b) => {
    const savingsA = parseFloat(a.savings);
    const savingsB = parseFloat(b.savings);

    if (isNaN(savingsA) && isNaN(savingsB)) return 0;
    if (isNaN(savingsA)) return 1;
    if (isNaN(savingsB)) return -1;

    return savingsB - savingsA;
  });

  const dealsByMetacritic = [...deals].sort((a, b) => {
    const scoreA = parseFloat(a.metacriticScore);
    const scoreB = parseFloat(b.metacriticScore);

    if (isNaN(scoreA) && isNaN(scoreB)) return 0;
    if (isNaN(scoreA)) return 1;
    if (isNaN(scoreB)) return -1;

    return scoreB - scoreA;
  });

  const sections = [
    { title: 'Jogos da Semana - Maiores Economias', data: dealsBySavings.slice(0, 2) },
    { title: 'Popular entre a galera - Maiores Notas', data: dealsByMetacritic.slice(0, 3) },
  ];

  return (
    <ThemedSafeAreaView>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.dealID.toString()}
        ListHeaderComponent={() => (
          <>
            <NavBar>
        
              <MenuIcon name="menu" size={24} />
              <Logo>Logo</Logo>
              <SearchIcon name="search" size={22} />
            </NavBar>

            <H1>Bem‑Vindo!</H1>
            <H2>Não sei o nome ainda</H2>
          </>
        )}
        renderItem={({ item }) => {
          const numericMetacritic = parseFloat(item.metacriticScore);
          const descriptionText =
            !isNaN(numericMetacritic)
              ? `Metacritic: ${numericMetacritic}`
              : 'N/A';

          return (
            <GameCard
              title={item.title}
              metacritic={descriptionText}
              coverUri={item.thumb}
              oldPrice={parseFloat(item.normalPrice)}
              price={parseFloat(item.salePrice)}
            />
          );
        }}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
        ListEmptyComponent={
          loading ? <Loading>Carregando…</Loading> : <Empty>Nenhuma oferta</Empty>
        }
        stickySectionHeadersEnabled={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
      />
    </ThemedSafeAreaView>
  );
}

/* ---------- styled components ---------- */

const ThemedSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  padding-vertical: 30px;
`;

const NavBar = styled.View`
  padding: 12px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;


const MenuIcon = styled(Ionicons)`
  color: ${(props) => props.theme.colors.textLight}; /* Acessa a cor do tema via props.theme */
`;

const SearchIcon = styled(Ionicons)`
  color: ${(props) => props.theme.colors.textLight}; /* Acessa a cor do tema via props.theme */
`;

const Logo = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textLight}; 
`;

const H1 = styled.Text`
  font-size: 28px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.textLight}; 
`;

const H2 = styled(H1)`
  margin-bottom: 24px;
  color: ${(props) => props.theme.colors.softPink}; 
`;

const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.textLight}; 
`;

const Loading = styled.Text`
  text-align: center;
  margin-top: 32px;
  color: ${(props) => props.theme.colors.textLight};
`;

const Empty = styled(Loading)`
  color: ${(props) => props.theme.colors.mutedLavender};
`;