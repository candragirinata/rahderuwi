import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';

import Favicon from '@assets/images/r2.png';
import '@assets/css/icomoon.css';
import '@assets/css/bootstrap.css';
import '@assets/css/style.css';

const META_DESCRIPTION = `Rahde ❤️ Ruwi Wedding`;

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Rahde ❤️ Ruwi Wedding</title>

        {/* Favicon */}
        <link rel="icon" type="image/png" href={Favicon} />

        {/* font and SEO tags */}
        <meta property="og:title" content="Rahde ❤️ Ruwi Wedding" />
        <meta property="og:description" content=" Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai. Atas kehadiran serta doa restu, kami ucapkan terimakasih !" />
        <meta property="og:image" content="https://weddingrahderuwi.callingyou.my.id/meta-ggimp-min.jpeg" />
        <meta property="og:url" content="https://weddingrahderuwi.callingyou.my.id/meta-ggimp-min.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={META_DESCRIPTION} />

        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
