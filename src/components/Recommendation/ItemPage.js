import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './ItemPage.css';
import { Container } from 'react-bootstrap';
import { Post } from './../Post';
import Pagination from './../Pagination';
import CardCompt4 from './../CardComponent/CardCompt4'
import { Carousel } from 'bootstrap';
import Img from './../../assets/images/bandung.jpg'
import CarouselCompt from '../CarouselCompt/CarouselCompt';

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
          <div className="filterAdv">
                    <input                      
                    type="text"
                    className="inputFilter2"
                    placeholder='Search...'
                    onChange={(e) => setSearchTitle(e.target.value)}/>
                    <div className="grid">
                    <select
                    className="dropdown-select"
                    on
                    >
                      <option value="">City</option>
                      <option value="Bandung">Bandung</option>
                      <option value="Jakarta">Jakarta</option>
                      <option value="Yogyakarta">Yogyakarta</option>
                      <option value="Purwakarta">Purwakarta</option>
                    </select>
                    <select
                    className="dropdown-select"
                    >
                      <option value="">Category</option>
                      <option value="Culinary">Culinary</option>
                      <option value="Merchandise">Merchandise</option>
                      <option value="Fine Art">Fine Art</option>
                      <option value="Fashion">Fashion</option>
                    </select>
                    <select
                    className="dropdown-select"
                    >
                      <option value="">Laguange</option>
                      <option value="English">English</option>
                      <option value="Other">Other</option>
                    </select>
                    </div>
                    <div className="button-wrapper-get-all">
                      <button        
                        type="button"
                        value="Search"
                        className='card-btn'>Search</button>  
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