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
            <h2 className="is-size-4 is-uppercase has-text-weight-bold my-6 py-3" style={{borderBottom: "1px solid var(--color-border)"}}>Contact us</h2>
            <div className="columns is-flex-wrap-wrap pb-6 is-align-items-flex-start">
              <div className="column"><div id="scf-contactForm">
              <div id="scf-message-contactForm">
              </div>
              <div id="scf-form-contactForm">
              <form method="POST" action="/contact" className="contact-form" id="scf-form-id-contactForm" noValidate="novalidate">
              <input name="_handler" type="hidden" value="contactForm::onFormSend" />
              <input name="_session_key" type="hidden" value="7q9proYB6e5r5uiReVprmXM5heBqQEqmFjQch5lB" />
              <input name="_token" type="hidden" value="9IC5AlAf6qyh3If57czXxKcyqGWUEV88Dno4vJe5" />
              <div className="field"><label className="control-label label " htmlFor="contactForm-name" style={{display: "none"}}>Name *</label>
              <input id="contactForm-name" className="control" name="name" placeholder="Name *" type="text" />
              </div>
              <div className="field"><label className="control-label label " htmlFor="contactForm-email" style={{display: "none"}}>Email *</label>
              <input id="contactForm-email" className="control" name="email" placeholder="Email *" type="email" />
              </div>
              <div className="field"><label className="control-label label " htmlFor="contactForm-country" style={{display: "none"}}>Your Country *</label>
              <input id="contactForm-country" className="control" name="country" placeholder="Your Country *" type="text" />
              </div>
              <div className="field"><label className="control-label label " htmlFor="contactForm-message" style={{display: "none"}}>Please leave a message here...</label><textarea id="contactForm-message" className="control" name="message" placeholder="Please leave a message here..." rows="5"></textarea></div>
              <div id="submit-wrapper-contactForm" className="control"><button type="submit" data-attach-loading="" className="oc-loader button">Send</button></div>
              </form>
              </div>
              </div></div>
              <div className="column">
              <h1 className="has-text-left has-text-weight-medium is-size-5-desktop mb-4">HORIZON TRADING</h1>
              <div className="is-flex is-flex-desktop mb-2">
              <span className="material-icons">maps_home_work</span>
              <h2 className="is-size-6">
              No. 35 Tianshui Village, Gaishan Town, Cangshan District, Fuzhou 350026, China
              </h2>
              </div>
              <div className="is-flex is-flex-desktop mb-2">
              <span className="material-icons is-size-4">email</span>
              <h2 className="is-size-6" style={{userSelect: "all"}}>sales@horizontrading.cn</h2>
              <span className="is-size-7" style={{marginLeft: "10px"}}>⤺ click on the email to select</span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
