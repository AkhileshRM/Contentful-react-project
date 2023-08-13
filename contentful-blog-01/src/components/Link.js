import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

export default function Link(props, {data}) {
    data = useStaticQuery(graphql `
    {
      allContentfulLink {
        nodes {
          label
          url
          targetLink
        }
      }
    }
    `)
  return (
    <div>
    <a style={props.style} href={props.urls}>{props.labels}</a>
    </div>
   
  )
}

