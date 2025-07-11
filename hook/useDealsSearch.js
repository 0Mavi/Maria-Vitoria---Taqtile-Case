import { useState, useEffect, useCallback } from 'react';
import { getDeals } from '../api/cheapsharkApi';

/**
 * Hook personalizado para buscar promoções de jogos na API.
 */
const useDealsSearch = () => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Estados para os parâmetros de busca que podem ser alterados pelo componente
  const [searchText, setSearchText] = useState('');
  const [minPriceInput, setMinPriceInput] = useState(''); 
  const [maxPriceInput, setMaxPriceInput] = useState(''); 

   /**
   * Função que faz a busca das promoções na API.
   * Usa useCallback para não ser recriada toda hora.
   */
  const fetchDeals = useCallback(async () => {
    setLoading(true);
    setError(null);

    // Converte os inputs de preço para número. Se vazio ou não-numérico, retorna undefined/0.
    const parsedMinPrice = parseFloat(minPriceInput);
    const parsedMaxPrice = parseFloat(maxPriceInput);

    // Prepara os parâmetros para a API, tratando valores não numéricos/vazios
    const params = {
      title: searchText,
      minPrice: isNaN(parsedMinPrice) ? 0 : parsedMinPrice, 
      maxPrice: isNaN(parsedMaxPrice) ? undefined : parsedMaxPrice, 
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
  }, [searchText, minPriceInput, maxPriceInput]); 

  /**
   * Executa a busca automaticamente quando o hook é usado
   * ou quando algum filtro (searchText, minPriceInput, maxPriceInput) muda.
   */
  useEffect(() => {
    fetchDeals();
  }, [fetchDeals]); 

  return {
    deals,
    loading,
    error,
    searchText,
    setSearchText,
    minPriceInput,
    setMinPriceInput,
    maxPriceInput,
    setMaxPriceInput,
    fetchDeals, 
  };
};

export default useDealsSearch;