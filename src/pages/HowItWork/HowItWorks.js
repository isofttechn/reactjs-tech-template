import React from 'react';
import {Link} from 'react-router-dom';
import BiometricAccess from '../Home/Slider/BiometricAccess';

const HowItWorks = () =>{
    return(
  <div>

        {/*Breadcrumb Area*/}
  <section className="breadcrumb-areav2" data-background="/asset/images/banner/custom-software-banner@2x.webp">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="bread-titlev2">
            <h1 style=
            {{fontSize: '40PX',
             fontFamily:'CircularStd',
             fontWeight:'700',
             boxSizing:'border-box'
             }} className="wow fadeInUp" data-wow-delay=".2s">
                Our Software Development Process
            </h1>
            <p style={{fontSize:'21px'}} className="mt20 wow fadeInUp" data-wow-delay=".4s">
                Extend your tech team with top talent. We oversee the execution and management of your software projects with our proven processes and tech mentorship
            </p>
            <Link to="/get-quote" className="btn-main bg-btn2 lnk mt20 wow zoomInDown" data-wow-delay=".6s">
                Get Quote 
                <i className="fas fa-chevron-right fa-icon" />
                <span className="circle" />
          </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End Hero*/}


{/*Start Process*/}
<section className="service-block pad-tb">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="common-heading ptag">
          <h2>Our Design/Development Process</h2>
          <p>
              Our design process follows an effective method. We start with a deep understanding of your needs and create a plan template.
        </p>
        </div>
      </div>
    </div>
    <div className="row upset justify-content-center mt60">
      <div className="col-lg-4 v-center order1">
        <div className="image-block1">
          <img src="/asset/images/process/taking-selfie-img.webp" alt="Process" className="img-fluid" />
        </div>
      </div>
      <div className="col-lg-7 v-center order2">
               <div id="accordion" className="accordion">
          <div className="card-1">
            <div className="card-header" id="faq1">
              <button className="btn btn-link btn-block text-left card-title" type="button" data-toggle="collapse" data-target="#collapse-a" aria-expanded="true" aria-controls="collapse-a">
                What does your tech consultation include? Why is it valuable?
              </button>
            </div>
            <div id="collapse-a" className="card-body collapse show" aria-labelledby="faq1" data-parent="#accordion">

            <p>
                The detailed technical consultation (which itself is worth thousands of dollars in value) includes things like challenges of the project, what tech-stack to use to solve those challenges. A detailed hiring plan is also part of this consultation and includes details on what skill set and experience your team need to have.
            </p>

            <p>
                Project’s execution roadmap brings all the pieces together to show how your project will come to life. Based on your project goals we help you define processes and delivery roadmap that suits your needs.
            </p>
            <p>
              Tech architecture solution includes things like how features will be implemented with what technology and framework. It will also include things like algorithms and cloud integrations will be required to build your IP and build the tech engine.
            </p>

            <p>
                This tech consultation and talent skillset specification are provided for free so even if you don't work with us you can take it forward and use it in the future.
            </p>
        </div>
          </div>

          <div className="card-1">
            <div className="card-header" id="faq2">
              <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-b" aria-expanded="true" aria-controls="collapse-b">
                How is Skylight different from other online platforms and development agencies?
              </button>
            </div>
            <div id="collapse-b" className="card-body collapse " aria-labelledby="faq2" data-parent="#accordion">
            
            <p>
                Skylight team extension service allows you to hire pre-vetted, world-class developers as part of your team.
            </p>

            <p>
                We handle all aspects of finding, vetting, and choosing the right candidates that you don't have the time, focus, desire, or sometimes expertise to do.
            </p>         
              
            </div>
          </div>
          <div className="card-1">
            <div className="card-header" id="faq3">
              <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-c" aria-expanded="true" aria-controls="collapse-c">
                    What kind of commitment do I need to make up front?
              </button>
            </div>
            <div id="collapse-c" className="card-body collapse " aria-labelledby="faq3" data-parent="#accordion">
              <p>
                None! We operate under the policy that it is our responsibility to find you the right person for the job. If you don’t find the right one, you won’t spend a dime.

            </p>
                       
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row upset justify-content-center mt60">
      <div className="col-lg-7 v-center order2">
            
                     <div id="accordion" className="accordion">
          <div className="card-1">
            <div className="card-header" id="faq1">
              <button className="btn btn-link btn-block text-left card-title" type="button" data-toggle="collapse" data-target="#collapse-a" aria-expanded="true" aria-controls="collapse-a">
                What is your developer vetting process?
              </button>
            </div>
            <div id="collapse-a" className="card-body collapse show" aria-labelledby="faq1" data-parent="#accordion">
            <p>
              Finding developers and freelancers is easy — the hard part is knowing if you have found people who will truly deliver. This is specifically difficult if you don't have years of experience in vetting and choosing the best developers from a range of technologies. We do.
            </p>

            <p>
                When we have candidates we like we give them a stage to showcase their communication skills and problem-solving ability through a series of video interviews. Here we are looking for people with highly relevant skill sets, well-documented code, and a disciplined approach to testing.
            </p>

            <p>
                We develop comprehensive small project tests for every role. Each developer candidate's technical acumen is tested through an automated coding exam. Applicants are tested on language-specific knowledge as well as general programming and algorithm knowledge.
            </p>

            <p>
                We do full reference checks with their previous clients and employers. We sign NDA and full proof legal contract to make sure your IP is protected. Speed is what Skylight takes pride in — it typically takes only 24-72 hours for our clients to receive a short list of top candidates.
            </p>
        </div>
          </div>

          <div className="card-1">
            <div className="card-header" id="faq2">
              <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-b" aria-expanded="true" aria-controls="collapse-b">
                    What are the benefits of working with remote developers?
              </button>
            </div>
            <div id="collapse-b" className="card-body collapse " aria-labelledby="faq2" data-parent="#accordion">
            
            <p>
              Remote teams, whether comprised of developers from 50 miles away from you or 5,000 miles, bring pretty extraordinary advantages.
            </p>

            <p>
                The great thing about remote teams is that you are encouraged to keep communications in text format, which also means you will have a written record of all communication. In an office, so much is said casually in passing, and that knowledge is never captured.
            </p>

            <p>
               You become more disciplined and process driven when working in a remote environment. This is great for any team but sometimes missed in in house teams.
            </p>         

            <p>
                There is no greater sign of trust and respect you can give someone on your team than by offering flexibility with their schedule. They will harness that flexibility to give you incredibly focused hours of work that will be far more productive than office-hours would ever be.
            </p>

            <p>
                Offices are great for brainstorming and collaboration, but they cannot give you the focus you need for execution. Working remotely can. Development work requires intense focus and uninterrupted productive time.
            </p>

            <p>
                With the world as your hiring pool, you can recruit far more developers and far more talented developers than the leftovers available in your local area. You will also end up with a far more diverse team of people with many different perspectives and approaches to solving challenges.
            </p>

            <p>
                Without a commute and more time available to them, remote developers are some of the most skilled and up-to-date developers in the world, thanks to the flexibility they have to keep learning and growing.
            </p>

            <p>
                Most people assume that remote development is chaotic because of the differing time zones. This is actually the least of most remote teams’ worries. Time Zones are often utilized wisely so that there is enough overlap for each of the team members to sync up, but also enough difference in time to allow for continuous development to happen as one developer hands off work to another developer.
            </p>
              
            </div>
          </div>
          <div className="card-1">
            <div className="card-header" id="faq3">
              <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-c" aria-expanded="true" aria-controls="collapse-c">
                    Do you have developers in my city?
              </button>
            </div>
            <div id="collapse-c" className="card-body collapse " aria-labelledby="faq3" data-parent="#accordion">
              <p>
                Most of our developers work remotely and are experienced in working with distributed teams. If an on-site developer is strictly required, we can certainly work with you to make it happen. We can tap into our partner network and a vetted list of developers to help you find a local developer.
            </p>

            <p>
                The server of the system will have all the users in a database, which allows for customization of access times and locations. When the card is introduced to the reader, a frequency is read by the controller and the user is verified through the database. If verified, the door will unlock. If not, the controller registers the breach and the proper monitors will be notified.
            </p>

            <p>
                Our Tech Lead and PM will work closely with the client for the first few weeks of cooperation to work out an efficient remote working model and help to set up all the agile processes necessary for a geographically distributed team.
            </p>
            
            <p>
                Many times our clients already have a tech team and all the processes are well defined. In that case, we do a two-week trial execution so that our team can adopt and work in a way that fits your team’s workflow.
            </p>

            <p>
                Our team spends the time to understand your processes, who the stakeholders are, who the users are by doing sessions around user stories, code architecture (system or functional level), and most importantly business goals. Technology alignment and collaboration with your developers is critical here.
            </p>
                       
            </div>
          </div>
        </div>

      </div>
      <div className="col-lg-4 v-center order1">
        <div className="image-block1">
          <img src="/asset/images/process/great-engineering-illustration.webp" alt="Process" className="img-fluid" />
        </div>
      </div>
    </div>
    <div className="row upset justify-content-center mt60">
      <div className="col-lg-4 v-center order1">
        <div className="image-block1">
          <img src="/asset/images/process/fanatical-support-illustration.webp" alt="Process" className="img-fluid" />
        </div>
      </div>
      <div className="col-lg-7 v-center order2">

                     <div id="accordion" className="accordion">
          <div className="card-1">
            <div className="card-header" id="faq1">
              <button className="btn btn-link btn-block text-left card-title" type="button" data-toggle="collapse" data-target="#collapse-a" aria-expanded="true" aria-controls="collapse-a">
                How do you ensure smooth team integration and onboarding?
              </button>
            </div>
            <div id="collapse-a" className="card-body collapse show" aria-labelledby="faq1" data-parent="#accordion">
            <p>
               Skylight’s tried and tested engagement model of team extension has been refined over the last 10 years. We make sure we are not limited by the distance, time zone differences, and communication fluency that come with remote resources.
            </p>

            <p>
                If the client’s team is not used to working with remote talent, it may take some time to work out processes and learn best practices. That's why we start team integration by assigning a Technical Lead (sometimes local to the client’s location), a project manager, and a customer experience manager.
            </p>

            <p>
             Tech lead shepherds our development team to execute quality software on time.

            A local project manager helps you transition into remote working environment smoothly.
            </p>

            <p>
                Customer experience managers run a continuous feedback cycle on both ends to look for whatever could go wrong. They keep an eye on 15 project success parameters that we have defined to make sure all things are running smoothly.
            </p>
            <p>
                Our team works with you for a minimum of two weeks. Individual new hiree onboarding is replaced with full team onboarding from your side.
            </p>
        </div>
          </div>

          <div className="card-1">
            <div className="card-header" id="faq2">
              <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-b" aria-expanded="true" aria-controls="collapse-b">
                What communication processes do you follow to ensure successful remote collaboration?
              </button>
            </div>
            <div id="collapse-b" className="card-body collapse " aria-labelledby="faq2" data-parent="#accordion">
            
            <p>
              We hear frequently from prospective clients that it takes forever to release new features, that users aren't adopting products, and that finished work hasn't met their expectations.
            </p>

            <p>
                The solution: Communication, lots of it. We build teams with a focus on collaboration, consistent communication, and transparency in working toward a shared goal: a great product.
            </p>

            <p>
                Constant communication ensures there are absolutely no surprise breaks in execution. We use video calls, daily stand-ups, one-on-one check-ins and (if possible) a once a year “retreat” where everyone can get some face time.
            </p>

            <p>
                Our fully integrated team is self-managed and operates autonomously    
            </p>

            <p>
                Skylight team integrates into your team, participating in standup and scrum meetings, weekly demos, weekly retrospectives.    
            </p> 

            <p>
                We do daily stand-ups where everyone gets on a video chat and tells you what they are working on that day and the previous day. When you’ve got people working for you in multiple time zones, this can be challenging. But it is crucial to the success of your team.    
            </p>

            <p>
                The Agile methodology calls for each contributor to go around, talk about what they’ve been working on, what they will be working on, estimate how long it’s going to take them, whether there are any critical blockers that could cause delay, and what their bandwidth looks like. These stand-ups are rigorously tracked by the Tech Lead.
            </p>        
              
            </div>
          </div>
          <div className="card-1">
            <div className="card-header" id="faq3">
              <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-c" aria-expanded="true" aria-controls="collapse-c">
                Who will own the intellectual property?
              </button>
            </div>
            <div id="collapse-c" className="card-body collapse " aria-labelledby="faq3" data-parent="#accordion">
              <p>
                As a client, you will own all the intellectual property of all paid-for work. We provide an NDA to protect confidentiality. All our team members sign a strict contract to protect your IP.
            </p>                       
            </div>
          </div>
        </div>

      </div>
    </div>
    <div className="row upset justify-content-center mt60">
      <div className="col-lg-7 v-center order2">

                    <div id="accordion" className="accordion">
          <div className="card-1">
            <div className="card-header" id="faq1">
              <button className="btn btn-link btn-block text-left card-title" type="button" data-toggle="collapse" data-target="#collapse-a" aria-expanded="true" aria-controls="collapse-a">
                What does your development process look like?
              </button>
            </div>
            <div id="collapse-a" className="card-body collapse show" aria-labelledby="faq1" data-parent="#accordion">
            <p>
               1) Test Cases Driven User Stories for Clear Requirements -
