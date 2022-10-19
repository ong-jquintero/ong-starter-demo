import * as React from "react"
import { graphql } from "gatsby"
import { Section, Container, Heading, Text } from "./ui"

export default function Banner(props) {
  return (
    <Section>
      <Container>
        <Heading>{props.title}</Heading>
        <Text>{props.content}</Text>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment SampleContent on Sample {
    id
    title
    content
  }
`
