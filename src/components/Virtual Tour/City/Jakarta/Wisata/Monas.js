import React from 'react';
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import './../../Wisata.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Footer } from '../../../../LandingPageCompt/Footer/Footer';

function Punclut() {
  return (
    <div className="wrap-wisata">
    <Container className='container-wisata'>
        <h2>Monas, DKI Jakarta</h2>
        <div className="iframe-container">
            <iframe width="1120" height="630" src="https://www.youtube.com/embed/Tmmq6NCH7h0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
        </div>
        <div className="content">
          <p>
            <h2>Deskripsi</h2>
            Monumen Nasional atau yang disingkat dengan Monas atau Tugu Monas adalah monumen peringatan setinggi 132 meter (433 kaki) yang didirikan untuk mengenang perlawanan dan perjuangan rakyat Indonesia untuk merebut kemerdekaan dari pemerintahan kolonial Hindia Belanda.Pembangunan monumen ini dimulai pada tanggal 17 Agustus 1961 di bawah perintah presiden Soekarno dan diresmikan sehingga dibuka untuk umum pada tanggal 12 Juli 1975. Tugu ini dimahkotai lidah api yang dilapisi lembaran emas yang melambangkan semangat perjuangan yang menyala-nyala dari rakyat Indonesia. Monumen Nasional terletak tepat di tengah Lapangan Medan Merdeka, Jakarta Pusat.
            <hr></hr>
            <h3>Sejarah </h3>
            Pada tanggal 17 Agustus 1954, sebuah komite nasional dibentuk dan sayembara perancangan Monumen Nasional digelar pada tahun 1955. Terdapat 51 karya yang masuk, akan tetapi hanya satu karya yang dibuat oleh Frederich Silaban yang memenuhi kriteria yang ditentukan komite, antara lain menggambarkan karakter bangsa Indonesia dan dapat bertahan selama berabad-abad. Sayembara kedua digelar pada tahun 1960 tetapi sekali lagi tak satupun dari 136 peserta yang memenuhi kriteria. Ketua juri kemudian meminta Silaban untuk menunjukkan rancangannya kepada Soekarno. Akan tetapi Soekarno kurang menyukai rancangan itu dan ia menginginkan monumen itu berbentuk lingga dan yoni. Silaban kemudian diminta merancang monumen dengan tema seperti itu, akan tetapi rancangan yang diajukan Silaban terlalu luar biasa sehingga biayanya sangat besar dan tidak mampu ditanggung oleh anggaran negara, terlebih kondisi ekonomi saat itu cukup buruk. Silaban menolak merancang bangunan yang lebih kecil dan menyarankan pembangunan ditunda hingga ekonomi Indonesia membaik. Soekarno kemudian meminta arsitek R.M. Soedarsono untuk melanjutkan rancangan itu. Soedarsono memasukkan angka 17, 8 dan 45 melambangkan 17 Agustus 1945 memulai Proklamasi Kemerdekaan Indonesia ke dalam rancangan monumen itu.[1][2][3] Tugu Peringatan Nasional ini kemudian dibangun di areal seluas 80 hektare. Tugu ini diarsiteki oleh Frederich Silaban dan R.M. Soedarsono mulai dibangun 17 Agustus 1961.
            <hr></hr>
            <h3>Pembangunan</h3>
            Pembangunan terdiri atas tiga tahap. Tahap pertama, kurun 1961/1962 - 1964/1965 dimulai dengan dimulainya secara resmi pembangunan pada tanggal 17 Agustus 1961 dengan Soekarno secara seremonial menancapkan pasak beton pertama. Total 284 pasak beton digunakan sebagai fondasi bangunan. Sebanyak 360 pasak bumi ditanamkan untuk fondasi museum sejarah nasional. Keseluruhan pemancangan fondasi rampung pada bulan Maret 1962. Dinding museum di dasar bangunan selesai pada bulan Oktober. Pembangunan obelisk kemudian dimulai dan akhirnya rampung pada bulan Agustus 1963. Pembangunan tahap kedua berlangsung pada kurun 1966 hingga 1968 akibat terjadinya Gerakan 30 September sehingga tahap ini sempat tertunda. Tahap akhir berlangsung pada tahun 1969-1976 dengan menambahkan diorama pada museum sejarah. Meskipun pembangunan telah rampung, masalah masih saja terjadi, antara lain kebocoran air yang menggenangi museum. Monumen secara resmi dibuka untuk umum dan diresmikan pada tanggal 12 Juli 1975 oleh Presiden Republik Indonesia Soeharto. Lokasi pembangunan monumen ini dikenal dengan nama Medan Merdeka. Lapangan Monas mengalami lima kali penggantian nama yaitu Lapangan Gambir, Lapangan Ikada, Lapangan Merdeka, Lapangan Monas, dan Taman Monas. Di sekeliling tugu terdapat taman, dua buah kolam dan beberapa lapangan terbuka tempat berolahraga. Pada hari-hari libur Medan Merdeka dipenuhi pengunjung yang berekreasi menikmati pemandangan Tugu Monas dan melakukan berbagai aktivitas dalam taman.
          </p>
          <h2>Lokasi Objek Wisata</h2>
          <div className="LocNavigation">
            <button className="card-btn" onClick={() => {
              window.open("https://www.google.com/maps/place/National+Monument/@-6.1714789,106.8074695,13.88z/data=!4m12!1m6!3m5!1s0x2e69f5d2e764b12d:0x3d2ad6e1e0e9bcc8!2sNational+Monument!8m2!3d-6.1753924!4d106.8271528!3m4!1s0x2e69f5d2e764b12d:0x3d2ad6e1e0e9bcc8!8m2!3d-6.1753924!4d106.8271528", "_blank");
            }}>Navigasi ke Objek Wisata</button>
          </div>
          {/* <Link to="/" className="LocNavigation">
              <button className="card-btn">Navigasi ke Objek Wisata</button>
          </Link> */}
          {/* <div className="maps-container">
             <Map
              className="map"
              google={this.props.google}
              zoom={8}
              initialCenter={{ lat: 47.444, lng: -122.176}}
            >
            <Marker position={{ lat: 48.00, lng: -122.00}} />
          </Map>
          </div> */}
        </div>
    </Container>
    <Footer />
    </div>
    

  )
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBAjMh99Gr3x2uZT_91r5yiBE0HkYt1npE')
})(Punclut);