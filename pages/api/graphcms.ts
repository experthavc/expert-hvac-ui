import axios from "axios";
import Product from "../../src/models/Product";

const products = [
  {
    title: "Fermion Finance",
    image: {
      url: '/images/coverImage.svg'
    },
    content: null,
    slug: 'fermion-finance',
    description: "A Platform to monitor various cryptocurrencies. Alerts can be setup accordingly.  Also, data analytic tools can be accessed to track different wallets, analyize block chain transactions etc."
  },
  {
    title: "Fund.me Protocol",
    image: {
      url: '/images/coverImage.svg'
    },
    content: null,
    slug: 'fermion-finance',
    description: "Smart contract to support funding operations in a decentralized methods. Further details will be published close to release dates."
  },
  {
    title: "Fermion FInance",
    image: {
      url: '/images/coverImage.svg'
    },
    content: null,
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
      services {
        slug
        image {
          url
        }
        title
        description
        content {
          html
        }
      }
    }`
  });

  const response = await axios({
    method: 'post',
    url: 'https://api-ca-central-1.graphcms.com/v2/cl22cepdf4vp101xt4i0d3nj0/master',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTAxNDY4OTYsImF1ZCI6WyJodHRwczovL2FwaS1jYS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NsMjJjZXBkZjR2cDEwMXh0NGkwZDNuajAvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiY2M4YjQ2Y2UtODU4My00NWU5LTk1ZmQtMzRjMjc2OWFhOGY5IiwianRpIjoiY2wyMmV1dHl0NHE4djAxejRmOTYxZTQ0ZCJ9.yyIf1eNA0ti3zoe6Jhph9zSD4uikAnXTrKjmgtzhU2uHcbg6HeumcVgF1s-IXDUN9t7KS5mCcAyZP1DwFnB_9kXZaZfzkkQ5q9HocPtDwqbgtrnwmVytT8ZlV2lozwwH3UWqQtRacu1p7GzhXIPQFJ4Rxg2UUMhHkABX32WOkbSjgF_emm_nNgHgJAYb1i_UxdqJPfhaLK12G7MZTFhNY7-bGRRJTUBeXgXHZEisu3o_VcdtoCC-SdwXui4gd__OrbcwLsaB3fiHq3NFy_ZYcITxAATA8_FS-0GRDSp5F9QuU84McH2EuHKY6fekGsmAlghQl5y3CpjPf8KU27q3A3uoG_7r1-_-qMMknH0OkHdunU5MaI_uDrDCPzYDeOCfqqqf-VGY4K0CU3MvqccJXuD4AYbixd6O1dpn2AKuL9-QxViAcVCarFE0uov3e8ywfjIKAy-Ja4ips-5h6KSyGaMJmgxBLLpuMi_2olYhpEJVeqLzcOru8kSwUBrG4396h_Exif_MpuQuS8sKRVD6TCMCbnnnT5ZVSmz7eD7d8S2dU75-VbEev5hzDfZY_D6ZkeMr-Fx_s00-zbfBMVa3dJzugr2VdrYKvmGSJ1F82P1jCzwG_XGa2kn6vlZZ1kMBGoKd6_tbJ6jtQIgxmh50-x7GAUpmop8Hs2Gu8Kp6C1g'
    },
    data: query
  });

  console.log('services', response.data.data.services);
  return Promise.resolve(response.data.data.services);
};

const getProductWithSlug = async (slug: string) : Promise<Product> => {
  console.log('slug',slug);
  const query = JSON.stringify({
    query: `{
      services (where:{
        slug: "${slug}"
        }) {
        slug
        image {
          url
        }
        title
        description
        content {
          html
        }
      }
    }`
  });

  const response = await axios({
    method: 'post',
    url: 'https://api-ca-central-1.graphcms.com/v2/cl22cepdf4vp101xt4i0d3nj0/master',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTAxNDY4OTYsImF1ZCI6WyJodHRwczovL2FwaS1jYS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NsMjJjZXBkZjR2cDEwMXh0NGkwZDNuajAvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiY2M4YjQ2Y2UtODU4My00NWU5LTk1ZmQtMzRjMjc2OWFhOGY5IiwianRpIjoiY2wyMmV1dHl0NHE4djAxejRmOTYxZTQ0ZCJ9.yyIf1eNA0ti3zoe6Jhph9zSD4uikAnXTrKjmgtzhU2uHcbg6HeumcVgF1s-IXDUN9t7KS5mCcAyZP1DwFnB_9kXZaZfzkkQ5q9HocPtDwqbgtrnwmVytT8ZlV2lozwwH3UWqQtRacu1p7GzhXIPQFJ4Rxg2UUMhHkABX32WOkbSjgF_emm_nNgHgJAYb1i_UxdqJPfhaLK12G7MZTFhNY7-bGRRJTUBeXgXHZEisu3o_VcdtoCC-SdwXui4gd__OrbcwLsaB3fiHq3NFy_ZYcITxAATA8_FS-0GRDSp5F9QuU84McH2EuHKY6fekGsmAlghQl5y3CpjPf8KU27q3A3uoG_7r1-_-qMMknH0OkHdunU5MaI_uDrDCPzYDeOCfqqqf-VGY4K0CU3MvqccJXuD4AYbixd6O1dpn2AKuL9-QxViAcVCarFE0uov3e8ywfjIKAy-Ja4ips-5h6KSyGaMJmgxBLLpuMi_2olYhpEJVeqLzcOru8kSwUBrG4396h_Exif_MpuQuS8sKRVD6TCMCbnnnT5ZVSmz7eD7d8S2dU75-VbEev5hzDfZY_D6ZkeMr-Fx_s00-zbfBMVa3dJzugr2VdrYKvmGSJ1F82P1jCzwG_XGa2kn6vlZZ1kMBGoKd6_tbJ6jtQIgxmh50-x7GAUpmop8Hs2Gu8Kp6C1g'
    },
    data: query
  });

  console.log('service', response.data.data.services);

  return Promise.resolve(response.data.data.services.length > 0  ? response.data.data.services[0] : null);
};

export {
  getAllProducts,
  getAllProductsFromCMS,
  getProductWithSlug
}