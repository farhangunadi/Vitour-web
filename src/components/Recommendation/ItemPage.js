import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './ItemPage.css';
import { Container } from 'react-bootstrap';
import { Post } from './../Post';
import Pagination from './../Pagination';
import CardCompt4 from './../CardComponent/CardCompt4'

export const ItemPage = () => {
  const [posts, setPosts] = useState([]);
  const [city, setCities] = useState([]);
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

    const fetchPostsCities = async () => {
      setLoading(true);
      const res = await axios.get('https://vitour-backend.herokuapp.com/api/cities');
      setCities(res.data.data);
      setLoading(false);
    };

    fetchPostsCities();
    fetchPosts();
  }, []);

 // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const [search, setSearch] = useState("");
  const [filterCity, setFilterCity] = useState("");
  

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
                    onChange={(e) => setSearch(e.target.value)}/>
                    <div className="grid">
                    <select
                    className="dropdown-select"
                    onChange={(e) => setFilterCity(e.target.value)}>
                    <option value="">City</option>
                     {
                        city.map(kota => {
                          return (
                            <option value={kota.city_id}>{kota.nama_kota}</option>
                          )
                        })
                     }
                    </select>
                    <select
                    className="dropdown-select"
                    >
                      <option>Category</option>
                      <option value="Culinary">Culinary</option>
                      <option value="Merchandise">Merchandise</option>
                      <option value="Fine Art">Fine Art</option>
                      <option value="Fashion">Fashion</option>
                    </select>
                    <select
                    className="dropdown-select"
                    >
                      <option>Laguange</option>
                      <option value="English">English</option>
                      <option value="Other">Other</option>
                    </select>
                    </div>
                    <div className="button-wrapper-get-all">
                      <button        
                        type="button"
                        className='card-btn'
                        >Search</button>  
                </div>
                </div>   
       <div className="grid">
         
          {loading ? (
            <h3>Loading ...</h3>
          ) : (
            posts.filter((value) => {
              if (search === " " || filterCity === " "){
                return value;
              } else if(value.nama_merchandise.toLowerCase().includes(search.toLowerCase())){
                return value;
              } else if(value.city_id === filterCity){
                return value;
              }
            })
            .map((item) => {
              var gambar = [];
              var counter = 0;
              item.images.map(link =>{
                {console.log(link.images_link)}
                gambar[counter++] = link.images_link;       
              })
              return(<CardCompt4 desc={item.deskripsi_merchandise} header={item.nama_merchandise} loc={item.alamat_toko} image={gambar[0]}/>)
            }
            )
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

        