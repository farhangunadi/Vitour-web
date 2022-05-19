import React from "react";
import FotoKita1 from '../assets/images/09.jpg'
import FotoKita2 from '../assets/images/39.jpg'
import FotoKita3 from '../assets/images/53.jpg'
import FotoKita4 from '../assets/images/59.jpg'
import FotoKita5 from '../assets/images/77.jpg'

const AboutCard = ()=>{
    return (
        <>
        <div class="card-group">
        <div class="card">
        <img src={FotoKita1} class="mx-auto card-img-fluid" alt="..." width={300} height={300}/>
          <div class="card-body">
            <h5 class="card-title">Farhan Gunadi</h5>
            <p class="card-text">Developer</p>
          </div>
        </div>
        <div class="card">
        <img src={FotoKita2} class="mx-auto card-img-fluid" alt="..." width={300} height={300}/>
          <div class="card-body">
            <h5 class="card-title">Raihan Fatoni</h5>
            <p class="card-text">Developer</p>
          </div>
        </div>
        <div class="card">
        <img src={FotoKita3} class="mx-auto card-img-fluid" alt="..." width={300} height={300}/>
          <div class="card-body">
            <h5 class="card-title">Aidil Fitra</h5>
            <p class="card-text">Developer</p>
          </div>
        </div>
      </div>
      



      <div class="row row-cols-1 row-cols-md-2 g-2">
  <div class="col">
    <div class="card">
    <img src={FotoKita4} class=" mx-auto card-img-fluid" alt="..." width={300} height={300} />
      <div class="card-body">
        <h5 class="card-title">Andre Luckyta Firdaus</h5>
        <p class="card-text">Developer</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={FotoKita5} class=" mx-auto card-img-fluid" alt="..." width={300} height={300} />
      <div class="card-body">
        <h5 class="card-title">Muhammad Alwan Fauzi</h5>
        <p class="card-text">Developer</p>
      </div>
    </div>
  </div>
</div>
      </>
    )
}

export default AboutCard;