When our engagement with the client starts we help them create detailed user stories and scope out the next few sprints.
            </p>

            <p>
                2) Intense Sprint Planning <br/>
                In order to execute projects on time, you need to plan sprints as much as possible.
            </p>

            <p>
                3) Iterative Delivery<br/>
                Typically, in an agile development process, we will divide the implementation process into several checkpoints rather than a single deadline. They are called iterations and are part of each sprint.
            </p>

            <p>
                4) Documentation<br/>
                We document everything from application and code level architecture decisions, to live user stories document, to design focused UX/UI/Design System documents.
            </p>

            <p>
                5) Constant Communication and Retrospective<br/>
                Stand-Up Each workday begins with a brief team stand-up meeting to discuss what we did yesterday, and what we plan to do today.
            </p>

            <p>
                6) Code review<br/>
                A successful peer review strategy for code review requires a balance between strictly documented processes and a non-threatening, collaborative environment.
            </p>

            <p>
                7) Integrating QA in the development process<br/>
We have gotten much better about integrating QA in our development process. We used to loop QA in after our code was pushed to the master branch, which was clunky.
Now our QA engineers will identify and create a test plan as soon as we begin working on the next sprint. As initial development nears completion, an engineer and a QA engineer will run through test scenarios together.
            </p>

            <p>
                8) Post-release<br/>
