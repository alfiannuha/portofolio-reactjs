import './About.css'
import { Link } from "react-router-dom";

import TextLoop from "react-text-loop"

import ProfileImage from '../assets/images/profile.png'
import MY_CV from '../assets/CV_ALFIAN_AN_NAUFAL_NUHA.pdf'

export default function About() {

  const riwayatPekerjaan = [
    {
      tahun: 'Februari 2025 - Sekarang',
      tempat: 'PT. Solutionlabs Grup',
      pekerjaan: 'Front-End Web Development',
      status: '(Full time)'
    },
    {
      tahun: 'November 2023 - Februari 2025',
      tempat: 'PT. Yureka Teknologi Cipta',
      pekerjaan: 'Front-End Web Development ',
      status: '(Full time)'
    },
    {
      tahun: 'Juli 2021 - April 2023',
      tempat: 'PT. Yureka Teknologi Cipta',
      pekerjaan: 'Front-End Web Development',
      status: '(Part time)'
    },
    {
      tahun: 'Mei 2020 - November 2023',
      tempat: 'PT. Era Solusi Data',
      pekerjaan: 'Front-End Web Development',
      status: '(Full time)'
    },
  ]
  
  return (
    <>
      <section className="about">
        <div className="about-description">
          <div className="description-fullname">
            Hi, I'm <br/>
            Alfian An - Naufal Nuha <br/>
            <TextLoop className="description-jobs" interval={2000}>
              <span>Frontend Web Developer.</span>
            </TextLoop>
          </div>
          <div className="description-about">
            <p>
              Hallo, nama saya Alfian An - Naufal Nuha dan saya seorang Web
              Development. Saya memiliki kemampuan untuk membuat sebuah Website
              atau Aplikasi berbasis Web.
            </p>
            <p>
              Saya lahir di Semarang pada 12 Mei 2000 dan sekarang saya tinggal
              di Daerah Istimewa Yogyakarta. Saya pertama kali mendalami coding
              adalah setelah dari Pondok Pesantren dengan masuk ke sebuah Kursus
              Web Pemograman yaitu
              <a class="text_link" href="https://alfabankjogja.com/" target="_blank"> Alfabank Yogyakarta</a>
            </p>
            <p>
              Saya saat ini sedang menempuh kuliah pada Jurusan Teknik
              Informatika di Universitas Mercubuana Yogyakarta Kampus 2 dan juga sambil bekerja.
            </p>
            <p>
              Saat ini saya bekerja di PT. Solutionlabs Grup sebagai Front End
              Development. Pada perusahaan ini saya bekerja sebagai Front End Developer
              yang bertanggung jawab untuk mengembangkan dan memelihara aplikasi web
              yang digunakan oleh klien.
            </p>
          </div>
          <a
            href={MY_CV} 
            download 
            className="about-btn-cv">
            Download CV
          </a>  
        </div>
        <div className="about-profile">
          <img src={ProfileImage} alt="profile" className="profile-image" />
        </div>
      </section>
      <div className="divider">
        <hr className="divider-line" />
      </div>
      <div className="riwayat">
        <div className="riwayat-description">
          <div className="riwayat-title">Riwayat Pekerjaan</div>
          <div className="riwayat-detail">
            {riwayatPekerjaan.map((item, index) => (
              <div className="riwayat-details">
                <div className="riwayat-detail-tahun">{item.tahun}</div>
                <div className="riwayat-detail-place">{item.tempat}</div>
                <div className="riwayat-detail-job"> {item.pekerjaan} <span>{item.status}</span></div>
              </div>
            ))}
          </div>
        </div>
        <div className="divider">
          <hr className="divider-line" />
        </div>
        <div className="riwayat-description">
          <div className="riwayat-title">Riwayat Pendidikan</div>
          <div className="riwayat-detail">
            <div className="riwayat-details">
              <div className="riwayat-detail-tahun">2006 - 2013</div>
              <div className="riwayat-detail-place">SDIT Ukhuwah Islamiyah</div>
            </div>
            <div className="riwayat-details">
              <div className="riwayat-detail-tahun">2013 - 2015</div>
              <div className="riwayat-detail-place">SMPIT Baitussalam</div>
            </div>
            <div className="riwayat-details">
              <div className="riwayat-detail-tahun">2015 - 2019</div>
              <div className="riwayat-detail-place">MA Ibnul Qoyyim</div>
            </div>
            <div className="riwayat-details">
              <div className="riwayat-detail-tahun">2019 - Sekarang</div>
              <div className="riwayat-detail-place">Univ. Mercu Buana Yogyakarta</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}