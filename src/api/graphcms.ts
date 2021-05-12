import Product from "../models/Product";
import axios from "axios";
import axiosRetry from 'axios-retry';

const products = [
  {
    releaseDate: "2014-01-01",
    releaseStatus: "In Development",
    title: "Fermion Finance",
    productImage: {
      url: '/images/coverImage.svg'
    },
    content: null,
    slug: 'fermion-finance',
    tags: [],
    description: "A Platform to monitor various cryptocurrencies. Alerts can be setup accordingly.  Also, data analytic tools can be accessed to track different wallets, analyize block chain transactions etc."
  },
  {
    releaseDate: "2014-01-01",
    releaseStatus: "In Planning",
    title: "Fund.me Protocol",
    productImage: {
      url: '/images/coverImage.svg'
    },
    content: null,
    slug: 'fermion-finance',
    tags: [],
    description: "Smart contract to support funding operations in a decentralized methods. Further details will be published close to release dates."
  },
  {
    releaseDate: "2014-01-01",
    releaseStatus: "In Development",
    title: "Fermion FInance",
    productImage: {
      url: '/images/coverImage.svg'
    },
    content: null,
    tags: [],
    slug: 'fermion-finance',
    description: "A Platform to monitor various cryptocurrencies. Alerts can be setup accordingly.  Also, data analytic tools can be accessed to track different wallets, analyize block chain transactions etc."
  }
];

const getAllProducts = () : Promise<Product[]> =>  {
  return Promise.resolve(products);
};

const getAllProductsFromCMS = async () : Promise<Product[]> => {
  const query = JSON.stringify({
    query: `{
      products {
        releaseDate
        releaseStatus
        slug
        productImage {
          url
        }
        title
        description
        content {
          html
        }
        tags
      }
    }`
  });

  const response = await axios({
    method: 'post',
    url: 'https://api-ca-central-1.graphcms.com/v2/ckoknv7ru6teu01xrajt2he3g/master',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MjA3NzkxOTgsImF1ZCI6WyJodHRwczovL2FwaS1jYS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2Nrb2tudjdydTZ0ZXUwMXhyYWp0MmhlM2cvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZmQ3NzRlN2EtNDc1Mi00NWI1LTllOWUtNjJhZWY0NWE4ZjJiIiwianRpIjoiY2tva3EzNWNqODdsMDAxeHY0MWoxNWdlZyJ9.ALRnZAqUZxAbnnPBF2ynZJhu6J9DJgFkpfx8uiNqb_5iyzNGZgulddOJ5tb-1spBqFq18y21pGlUGPPb52TNX4EaGPIdzLvZlTnxz6DsPMzMxYP-aXholHaeao3D0Z1JHL-Kl1VaYgN9ibV4ExdoRMZsoOZhMVmR95fh6UcZa5IMpVst-gm4mSdcKy7Y8dNQ7xjR9-ES1VeCMfIHgoP8FLiKQu9hUeRDYHoPWDp9QFBRQgiy_qlqeidMvkLlosbd_bVIx1-9IQbsgQQD2iJOmOcR1DjR32ogg_OOLfHDA_024sndoRm_dRnCYq2O1Ewr-4ZD0KQXCatZmRhh_vp7BOWh7f5Ja-PoZhdln7Dd0rzjVLz3SsM7J73VoMThaKx6rbfMbo1UZMIPOMx8n-FYsSVf3YmAqdSoFw3-Y3lQFQRuy7htNnfO5Z33koTHF8CuJ2uhQjkx81sscbd0XFyjbshKVePgmw82DxxDRbw3_WpTc_8-ZKKP789mQ6RWbA_fRdMOXfvcS6ul5k9zOOIO-WFLa8zv5B116eAyZehij3q67D3G9WlK9uR__Q81vxaqTJBVbBAhmcMp0EGsTabmqm3gOoidtLC7M3fCmlpCJomB7gXEdhz0op1z_5OO-s9IM1PAskhBkIbjO7inOFDtCXxtSBuXDFtN-frwbceQ0SU'
    },
    data: query
  });

  console.log(response.data.data.products);
  return Promise.resolve(response.data.data.products);
};

const getProductWithSlug = async (slug: string) : Promise<Product> => {
  console.log(slug);
  const query = JSON.stringify({
    query: `{
      products (where:{
        slug: "${slug}"
        }) {
        releaseDate
        releaseStatus
        slug
        productImage {
          url
        }
        title
        description
        content {
          html
        }
        tags
      }
    }`
  });

  const response = await axios({
    method: 'post',
    url: 'https://api-ca-central-1.graphcms.com/v2/ckoknv7ru6teu01xrajt2he3g/master',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MjA3NzkxOTgsImF1ZCI6WyJodHRwczovL2FwaS1jYS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2Nrb2tudjdydTZ0ZXUwMXhyYWp0MmhlM2cvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZmQ3NzRlN2EtNDc1Mi00NWI1LTllOWUtNjJhZWY0NWE4ZjJiIiwianRpIjoiY2tva3EzNWNqODdsMDAxeHY0MWoxNWdlZyJ9.ALRnZAqUZxAbnnPBF2ynZJhu6J9DJgFkpfx8uiNqb_5iyzNGZgulddOJ5tb-1spBqFq18y21pGlUGPPb52TNX4EaGPIdzLvZlTnxz6DsPMzMxYP-aXholHaeao3D0Z1JHL-Kl1VaYgN9ibV4ExdoRMZsoOZhMVmR95fh6UcZa5IMpVst-gm4mSdcKy7Y8dNQ7xjR9-ES1VeCMfIHgoP8FLiKQu9hUeRDYHoPWDp9QFBRQgiy_qlqeidMvkLlosbd_bVIx1-9IQbsgQQD2iJOmOcR1DjR32ogg_OOLfHDA_024sndoRm_dRnCYq2O1Ewr-4ZD0KQXCatZmRhh_vp7BOWh7f5Ja-PoZhdln7Dd0rzjVLz3SsM7J73VoMThaKx6rbfMbo1UZMIPOMx8n-FYsSVf3YmAqdSoFw3-Y3lQFQRuy7htNnfO5Z33koTHF8CuJ2uhQjkx81sscbd0XFyjbshKVePgmw82DxxDRbw3_WpTc_8-ZKKP789mQ6RWbA_fRdMOXfvcS6ul5k9zOOIO-WFLa8zv5B116eAyZehij3q67D3G9WlK9uR__Q81vxaqTJBVbBAhmcMp0EGsTabmqm3gOoidtLC7M3fCmlpCJomB7gXEdhz0op1z_5OO-s9IM1PAskhBkIbjO7inOFDtCXxtSBuXDFtN-frwbceQ0SU'
    },
    data: query
  });

  return Promise.resolve(response.data.data.products.length > 0  ? response.data.data.products[0] : null);
};

export {
  getAllProducts,
  getAllProductsFromCMS,
  getProductWithSlug
}