import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ItemPage.css';
import { Container } from 'react-bootstrap';
import { Post } from './../Post';
import Pagination from './../Pagination';
import CardCompt4 from './../CardComponent/CardCompt4'

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
  const [searchTitle, setSearchTitle] = useState("");

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container className='item-container'>
        <h1 className='title-page'>Merch Store and Crafter Recommendation</h1>
          <div className="search-wrapper">
              <div class="search_box">
                  <input 
                  type="text" 
                  class="input" 
                  placeholder="search..."
                  onChange={(e) => setSearchTitle(e.target.value)}
                  />
			      </div>
          </div>    
       <div className="grid">
          {loading ? (
            <h3>Loading ...</h3>
          ) : (
            posts.filter((value) => {
              if (searchTitle === " "){
                return value;
              } else if(value.nama_merchandise.toLowerCase().includes(searchTitle.toLowerCase())){
                return value;
              }
            })
            .map((item) => <CardCompt4 desc={item.deskripsi_merchandise} header={item.nama_merchandise} loc={item.alamat_toko}/>)
          )}
        </div>
            </Container>
  )
}


        //  <Post posts={currentPosts} loading={loading} />
        // <Pagination
        //     postsPerPage={postsPerPage}
        //     totalPosts={posts.length}
        //     paginate={paginate}
        // />