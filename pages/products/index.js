import Meta from '../../components/Meta'
import Header from '../../components/Header'
import Layout, {siteTitle} from '../../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import ProductList from '../api/ProductList.js'
import ProductCategory from '../api/ProductCategory.js'

const imageDir = "/images/";

export default function Home({ allPostsData }) {
  // console.log(category);
  return (
    <Layout home>
      <Meta />
      <Header />
      <section className="category-page px-4 has-background-white">
        <div className="has-border p-4 px-6 m-1 mb-4">
          <div className="columns px-0 py-4 is-flex-wrap-wrap m-0 with-custom-column-gap">
          {ProductCategory.map((cat) => (
            <div key={cat.id} className="column is-6 mb-4 p-0">
              <a href={"/products/" + cat.name.replace(/ /g, '-')} className="has-custom-cursor category-link">
                <div className="columns is-flex-direction-column is-vcentered m-0">
                  <div className="column has-text-centered has-border m-4 bottom-margin-only-mobile" style={{width: "100%"}}>
                    <img className="" src={imageDir + cat.image} alt="Diesel Water Pump" width="400" height="auto" />
                  </div>
                  <div className="column is-flex is-justify-content-space-between px-0 pt-0" style={{width: "100%"}}>
                    <h1 className="is-size-4 has-text-weight-bold px-0"><span className="has-text-weight-light"></span>{cat.name}</h1>
                    <h2 className="is-size-4">&gt;</h2>
                  </div>
                </div>
              </a>
            </div>
          ))}


          </div>
        </div>
      </section>
    </Layout>
  )
}
