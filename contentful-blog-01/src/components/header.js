import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import * as styles from '../styles/header.module.css'

export default function Header({data}) {
    data = useStaticQuery(graphql `
    {
      allContentfulPage {
        nodes {
          slug
        }
      }
        allContentfulHeader {
          nodes {
            navigationMenu {
              slug
              label
              target
            }
            headerImage {
              file {
                url
              }
              description
            }
          }
        }
      }
    `)
const nodesresult = data.allContentfulHeader.nodes[0];
let navigationresultslabel = []
let navigationresultsslug = []
let navigationresultstarget=[]

for(let i=0; i<nodesresult.navigationMenu.length; i++)
{ 
    navigationresultslabel[i] = nodesresult.navigationMenu[i].label
    navigationresultsslug[i] = nodesresult.navigationMenu[i].slug

    if(nodesresult.navigationMenu[i].target === true){
      navigationresultstarget[i] = nodesresult.navigationMenu[i].target
      navigationresultstarget[i] = "_Self"
    }
    else if(nodesresult.navigationMenu[i].target === false){
        navigationresultstarget[i] = nodesresult.navigationMenu[i].target
        navigationresultstarget[i] = "_Blank"
    }
}

let pageslugresult = data.allContentfulPage.nodes[0].slug

  return (
    <div className={styles.linksimage}>
      <div className={styles.images}><a href={pageslugresult}><img src={nodesresult.headerImage.file.url}  alt={nodesresult.headerImage.description}/></a></div>
      <div className={styles.links}>
      <a href={navigationresultsslug[0]} target={navigationresultstarget[0]}>{navigationresultslabel[0]}</a>
      <a href={navigationresultsslug[1]} target={navigationresultstarget[1]}>{navigationresultslabel[1]}</a>
      <a href={navigationresultsslug[2]} target={navigationresultstarget[2]}>{navigationresultslabel[2]}</a>
      <a href={navigationresultsslug[3]} target={navigationresultstarget[3]}>{navigationresultslabel[3]}</a>
      </div>
    </div>
  )
}

