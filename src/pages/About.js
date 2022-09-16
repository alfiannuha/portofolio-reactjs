import './About.css'

import TextLoop from "react-text-loop"

import PolygonProfiler from '../assets/images/profile_polygon.png'

export default function About() {
  
  return (
    <>
      <div className="about">
        <div className="about-description">
          <div className="description-fullname">
            Hi, I'm <br/>
            Alfian An - Naufal Nuha
            <TextLoop className="description-jobs" interval={2000}>
              <span>Front-End Web Developer.</span>
              <span>Back-End Developer.</span>
            </TextLoop>
          </div>
          <div className="description-about">
            Lorem ipsum dolor sit amet sem euismod ullamcorper magna sed risus sit ex suspendisse mus hac faucibus velit egestas morbi per nulla ante commodo fusce mauris aliquet tristique aliquam netus rhoncus vestibulum pulvinar lacus curae sodales pretium mattis maximus fringilla. Lorem ipsum dolor sit amet sem euismod ullamcorper magna sed risus sit ex suspendisse mus hac faucibus velit egestas morbi per nulla ante commodo fusce mauris aliquet tristique aliquam netus rhoncus vestibulum pulvinar lacus curae sodales pretium mattis maximus fringilla.  Lorem ipsum dolor sit amet sem euismod ullamcorper magna sed risus sit ex suspendisse mus hac faucibus velit egestas morbi per nulla ante commodo fusce mauris aliquet tristique aliquam netus rhoncus vestibulum pulvinar lacus curae sodales pretium mattis maximus fringilla. Lorem ipsum dolor sit amet sem euismod ullamcorper magna sed risus sit ex suspendisse mus hac faucibus velit egestas morbi per nulla ante commodo fusce mauris aliquet tristique aliquam netus rhoncus vestibulum pulvinar lacus curae sodales pretium mattis maximus fringilla. 
          </div>
          <a
            href="assets/CV_ALFIAN_AN_NAUFAL_NUHA.pdf" 
            download 
            className="about-btn-cv">
            Download CV
          </a>  
        </div>
        <div className="about-profile">
          <img src={PolygonProfiler} alt="polygon" />
        </div>
      </div>
      <div className="divider">
        <hr className="divider-line" />
      </div>
      <div className="riwayat">
        <div className="riwayat-description">
          <div className="riwayat-title">Riwayat Pekerjaan</div>
          <div className="riwayat-detail">
            <div className="riwayat-details">
              <div className="riwayat-detail-tahun">2020 - Sekarang</div>
              <div className="riwayat-detail-place">PT. Era Solusi Data</div>
              <div className="riwayat-detail-job"> Front-End Web Development <span>(Onsite)</span></div>
            </div>
            <div className="riwayat-details">
              <div className="riwayat-detail-tahun">2021 - Sekarang</div>
              <div className="riwayat-detail-place">PT. Yureka Tech</div>
              <div className="riwayat-detail-job"> Front-End Web Development <span>(Parttime)</span></div>
            </div>
          </div>
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