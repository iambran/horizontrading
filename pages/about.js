import Meta from '../components/Meta'
import Header from '../components/Header'
import Layout, {siteTitle} from '../components/Layout'
import Link from 'next/link'

export default function Home({ allPostsData }) {
  // console.log(category);
  return (
    <Layout home>
      <Meta />
      <section className="px-4 specs has-background-white">
        <div className="columns is-flex-direction-column p-4">
          <div className="has-border px-6">
            <h2 className="is-size-4 is-uppercase has-text-weight-bold my-6 py-3" style={{ borderBottom: "1px solid var(--color-border)"}}>About</h2>
            <div className="columns is-flex-wrap-wrap is-flex-direction-column pb-6 is-align-items-flex-start">
              <div className="column">
                <p>Established in mid. 2021, HORIZON TRADING is aiming to source quality industrial products for our clients internationally, while bringing personal and attentive customer services.</p>
                <h1 className="has-text-left has-text-weight-medium is-size-5-desktop mb-4"><strong>SERVICES:</strong></h1>
                <ul>
                  <li><strong>Qualified Suppliers Research</strong>: The benifit of being a sales engineer for quite some years is that I am capable of find the suitable and qualified suppliers for you to choose from, saving your time and energy.</li>
                </ul>
                <ul>
                  <li><strong>Factory Audit</strong>: Should you like to have someone audit Chinese factories on your behalf, I can travel to cities and help you audit the factories.</li>
                </ul>
                <ul>
                  <li><strong>Product Photography</strong>: If you are thinking about developing your own brand, you will need to make a decent website and product brochure in order to market your imported products locally, which all requires professional product photos, and this is where I come in helpful as I had experiences with taking professional product photos for my clients, and I can definitely help you with that.</li>
                </ul>
              </div>
              <div className="column">
                <h1 className="has-text-left has-text-weight-medium is-size-5-desktop mb-4">Get In Touch</h1>
                <div className="is-flex is-flex-desktop mb-2">
                  <span className="material-icons is-size-4">email</span>
                  <h2 className="is-size-6" style={{userSelect: "all"}}>sales@horizontrading.cn</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
