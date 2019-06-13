import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Piano from "../components/Piano"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Piano />
  </Layout>
)

export default IndexPage
