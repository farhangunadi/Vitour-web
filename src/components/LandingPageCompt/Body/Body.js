import React from 'react';
import './Body.css';
import { CardCompt } from '../../CardComponent/CardCompt';

function Body() {
  return (
    <>
        <div className="container">
            <div className="search-wrapper">
                <div class="search_box">
				<input type="text" class="input" placeholder="search..."/>
				<div class="btn">
					<p>Search</p>
				</div>
			</div>
            </div>
            <div className="title">
                <h2>Popular Destination</h2>
            </div>
            <div className="grid">
                <CardCompt className='cardCompt' />
                <CardCompt className='cardCompt' />
                <CardCompt className='cardCompt' />
                <CardCompt className='cardCompt' />
            </div>
        </div>
    </>
  )
}

export default Body