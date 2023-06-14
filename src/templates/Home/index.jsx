import './styles.css';

import { Component } from 'react';

import { loadPosts } from '../../ultilities/load-posts';
import Posts from '../../components/Posts/Posts';
import { Button } from '../../components/Button/Button';

class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
        posts : [],
        allPosts: [],
        page: 0,
        postsPerPage: 2,
      }
  }

  async componentDidMount(){
    await this.loadPosts()
  }

  loadPosts = async () => {
    const {page, postsPerPage} = this.state
    const postAndPhotos = await loadPosts()
    this.setState({
      posts : postAndPhotos.slice(page, postsPerPage),
      allPosts : postAndPhotos
    })
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state
    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)

    this.setState({posts, page : nextPage})
  }


  render() {
    const { posts } = this.state

    return (
      <section className='container'>
        <Posts posts={posts}/>
        <Button
        texto='Load more posts'
        onClick={this.loadMorePosts}
        />
      </section>
    );
  }
}

export default Home;
