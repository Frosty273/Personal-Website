import React from "react";
import { Link, graphq1 } from "gatsby";

import Header from "../components/header"
import "../styles.css"

export const pageQuery = graphql` {
    allMarkdownRemark {
      nodes {
        frontmatter {
          author
          date(formatString: "MMMM DD, YYYY")
          title
          path
        }
        excerpt
        id
      }
    }
  }
`

export default function Blog({ data }) {
    return (
    <section>
        {data.allMarkdownRemark.nodes
            .map(post => {
                return (
                    <article key={post.id}>
                        <h1>
                            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                        </h1>
                        <h2>{post.frontmatter.date}</h2>
                        <p>{post.excerpt}</p>
                    </article>
                )
            })
        }
    </section>
    )
}

// export default function Blog() {
//     return (
//         <div>
//             <Header />

//             <div className="container">
//                 <h1>My Projects</h1>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas elit a tellus porttitor,
//                 id finibus ligula pulvinar. Phasellus nec posuere nisl. Vivamus ac turpis a velit vestibulum
//                 lacinia eget ac dui. Nunc efficitur libero tortor, quis aliquam nunc tristique eu. In egestas
//                 lectus a porta imperdie</p>
//             </div>
//         </div>
//     )
// }