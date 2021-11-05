import React from 'react';
import {Link} from 'react-router-dom';

function Error() {
    return (
        <div>
          {/*Start 404 Error*/}
<section className="error bg-gradient pad-tb">
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center mt50 mb50">
        <div className="layer-div">
          <div className="error-block">
            <h1>Page not Found</h1>
            <p>It looks like the page you're looking for does not exist.</p>
            <div className="images mt20">
              <img src="/asset/images/shape/error-page.png" alt="error page" className="img-fluid" />
            </div>
            <Link to="/" className="btn-outline">Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/*End 404 Error*/}

        </div>
    )
}

export default Error;
