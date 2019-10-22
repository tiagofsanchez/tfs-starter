import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import SimplePostListing from "../components/SimplePostListing";
import SEO from "../components/SEO/SEO";
import AvatarLinks from '../components/AvatarLinks';
import config from "../../data/SiteConfig";
import AllCategories from "../components/AllCategories";


/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMdx.edges;
    const { userLinks } = config
    


    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />
        <section>
          <div sx={{ textAlign: `center` }}>
            <img
              src="https://avatars1.githubusercontent.com/u/11288873?s=400&v=4"
              sx={{ width: 100, borderRadius: 999 }}
            />
            <Styled.h1 sx={{ color: `text` }}>
              Ola, I'm{" "}
              <Styled
                sx={{ display: `inline`, borderBottom: `solid 4px`, fontSize:32, color: `primary` }}
              >
                Tiago
              </Styled>
            </Styled.h1>
          </div>
          <AvatarLinks />
          <Styled.p>
            I am learning to code ReactJS (from scratch) and I have built this starter 
            to learn our Gatsby works and to build by blog! 
          </Styled.p>
          
        </section>
        <section sx={{mt:`60px`}}>
          <Styled.h1>I write about</Styled.h1>
          <AllCategories />
        </section>
        <section sx={{mt:`60px`}}>
          <Styled.h1>Check out my latest posts</Styled.h1>
          <SimplePostListing postEdges={postEdges} />
        </section>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMdx(
      limit: 5
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date(formatString: "MMMM Do, YYYY")
          }
          excerpt
          timeToRead
          frontmatter {
            category
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
