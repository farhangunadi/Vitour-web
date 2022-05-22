import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ItemPage.css';
import { Container } from 'react-bootstrap';
import { Post } from './../Post';
import Pagination from './../Pagination'

export const ItemPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://vitour-backend.herokuapp.com/api/city/merchandises');
      setPosts(res.data.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

 // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container className='item-container'>
        <h1>Batik Store and Crafter</h1>
         <Post posts={currentPosts} loading={loading} />
        <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
        />
    </Container>
  )
}
