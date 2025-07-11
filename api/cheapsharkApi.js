import axios from "axios";

const api = axios.create({
    apiURL: "https://www.cheapshark.com/api/1.0",
}
);

export async function getDeals({ title = '', minPrice = 0, maxPrice }) {
    const params = {
        storeID: 1,
        lowerPrice: minPrice,
        pageSize: 10,
        sortyBy: 'Deal Rating',
    }
    if (maxPrice !== undefined && maxPrice !== null && !isNaN(maxPrice)) {
        params.upperPrice = maxPrice;
    }

    try {
        const { data } = await api.get('/deals', { params });
        return data; 
    } catch (error) {
        console.error("Erro ao buscar ofertas na API CheapShark:", error);
        throw error;
  }
}