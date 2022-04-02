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
  const currentProduct = ProductList.filter(product => product['product'].toLowerCase() === slug.toLowerCase() );
  const currentCategory = currentProduct[0]['category-id'];
  const categoryName = ProductCategory.filter(category => category['id'] === currentCategory)[0]['name'];
  const relatedProducts = ProductList.filter(product => {
    return product['category-id'] === currentCategory && product['product'] !== currentProduct[0]['product'];
  });
  return {
    props: {
      slug: slug,
      currentProduct: currentProduct,
      currentCategory: currentCategory,
      categoryName: categoryName,
      relatedProducts: relatedProducts,
    },
  }
}


export default function Home({ slug, currentProduct, currentCategory, categoryName, relatedProducts }) {
  console.log(slug);
  console.log(currentProduct);
  console.log(currentCategory);
  console.log(categoryName);
  console.log(relatedProducts);
  return (
    <Layout home>
      <Meta />
      <section className="product-intro px-4 has-background-white">
        <div className="columns p-4">
          <div className="column has-border is-three-fifths-desktop py-6 px-6">
            <nav className="breadcrumb is-small" aria-label="breadcrumbs">
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/products">
                    <a>Products</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/products/" + categoryName.replace(/ /g, '-')}>
                    <a>{categoryName}</a>
                  </Link>
                </li>
                <li className="is-active"><a href="#" aria-current="page">{currentProduct[0]['product'].toUpperCase()}</a></li>
              </ul>
            </nav>
            <h1 className="has-text-weight-normal has-text-grey-light is-size-5  mt-4">
              {categoryName} <br />
            </h1>
            <h2 className="has-text-weight-bold is-size-1 is-uppercase">
              {currentProduct[0]['product'].toUpperCase()}
            </h2>
            <div className="py-6 mb-4" style={{borderBottom: "1px solid var(--color-border);"}}>
              <p>{currentProduct[0]['description']}</p>
            </div>
            <div className="buttons mt-5">
            <Link href="/contact">
              <a className="button is-primary is-normal px-4 py-5 is-size-6">
              <span className="material-icons">mail</span>
              <h3 className="mr-2 is-uppercase has-text-weight-medium">Request a quote</h3>
              </a>
            </Link>
            </div>
          </div>
          <div className="column has-border has-no-left-border-desktop is-two-fifths-desktop">
            <div className="gallery">
              <Image src={imageDir + currentProduct[0]['product-image'].toUpperCase()} alt=" " />
            </div>
          </div>
        </div>
      </section>
      <section id="specs" className="has-background-white px-4 mb-6 specs">
        <div className="columns is-flex-direction-column p-4">
          <div className="has-border px-6">
          <h2 className="is-size-4 is-uppercase has-text-weight-bold my-6 py-3" style={{borderBottom: "1px solid var(--color-border);"}}>Specifications</h2>
            <div className="columns is-flex-wrap-wrap pb-6">
            {currentProduct[0]['specs'].map(spec => {
              for (const [key, value] of Object.entries(spec)) {
                return (
                  <div className="column is-4-desktop my-1" key={key}>
                    <div className="spec_name has-text-weight-light is-size-6">{key}</div>
                    <div className="spec_value has-text-weight-semibold is-size-5">{value}</div>
                  </div>
                );
              }
            })}
            </div>
          </div>
        </div>
      </section>
      { relatedProducts.length > 0 &&
        <section id="related_product" className="px-4 mb-6 specs has-background-white">
          <div className="columns is-flex-direction-column p-4">
            <div className="px-6 has-border">
              <h2 className="is-size-4 is-uppercase has-text-weight-bold my-6 py-3">See also...</h2>
              <div className="columns is-flex-wrap-wrap pb-6">
              {relatedProducts.map(product => {
                return (
                  <div className="column is-4-desktop my-1" style={{ position: "relative" }} key={product['product']}>
                    <Image className="product-img has-border" src={imageDir + product['product-image'].toUpperCase()} alt={categoryName} width="400" height="auto" />
                    <div className="spec_value has-text-center has-text-weight-semibold is-size-5">
                      {product['product'].toUpperCase()}
                    </div>
                    <a href={"/products/" + categoryName.replace(/ /g, '-') + '/' + product['product']} className="related_product__link has-custom-cursor"></a>
                  </div>
                )
              })}
              </div>
            </div>
          </div>
        </section>
      }
    </Layout>
  )
}
