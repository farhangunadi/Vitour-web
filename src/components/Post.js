import React from 'react'
import { Container } from 'react-bootstrap';
import CardCompt4 from './CardComponent/CardCompt4';

export const Post = ({ posts, loading }) => {
 if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container className='item-cont'>
        <div className="grid">
            {posts.map(post => (
                <CardCompt4 desc={post.title}/>
            ))}
        </div>
    </Container>
    //  <ul className='list-group mb-4'>
    //   {posts.map(post => (
    //     <li key={post.id} className='list-group-item'>
    //       {post.title}
    //     </li>
    //   ))}
    // </ul>
  )
}
