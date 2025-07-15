import { useState, useEffect, useCallback } from 'react';
import { getDeals } from '../api/cheapsharkApi';

/**
 * Hook personalizado para buscar promoções de jogos na API.
 * Recebe os parâmetros de busca diretamente.
 */
const useDealsSearch = ({ title = '', minPrice = undefined, maxPrice = undefined } = {}) => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Função que faz a busca das promoções na API.
   * Usa useCallback para não ser recriada toda hora.
   */
  const fetchDeals = useCallback(async () => {
    setLoading(true);
    setError(null);

    // Os parâmetros já vêm tratados do componente que usa o hook
    const params = {
      title: title,
      minPrice: minPrice,
      maxPrice: maxPrice,
    };

    try {
      const data = await getDeals(params);
      setDeals(data);
    } catch (err) {
      setError('Não foi possível carregar as ofertas. Verifique sua conexão e tente novamente.');
      console.error("Erro no useDealsSearch:", err);
    } finally {
      setLoading(false);
    }
  }, [title, minPrice, maxPrice]); 

  /**
   * Executa a busca automaticamente quando os parâmetros de busca mudam.
   */
  useEffect(() => {
    fetchDeals();
  }, [fetchDeals]);

  return {
    deals,
    loading,
    error,
    
  };
};

export default useDealsSearch;