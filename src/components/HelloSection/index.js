import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/Screenshot from 2024-11-11 20-29-17.png';
import Groom from '@assets/images/Screenshot from 2024-11-11 20-29-39.png';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  // const finalSubtitle = isInvitation ? '03 Oktober 2020, HARRIS Hotel Sentraland, Semarang' : 'Sabtu, 03 Oktober 2020';

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Om Swastyastu</h2>
              {/* <h3 className="sub-title hs">{finalSubtitle}</h3> */}
              <p className="info">
                Atas asung kerta wara nugraha Ida Sang Hyang Widhi Wasa.
                Kami sekeluarga bermaksud menyelenggarakan
                upacara manusa yadnya Pawiwahan/ Pernikahan putra-putri kami :
              </p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Luh Gede Ruwidianingsih, S.Si., M.Kes.</h3>
                <p className="parent-name parent-name__top">
                  Putri pertama dari pasangan (Alm) Nyoman Runarta <br />& Putu Widia
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">I Gusti Ngurah Alit Adi Putra, A.Md.Kg</h3>
                <p className="parent-name">
                  Putra kedua dari pasangan Gusti Ngurah Suteja <br />& Ni Ketut Asti
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {!isInvitation ? (
        <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2 className="main-font">Seputar Covid-19</h2>
                <p className="info">
                  Berkaitan dengan kondisi pandemik saat ini, keberlangsungan acara kami mengacu pada pedoman
                  Kementerian Kesehatan, yaitu memberlakukan pembatasan jarak dan pembatasan jumlah tamu undangan.
                </p>
                <p className="info">
                  Maka dari itu, dengan segala kerendahan hati, kami mohon maaf jika belum bisa mengundang saudara/i
                  dihari bahagia kami. Sekiranya do'a dari saudara/i sudah lebih dari cukup bagi kami. Semoga kita semua
                  selalu dalam lindungan Allah SWT. Aamiin ya rabbal allamiin..
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null} */}
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
