import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'


export default function Navigationitem({data}) {
    data = useStaticQuery(graphql`
    {
        allContentfulNavigationItem {
          nodes {
            slug
            label
            target
          }
        }
      }
    `)
    console.log(data.allContentfulNavigationItem.nodes[0].label)
  return (
    <div>
      
    </div>
  )
}