It’s important to circle back and review how the process went once you’re done, be it a success or failure.
            </p>
        </div>
          </div>

          <div className="card-1">
            <div className="card-header" id="faq2">
              <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-b" aria-expanded="true" aria-controls="collapse-b">
                What is KPI driven development?
              </button>
            </div>
            <div id="collapse-b" className="card-body collapse " aria-labelledby="faq2" data-parent="#accordion">
            
            <p>
              After all, we are a software company and we use technology to make collaboration work. The whole company is run through several tools, many of them proprietary, to help make fully integrated and self-managed teams operate autonomously.
            </p>

            <p>
                All top athletes have great coaches and use comprehensive data and analytics to help tune their performance. We believe all top performers can use the same data and analytics to help them get even better.
            </p>

            <p>
                As a result, we've developed a data-driven productivity app—for how our team works. It effortlessly collects more than 20 data points and provides analytics that enables individuals and teams to use real data on how they work to bring their performance to another level.
            </p>

            <p>
                In alternative weekly retrospectives meetings, we discuss the developer performance dashboard. This has all the information about the overall status of your project, key milestone dates, sprint plans, productivity of developers, velocity of developers, story points worked on developers, complex tasks worked by developers etc.    
            </p>         
              
            </div>
          </div>
          <div className="card-1">
            <div className="card-header" id="faq3">
              <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-c" aria-expanded="true" aria-controls="collapse-c">
                How does risk free trial period work? What is Skylight Guarantee?
              </button>
            </div>
            <div id="collapse-c" className="card-body collapse " aria-labelledby="faq3" data-parent="#accordion">
              <p>
                We know that if client’s project launches smoothly, they’ll come back for more. We're willing to over-invest in guaranteeing results, rather than under-invest to make our financial reports look pretty in the short-run.
            </p>

            <p>
                We offer a risk-free trial period of up to two weeks. You will only have to pay if you are happy with the development team and wish to continue.
            </p>

            <p>
                This is a good way to ensure that the freelance developer is a good fit. If you don’t find them to be extraordinary, you will not be charged and to make sure your time isn't wasted we will assign someone to guarantee the work is done for free.
            </p>

            <p>
                Skylight maintains a variety of insurance to protect and satisfy company-level obligations for our enterprise partners.
            </p>

            <p>
                With other platforms client’s IP and their security isn't as safe. And reliability, responsibility, and long term commitment of freelancers are questionable.

            </p>

                       
            </div>
          </div>
        </div>

      </div>
      <div className="col-lg-4 v-center order1">
        <div className="image-block1">
          <img src="/asset/images/process/bespoke-training.webp" alt="Process" className="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</section>
{/*End Process*/}

   {/*Start Why Choose*/}
   <section className="service-block pad-tb">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="common-heading ptag">
            <h2> What you get</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-sm-6 mt30  wow fadeIn" data-wow-delay=".2s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/process/top-talent.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>Top Talent</h4>
              <p>
                    Thoroughly vetted team of talent that is incentivized to deliver.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay=".5s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/process/manage.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>
                Managed Process
              </h4>
              <p>
                Your dedicated Tech Lead does all the heavy-lifting of managing the project team so you can focus on what’s important.
            </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay=".8s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/process/report.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>
                Reporting
            </h4>
              <p>
                Monitor the progress and health of your project based on key attributes like milestone tasks, bugs, blockers, and team happiness.
            </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.1s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/process/directa.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>
                Direct Access to Experts

            </h4>
            <p>
                Get expert advice right when you need it from any agency in our network, whether it’s a data scientist, architect, UX designer, or niche technology expert.

            </p>

            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.4s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/process/project.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>
             Project Specs and Scoping

            </h4>
              <p>
                Our business analysis team will do all the work of gathering crucial project information from key stakeholders to deliver technical requirements that developers understand.
            </p>

            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.7s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/stesting/sperformance-testing.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>
                Code Documentation and Transition
            </h4>
              <p>
               We’ll provide everything you need to seamlessly hand off new software and train your internal teams.

           </p>
            </div>
          </div>
        </div>
      </div>
      <div className="-cta-btn mt70">
        <div className="free-cta-title v-center wow zoomInDown" data-wow-delay="1.8s">
          <p>Let's Start a <span>New Project</span> Together</p>
          <Link to="/get-quote" className="btn-main bg-btn2 lnk">Inquire Now
          <i className="fas fa-chevron-right fa-icon" />
          <span className="circle" />
          </Link>
        </div>
      </div> 
    </div>
  </section>
  {/*End Why Choose*/}
{/*Start Why Choose*/}
<section className="service-block pad-tb ">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="common-heading ptag">
        
          <h2>
          How we develop
          web apps using Agile

          </h2>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-3 col-sm-6 mt30  wow fadeIn" data-wow-delay=".2s">
        <div className="s-block wide-sblock">
          <div className="s-card-icon"><img src="/asset/images/icons/teama.svg" alt="service" className="img-fluid" /></div>
          <div className="s-block-content">
            <h4>Sprint planning</h4>
            <p>
            Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 mt30 wow fadeIn" data-wow-delay=".5s">
        <div className="s-block wide-sblock">
          <div className="s-card-icon"><img src="/asset/images/icons/link.svg" alt="service" className="img-fluid" /></div>
          <div className="s-block-content">
            <h4>Tech architecture</h4>
            <p>
            We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 mt30 wow fadeIn" data-wow-delay=".8s">
        <div className="s-block wide-sblock">
          <div className="s-card-icon"><img src="/asset/images/icons/tech.svg" alt="service" className="img-fluid" /></div>
          <div className="s-block-content">
            <h4>
            Stand-ups 
            </h4>
            <p>
            Stand ups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.1s">
        <div className="s-block wide-sblock">
          <div className="s-card-icon"><img src="/asset/images/icons/hi.svg" alt="service" className="img-fluid" /></div>
          <div className="s-block-content">
            <h4>
            Code reviews
            </h4>
            <p>
            Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* <div className="-cta-btn mt70">
      <div className="free-cta-title v-center wow zoomInDown" data-wow-delay="1.8s">
        <p>Let's Start a <span>New Project</span> Together</p>
        <Link to="/get-quote" className="btn-main bg-btn2 lnk">Inquire Now
        <i className="fas fa-chevron-right fa-icon" />
        <span className="circle" />
        </Link>
      </div>
    </div> */}

  </div>
