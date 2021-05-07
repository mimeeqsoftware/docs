import React from "react"
import SwaggerUI from "swagger-ui-react"
import Layout from "@docusaurus/core/lib/client/theme-fallback/Layout"
import spec from "../../static/backendAPI.json"

import "swagger-ui-react/swagger-ui.css"
import "./api-reference.css"

const ApiReference = () => (
  <Layout title="Api Reference | Mimeeq Documentation">
    <SwaggerUI spec={spec} />
  </Layout>
)

export default React.memo(ApiReference)
