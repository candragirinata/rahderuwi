import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import { styWrapper } from './styles';
import ButtonGmaps from './ButtonGmaps';

function WeddingSection({ isInvitation }) {
  const renderGuestInfo = () => {
    return (
      <Fragment>
        <div className="col-md-8 col-md-offset-4">
          <WeddingInfoBox title="Resepsi" time="13.00 Wita - Selesai" date="Jumat, 29 November 2024" description="Br.Wanayu, Bedulu,Blahbatuh - Gianyar" />
        </div>
        <ButtonGmaps />
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font main-font__wedding">Waktu & Tempat</h2>
              {/* <span className="sub-title sub-title__wedding">Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa / Tuhan Yang Maha
                Esa, Kami Bermasuk Mengundang Bapak/Ibu/Saudara/i pada upacara Manusa Yadnya

                putra-putri kami, yang akan dilaksanakan pada :

              </span> */}
            </div>
          </div>
          <div className="row">
            {!isInvitation && renderGuestInfo()}
            {isInvitation && (
              <div className="col-md-10 col-md-offset-1">
                <WeddingInfoBox
                  title="Akad Nikah"
                  time="Akan dilaksanakan pagi hari "
                  date="Sabtu, 03 Oktober 2020"
                  description="Orange Ballroom <br/>HARRIS Hotel Sentraland, Semarang"
                />
                <WeddingInfoBox
                  title="Syukuran Pernikahan"
                  time="Sesuai jadwal undangan di e-ticket "
                  date="Sabtu, 03 Oktober 2020"
                  description="Orange Ballroom <br/>HARRIS Hotel Sentraland, Semarang"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
