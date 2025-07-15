import React, { useState, useEffect, useMemo } from 'react';
import { SafeAreaView, BackHandler } from 'react-native';
import styled from 'styled-components/native';

import useDealsSearch from '../hook/useDealsSearch';
import HomeContent from './HomeContent';
import SearchContent from './SearchContent';

export default function HomeScreen() {
  const [mode, setMode] = useState('home'); 
  const [query, setQuery] = useState('');
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');

 
  const handleClearFilters = React.useCallback(() => {
    setQuery('');
    setMin('');
    setMax('');
  }, []); 

  const { deals: homeDeals, loading: homeLoading } = useDealsSearch({});
  const { deals: searchDeals, loading: searchLoading } = useDealsSearch({
    title: query,
    minPrice: Number(min) || undefined,
    maxPrice: max ? Number(max) : undefined,
  });

  useEffect(() => {
    const backAction = () => {
      if (mode === 'search') {
   
        setMode('home');
        return true;
      }
      return false;
    };

    const backHandlerSubscription = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandlerSubscription.remove();
  }, [mode, handleClearFilters]);

  const sections = useMemo(() => {
    const bySave = [...homeDeals].sort((a, b) => b.savings - a.savings).slice(0, 2);
    const byMeta = [...homeDeals].sort((a, b) => b.metacriticScore - a.metacriticScore).slice(0, 3);
    return [
      { title: 'Economias da Semana', data: bySave },
      { title: 'Melhores Notas', data: byMeta },
    ];
  }, [homeDeals]);

  return (
    <Screen>
      {mode === 'home' ? (
        <HomeContent sections={sections} loading={homeLoading} onSearch={() => setMode('search')} />
      ) : (
        <SearchContent
          query={query} onQuery={setQuery}
          min={min} onMin={setMin}
          max={max} onMax={setMax}
          deals={searchDeals}
          loading={searchLoading}
          onClose={() => setMode('home')}
          onClearFilters={handleClearFilters} 
        />
      )}
    </Screen>
  );
}

const Screen = styled(SafeAreaView)`
  flex: 1;
  background: ${(props) => props.theme.colors.white};
  padding-top: 0px;
 
`;