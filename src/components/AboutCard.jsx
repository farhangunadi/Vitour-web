import React from "react";
import logoKampus from '../assets/images/unpad.png'

const AboutCard = ()=>{
    return (
        <>
        <div class="card-group">
        <div class="card">
        <img src={logoKampus} class="mx-auto card-img-fluid" alt="..." width={300} height={300}/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
        <img src={logoKampus} class="mx-auto card-img-fluid" alt="..." width={300} height={300}/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
        <img src={logoKampus} class="mx-auto card-img-fluid" alt="..." width={300} height={300}/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
        </div>
      </div>
      



      <div class="row row-cols-1 row-cols-md-2 g-2">
  <div class="col">
    <div class="card">
    <img src={logoKampus} class=" mx-auto card-img-fluid" alt="..." width={300} height={300} />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={logoKampus} class=" mx-auto card-img-fluid" alt="..." width={300} height={300} />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
      </>
    )
}

export default AboutCard;