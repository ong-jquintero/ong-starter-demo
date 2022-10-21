import * as React from "react"
import { graphql } from "gatsby"
import { Section, Container, Heading, /* Text */ } from "./ui"

export default function Sample(props) {
  return (
    <Section>
      <Container>
        <Heading as="h1">{props.title}</Heading>
        {/* <Text as="p">{props.contentBody}</Text> */}
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment SampleContent on Sample {
    id
    title
    # contentBody: content
  }
`
