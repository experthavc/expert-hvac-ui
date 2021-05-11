import Product from "../models/Product";

const getAllProducts = () : Promise<Product[]> =>  {
  return Promise.resolve([
    {
      releaseDate: new Date(),
      status: "In Development",
      title: "Fermion Finance",
      coverImage: {
        url: '/images/coverImage.svg'
      },
      slug: 'fermion-finance',
      description: "A Platform to monitor various cryptocurrencies. Alerts can be setup accordingly.  Also, data analytic tools can be accessed to track different wallets, analyize block chain transactions etc."
    },
    {
      releaseDate: new Date(),
      status: "In Planning",
      title: "Fund.me Protocol",
      coverImage: {
        url: '/images/coverImage.svg'
      },
      slug: 'fermion-finance',
      description: "Smart contract to support funding operations in a decentralized methods. Further details will be published close to release dates."
    },
    {
      releaseDate: new Date(),
      status: "In Development",
      title: "Fermion FInance",
      coverImage: {
        url: '/images/coverImage.svg'
      },
      slug: 'fermion-finance',
      description: "A Platform to monitor various cryptocurrencies. Alerts can be setup accordingly.  Also, data analytic tools can be accessed to track different wallets, analyize block chain transactions etc."
    }
  ]);
};

export {
  getAllProducts
}