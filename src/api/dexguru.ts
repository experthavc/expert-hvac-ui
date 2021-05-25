import axios from "axios";
import Token from "../models/Token";
import { getCurrentBalance } from "./binance";

const getTokenPrice = async () : Promise<Token> => {
  const burnWallet = "0xf3357d5d6d5e7f3ce34f6a84ab238a51faaa2dac";

  return new Promise<Token> (async (resolve, reject) => {
    try {
      const tokenResponse = await axios.get('https://api.dex.guru/v1/tokens/0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3-bsc');
      const burnWalletBalance = await getCurrentBalance(burnWallet);

      const { priceUSD, id, name, symbol } = tokenResponse.data;
      const totalSupply : number = 500e9;
  
      const token : Token = {
        id,
        name,
        symbol,
        priceUSD,
        previousUSD: null,
        previousCap: null,
        holders: Math.trunc(burnWalletBalance / 1e9),
        supply: Math.trunc(totalSupply - (burnWalletBalance / 1e9)),  // the token has 9 decimal places 
        marketCap: Math.trunc(priceUSD * totalSupply)
      };
  
      console.log('response received from dex guru at ' + Date.now(), priceUSD);
      resolve(token);
    } catch (error) {
      reject(error);
    }
  });
};

export {
  getTokenPrice
}