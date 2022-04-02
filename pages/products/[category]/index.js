import Meta from '../../../components/Meta'
import Header from '../../../components/Header'
import Layout, {siteTitle} from '../../../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import ProductList from '../../api/ProductList.js'
import ProductCategory from '../../api/ProductCategory.js'

const imageDir = "/images/";

export async function getServerSideProps({ req }) {
  const slug = req.url.substring(req.url.lastIndexOf('/') + 1);
  const category = slug.replace(/-/g, ' ');
  const categoryID = ProductCategory.find(cat => cat['name'] === category).id;
  const products = ProductList.filter(product => product['category-id'] === categoryID);
  return {
    props: {
      slug: slug,
      category: category,
      categoryID: categoryID,
      products: products,
    },
  }
}

export default function Home({ slug, category, categoryID, products }) {
  console.log(slug);
  console.log(category);
  console.log(categoryID);
  console.log(products);
  return (
    <Layout home>
      <Meta />
      <section className="category-page px-4 has-background-white">
        <div className="has-border p-4 px-6 m-1 mb-4">
          <nav className="breadcrumb is-small mb-0 mt-4" aria-label="breadcrumbs">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href={"/products/" + slug}>{category}</a></li>
            </ul>
          </nav>
          <div className="columns px-0 py-4 is-flex-wrap-wrap m-0 with-custom-column-gap">
          {products.map(product => {
            return (
              <div className="column is-6 mb-4 p-0" key={product.product}>
                <a href={"/products/" + slug + '/' + product.product} className="has-custom-cursor category-link">
                  <div className="columns is-flex-direction-column is-vcentered m-0">
                    <div className="column has-text-centered has-border m-4 bottom-margin-only-mobile" style={{width: "100%"}}>
                      <img src={imageDir + product["product-image"]} alt="Diesel Water Pump" width="400" height="auto" />
                    </div>
                    <div className="column is-flex is-justify-content-space-between px-0 pt-0" style={{width: "100%"}}>
                      <h1 className="is-size-4 has-text-weight-bold px-0"><span className="has-text-weight-light">{category} - </span>{product.product.toUpperCase()}</h1>
                      <h2 className="is-size-4">&gt;</h2>
                    </div>
                  </div>
                </a>
              </div>
            )
          })}
          </div>
        </div>
      </section>
    </Layout>
  )
}
