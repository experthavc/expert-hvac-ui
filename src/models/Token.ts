type Token = {
  id: string,
  symbol: string,
  name: string,
  priceUSD: number,
  previousUSD: number,
  marketCap: number,
  previousCap: number,
  supply: number,
  holders: number
};

export default Token;