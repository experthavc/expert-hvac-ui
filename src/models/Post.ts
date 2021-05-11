import Asset from "./Asset";
import Author from "./Author";
import Category from "./Category";
import RichText from "./RichText";
import SEO from "./SEO";

type Post = {
  title: string;
  slug: string;
  date: Date;
  coverImage: Asset;
  content: RichText;
  tags: string[];
  author: Author;
  seo: SEO;
  category: Category;
}

export default Post;