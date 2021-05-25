import Web3 from "web3";
const ERC721ABI  = require("../abi/trun.json");


const getCurrentBalance = (address : string) : Promise<number> => {
  const promise = new Promise<number>((resolve, reject) => {
    const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545");
    const trunToken = new web3.eth.Contract(ERC721ABI, "0x03937dbc90c0b6a3089fab538cb855f0cb05a22e");
    trunToken.methods.balanceOf(address).call(function (err, res) {
      if (err) {
        console.log("An error occured", err)
        reject(err);
      }
      console.log("The balance is: ", res);
      resolve(res);
    });
  });

  return promise;
};

export {
  getCurrentBalance
}