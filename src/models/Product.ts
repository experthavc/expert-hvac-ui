import RichText from "./RichText";

type Product = {
  releaseDate: string,
  releaseStatus: string,
  title: string,
  description: string,
  slug: string,
  productImage: {
    url: string
  },
  content: RichText,
  tags: string[]
}

export default Product;