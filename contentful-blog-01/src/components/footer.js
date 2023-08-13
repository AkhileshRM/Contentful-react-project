import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import * as styles from '../styles/footer.module.css'
import Link from './Link.js'

export default function Footer({data}) {
    data = useStaticQuery(graphql `
    {
      allContentfulPage {
        nodes {
          slug
        }
      }
        allContentfulFooter {
            nodes {
              note
              footerLogo{
                file{
                  url
                }
              }
              socialMedia {
                url
                target
                icon {
                  file {
                    url
                  }
                  description
                }
              }
              footerContainer {
                label
                links {
                  ... link
                }
              }
            }
          }
          allContentfulLink(limit:10){
            nodes {
              label
              url
              targetLink
            }
          }
         
    }
    fragment link on ContentfulLink{
      label
      url
      targetLink
    }  
    `)

let noderesults =  data.allContentfulFooter.nodes[0]

console.log(noderesults.footerContainer[0].links[0].label)
let socialmediaicons = []
let socialmediaurls = []
let socialmediadescription = []
let socialmediaresultstarget = []
let footercontainers = []

for(let i=0; i<noderesults.socialMedia.length; i++){
 socialmediaicons[i] = noderesults.socialMedia[i].icon.file.url
 socialmediaurls[i] = noderesults.socialMedia[i].url
 socialmediadescription[i] = noderesults.socialMedia[i].description

 if(noderesults.socialMedia[i].target === true){
  socialmediaresultstarget[i] = noderesults.socialMedia[i].target
  socialmediaresultstarget[i] = "_Self"
}
else if(noderesults.socialMedia[i].target === false){
  socialmediaresultstarget[i] = noderesults.socialMedia[i].target
  socialmediaresultstarget[i] = "_Blank"
}
}

for(let i=0; i<noderesults.footerContainer.length;i++)
{
footercontainers[i] = noderesults.footerContainer[i].label
}

//Dynamic styles
const mystyle = {color:"Black", textDecoration:"none", marginLeft:"50px"}

let pageslugresult = data.allContentfulPage.nodes[0].slug
console.log(`${pageslugresult}#img`)
  return (
    <div className={styles.footer}>
      <div className={styles.footertop}>
    <h2 className={styles.note}>{noderesults.note}</h2>
    <div className={styles.socialmedias}>
    <a className={styles.icons} href={socialmediaurls[0]} target={socialmediaresultstarget[0]}><img src= {socialmediaicons[0]} alt={socialmediadescription[0]}/></a> 
    <a className={styles.icons} href={socialmediaurls[1]} target={socialmediaresultstarget[1]}><img src= {socialmediaicons[1]} alt={socialmediadescription[1]}/></a> 
    <a className={styles.icons} href={socialmediaurls[2]} target={socialmediaresultstarget[2]}><img src= {socialmediaicons[2]} alt={socialmediadescription[2]}/></a> 
    <a className={styles.icons} href={socialmediaurls[3]} target={socialmediaresultstarget[3]}><img src= {socialmediaicons[3]} alt={socialmediadescription[3]}/></a> 
    <a className={styles.icons} href={socialmediaurls[4]} target={socialmediaresultstarget[4]}><img src= {socialmediaicons[4]} alt={socialmediadescription[4]}/></a> 
    </div>
    </div>
    <div className={styles.footerbottom}>
    <div>
    <h4 className={styles.label}>{footercontainers[0]}</h4>
    <ul  className = {styles.containers}>
    <li>
    <Link style={mystyle} labels = {data.allContentfulLink.nodes[0].label} urls = {data.allContentfulLink.nodes[0].url}/>
    </li>
    <li>
    <Link style={mystyle} labels = {data.allContentfulLink.nodes[1].label} urls = {data.allContentfulLink.nodes[1].url}/>
    </li>
    <li>
    <Link style={mystyle} labels = {data.allContentfulLink.nodes[2].label} urls = {data.allContentfulLink.nodes[2].url}/>
    </li>
    </ul>
    </div>
    <div>
    <h4 className={styles.label}>{footercontainers[1]}</h4>
    <ul className = {styles.containers}>
    <li>
    <Link style={mystyle} labels = {data.allContentfulLink.nodes[2].label} urls = {data.allContentfulLink.nodes[2].url}/>
    </li>
    <li>
    <Link style={mystyle} labels = {data.allContentfulLink.nodes[1].label} urls = {data.allContentfulLink.nodes[1].url}/>
    </li>
    <li>
    <Link style={mystyle} labels = {data.allContentfulLink.nodes[0].label} urls = {data.allContentfulLink.nodes[0].url}/>
    </li>
    </ul>
    </div>
    <div>
    <h4 className={styles.label}>{footercontainers[2]}</h4>
    <ul  className = {styles.containers}>
    <li>
    <Link style={mystyle} labels = {data.allContentfulLink.nodes[1].label} urls = {data.allContentfulLink.nodes[1].url}/>
    </li>
    <li>
    <Link style={mystyle} labels = {data.allContentfulLink.nodes[2].label} urls = {data.allContentfulLink.nodes[2].url}/>
    </li>
    <li>
    <Link style={mystyle} labels = {data.allContentfulLink.nodes[0].label} urls = {data.allContentfulLink.nodes[0].url}/>
    </li>
    </ul>
    </div> 
    <section id="img">
    <a href={`${pageslugresult}#img`}><img src={noderesults.footerLogo.file.url} alt ={noderesults.footerLogo.description} className={styles.footerlogo}/></a>
    </section>
    
    </div>  
</div>
  )
}



