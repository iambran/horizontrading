import React from 'react'
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import Image from 'next/image'
import Link from 'next/link'



export default function Layout ({ children, home }) {
    return (
        <div className="wrap">
            <Meta />
            <Header />
            <section id="layout-content" className="pt-4" style={{minHeight: "100vh"}}>
              {children}
            </section>
            <Footer />
        </div>
    )
}