</section>
{/*End Why Choose*/}

{/*Start work-category*/}
<section className="work-category pad-tb">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="common-heading ptag">
          <span>We Have Worked Across Multiple Industries</span>
          <h2>Industries We Serve</h2>
        </div>
      </div>
    </div>
    <div className="row mt30">
      <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="0.3s"> <div className="industry-workfor hoshd"><img src="/asset/images/icons/travel-case.svg" alt="img" /> <h6>Software</h6> </div></div>
      <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="0.5s"> <div className="industry-workfor hoshd"><img src="/asset/images/icons/video-tutorials.svg" alt="img" /> <h6>Education</h6> </div></div>
      <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="0.7s"> <div className="industry-workfor hoshd"><img src="/asset/images/icons/taxi.svg" alt="img" /> <h6>Transport</h6> </div></div>
      <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="0.9s"> <div className="industry-workfor hoshd"><img src="/asset/images/icons/event.svg" alt="img" /> <h6>Retail</h6> </div></div>
      <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="1.1s"> <div className="industry-workfor hoshd"><img src="/asset/images/icons/smartphone.svg" alt="img" /> <h6>eCommerce</h6> </div></div>
      <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="1.3s"> <div className="industry-workfor hoshd"><img src="/asset/images/icons/mobile-app.svg" alt="img" /> <h6>Manufacturing</h6> </div></div>
      <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="1.5s"> <div className="industry-workfor hoshd"><img src="/asset/images/icons/healthcare.svg" alt="img" /> <h6>Sports</h6> </div></div>
      <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="1.7s"> <div className="industry-workfor hoshd"><img src="/asset/images/icons/money-growth.svg" alt="img" /> <h6>Finance</h6> </div></div>
    </div>
  </div>
</section>
{/*End  work-category*/}

</div>

    )
}

export default HowItWorks;