import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from '../HelloSection/styles';
import bank from '@assets/images/MANDIRI.png';
import IconIg from '@assets/images/salin.png'; // Ganti dengan path ikon yang sesuai
import { styButtonWrapper } from '../WeddingSection/styles';

function FooterSection({ isInvitation }) {
  const accountNumber = "1750002567385"; // Nomor rekening yang akan disalin

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber)
      .then(() => {
        alert("Nomor rekening berhasil disalin ke clipboard!");
      })
      .catch((err) => {
        console.error("Gagal menyalin teks: ", err);
      });
  };

  return (
    <Fragment>
      {!isInvitation && (
        <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">

                <p className="info">
                  Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai. Atas kehadiran serta doa restu, kami ucapkan
                </p>
                <h2 className="main-font">Terima Kasih</h2>
                <p className="info">
                  Om Santhi Santhi Santhi Om
                  <br /> Rahde & Ruwi <br />
                </p>
                <h2 className="main-font">e-Gift</h2>
                <p className="info">
                  <img src={bank} alt="Bank Mandiri Logo" style={{ width: '250px', height: 'auto' }} /> <br />
                  <br /> a/n : Luh Gede Ruwidianingsih
                  <br /> Bank Mandiri
                  <br /> {accountNumber} <br />

                  {/* Tombol dengan gaya styButtonWrapper */}
                  <div css={styButtonWrapper} onClick={handleCopy} style={{ cursor: 'pointer', display: 'inline-block', marginTop: '10px' }}>
                    <div className="img__wrapper">
                      <img src={IconIg} alt="Copy Icon" style={{ width: '20px', marginRight: '8px' }} />
                      <span>Salin Nomor Rekening</span>
                    </div>

                  </div>

                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">
                  Original Template from{' '}
                  <a href="http://freehtml5.co/" target="_blank" rel="noreferrer">
                    FREEHTML5.co
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
