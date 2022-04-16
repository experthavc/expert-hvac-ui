import RichText from "./RichText";

type Product = {
  title: string,
  description: string,
  slug: string,
  image: {
    url: string
  },
  content: RichText
}

export default Product;