import { Helmet } from 'react-helmet';

function RadioPlayer() {

  return (
    <>
      <Helmet>
            <script src="https://embed.radio.co/player/d1a002c.js"
              async />
      </Helmet>
    </>
  );
}

export default RadioPlayer;
