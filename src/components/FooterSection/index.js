import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from '../HelloSection/styles';
import bank from '@assets/images/MANDIRI.png';



function FooterSection({ isInvitation }) {
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
                  <br /> a/n : LUH GEDE RUWIDIANING
                  <br /> Bank Mandiri
                  <br /> 1750002567385 <br />
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
                {/* <small className="block">&copy; 2020 Dinda & Indra Wedding. All Rights Reserved.</small> */}
                {/* <small className="block">
                  Covid-19 Icon by{' '}
                  <a href="https://www.flaticon.com/packs/covid-protection-measures-5" target="_blank" rel="noreferrer">
                    Flat Icon - Frepik
                  </a>
                </small> */}
                {/* <small className="block">
                  Song by{' '}
                  <a href="https://www.youtube.com/watch?v=fb167KAxvrg" target="_blank" rel="noreferrer">
                    Anandito Anisa - Pernikahan Impian
                  </a>
                </small> */}
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
