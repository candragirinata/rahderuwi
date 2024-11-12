import React from 'react';

import IconIg from './assets/gps.png';
import { styButtonWrapper } from './styles';

function ButtonLive() {
  return (
    <div className="row">
      <div className="col-md-12">
        <p className="text__live">Untuk mendapatkan pentujuk arah , silahkan klik tombol dibawah ini: </p>
        <a href="https://maps.app.goo.gl/DPaRuhfpFJ2rC4ZRA" target="_blank" rel="noreferrer">
          <div css={styButtonWrapper}>
            <div className="img__wrapper">
              <img src={IconIg} alt="Live IG" />
              <span>Lihat Lokasi</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default React.memo(ButtonLive);
