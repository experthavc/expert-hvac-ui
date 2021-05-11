type Product = {
  releaseDate: Date,
  status: string,
  title: string,
  description: string,
  slug: string,
  coverImage: {
    url: string
  }
}

export default Product;