import React from 'react';
import {Link} from 'react-router-dom';

function IndustryCom() {
    return (
        <div>
              <section className="service-section-prb pad-tb">
    <div className="container">
    <div className="row">
        <div className="col-lg-4 v-center">
          <div className="common-heading text-l">
            <span>Industries we work for</span>
            <h2>Helping Companies in All Domains</h2>
            <p>We successfully helped all these Industries on their digital transformation journey </p>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="work-card-set">
            <div className="icon-set wow fadeIn" data-wow-delay=".2s">
              <div className="work-card cd1">
                <div className="icon-bg"><img src="/asset/images/icons/icon-1.png" alt="Industries" /></div>
                <p>Retail Banking </p>
              </div>
            </div>
             <div className="icon-set wow fadeIn" data-wow-delay="1.4s">
              <div className="work-card cd7">
                <div className="icon-bg"><img src="/asset/images/icons/icon-7.png" alt="Industries" /></div>
                <p>Education</p>
              </div>
            </div>
            <div className="icon-set wow fadeIn" data-wow-delay=".4s">
              <div className="work-card cd2">
                <div className="icon-bg"><i class="fab fa-hive fa-4x"></i></div>
                <p>Investment Management</p>
              </div>
            </div>
                        <div className="icon-set wow fadeIn" data-wow-delay=".8s">
              <div className="work-card cd4">
                <div className="icon-bg"><i class="fas fa-building fa-4x"></i></div>
                <p>Government</p>
              </div>
            </div>
            
            {/* <div className="icon-set wow fadeIn" data-wow-delay=".6s">
              <div className="work-card cd3">
                <div className="icon-bg"><i class="fas fa-coins fa-4x"></i></div>
                <p>Financial Services</p>
              </div>
            </div>

            <div className="icon-set wow fadeIn" data-wow-delay="1s">
              <div className="work-card cd5">
                <div className="icon-bg"><img src="/asset/images/icons/icon-5.png" alt="Industries" /></div>
                <p>Banking Service</p>
              </div>
            </div>
            <div className="icon-set wow fadeIn" data-wow-delay="1.2s">
              <div className="work-card cd6">
                <div className="icon-bg"><img src="/asset/images/icons/icon-6.png" alt="Industries" /></div>
                <p>Enterprise Service</p>
              </div>
            </div>

            <div className="icon-set wow fadeIn" data-wow-delay="1.6s">
              <div className="work-card cd8">
                <div className="icon-bg"><i class="fas fa-broadcast-tower fa-4x"></i></div>
                <p>Communication</p>
              </div>
            </div> */}




          </div>
        </div>
      </div>

      <div className="-cta-btn mt70">
        <div className="free-cta-title v-center zoomInDown wow" data-wow-delay="1.4s">
          
          <p>Let's Start a <span>New Project</span> Together</p>
          <Link to="/get-quote" className="btn-main bg-btn2 lnk">LET'S GET YOU STARTED<i className="fas fa-chevron-right fa-icon" />
          <span className="circle" />
          </Link>
        </div>
      </div>
    </div>
  </section>
   {/*End  work-category*/}
        </div>
    )
}

export default IndustryCom;
