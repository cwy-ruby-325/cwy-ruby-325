import HobbyCardGroup from '../components/HobbyCard_Group';
import ProjectCardDesktop from '../components/Desktop/ProjectCard_Desktop';
import ProjectCardMobile from '../components/Mobile/ProjectCard_Mobile';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { Card } from '../interfaces/Card_Interface';
import { ProjectCardData_Desktop } from '../data/ProjectCardData_Desktop';
import { ProjectCardData_Mobile } from '../data/ProjectCardData_Mobile';

function Home() {
  const CardDataDesktop: Card[] = ProjectCardData_Desktop;
  const CardDataMobile: Card[] = ProjectCardData_Mobile;
  return (
    <div className="home">
      <div className="main-content">
        <div className="welcome" id="Welcome">
          <h1 className="welcome-title">Hello</h1>
          <p className="welcome-text">
            I am Ruby Chan, a passionate, cheerful girl from Hong Kong. I enjoy
            taking on challenges and trying new things. <br />
            <span>
              Although I can be a bit introverted at times, I am always eager to
              share my experiences and insights. <br />
            </span>
            I warmly welcome anyone who wishes to chat and connect.
          </p>
          <a href="/#Contact" className="button button-primary button-lg">
            Chat with me <img src="/ButtonIcon/message-circle.svg" alt="" />
          </a>
        </div>
        <div className="about row" id="About">
          <div className="about-img col-12 col-md-4">
            <div className="about-img-frame">
              <h2 className="about-title-mobile">About me</h2>
            </div>
          </div>
          <div className="about-content col-12 col-md-8">
            <h2 className="about-title-desktop">About me</h2>
            <p className="about-text">
              I began my academic journey and honed my design skills at the
              Community College of the City University and later transitioned to
              the University of the West of England. However, I am keen to
              explore diverse industries to broaden my horizons, rather than
              pursuing media production. Since my graduation in 2019, I have
              worked as a tour escort for two years and a dance studio
              receptionist for one year, developing valuable skills in
              presentation and customer service. Unfortunately, the COVID-19
              pandemic repeatedly disrupted my career path.
              <br />
              <br />
              To bolster my competitiveness in the job market, I proactively
              enrolled in different boot camps focused on front-end web
              development, UI/UX design, and digital marketing. These immersive
              experiences have equipped me with adaptability and versatility.
              Today, I eagerly await opportunities to apply and develop my skills 
              further, anticipating a future where I can.
              <br />
              <br />
              <span className="subtitle">
                "In order to be irreplaceable one must always be different." --
                Coco Chanel
              </span>
            </p>
          </div>
        </div>
        <div className="hobby row">
          <div className="hobby-content col-12 col-md-8">
            <h2 className="hobby-title-desktop">Hobbies</h2>
            <HobbyCardGroup />
          </div>
          <div className="hobby-img col-12 col-md-4">
            <div className="hobby-img-frame">
              <h2 className="hobby-title-mobile">Hobbies</h2>
            </div>
          </div>
        </div>
        <div className="project" id="Projects">
          <h2 className="project-title">Projects</h2>
          <div className="project-group-desktop row">
            {CardDataDesktop.slice(0, 3).map((data, index) => (
              <ProjectCardDesktop key={index} {...data} />
            ))}
          </div>
          <div className="project-group-mobile">
            {CardDataMobile.slice(0, 3).map((data, index) => (
              <ProjectCardMobile key={index} {...data} />
            ))}
          </div>
          <a href="/Projects" className="button button-primary button-md">
            View All <img src="/ButtonIcon/grid.svg" alt="" />
          </a>
        </div>
        <div className="contact" id="Contact">
          <h2 className="contact-title">Contact Me</h2>
          <h3 className="contact-subtitle">
            Feel free to get in touch with me
          </h3>
          <div className="contact-group row">
            <ContactForm />
            <div className="contact-content col-12 col-md-6">
              <div className="contact-intro title">
                Feel free to reach out if you are interested in my profile.{' '}
                <br />
                Don't hesitate! <br />
                I'm eager to grow and seize opportunities.
              </div>
              <div className="contact-info-group">
                <div className="row">
                  <div className="contact-info col-12 col-md-6" id="EmailInfo">
                    <div className="contact-info-title title">
                      <img
                        src="/ButtonIcon/mail.svg"
                        alt=""
                        className="contact-info-icon"
                      />
                      Email
                    </div>
                    <p className="contact-info-text">
                      <a
                        href="mailto:cwy.ruby.325@gmail.com"
                        className="textlink-body"
                        target="_blank"
                      >
                        cwy.ruby.325@gmail.com
                      </a>
                    </p>
                  </div>
                  <div className="contact-info col-12 col-md-6" id="PhoneInfo">
                    <div className="contact-info-title title">
                      <img
                        src="/ButtonIcon/whatsapp.svg"
                        alt=""
                        className="contact-info-icon"
                      />
                      Whatsapp
                    </div>
                    <p className="contact-info-text">
                      <a
                        href="https://wa.me/85291594051"
                        className="textlink-body"
                        target="_blank"
                      >
                        +852 91594051
                      </a>
                    </p>
                  </div>
                  <div
                    className="contact-info col-12 col-md-6"
                    id="LinkedInInfo"
                  >
                    <div className="contact-info-title title">
                      <img
                        src="/ButtonIcon/linkedin.svg"
                        alt=""
                        className="contact-info-icon"
                      />
                      Linkedin
                    </div>
                    <p className="contact-info-text">
                      <a
                        href="https://www.linkedin.com/in/cwy-ruby/"
                        className="textlink-body"
                        target="_blank"
                      >
                        linkedin.com/in/cwy-ruby
                      </a>
                    </p>
                  </div>
                  <div className="contact-info col-12 col-md-6" id="GithubInfo">
                    <div className="contact-info-title title">
                      <img
                        src="/ButtonIcon/github.svg"
                        alt=""
                        className="contact-info-icon"
                      />
                      Github
                    </div>
                    <p className="contact-info-text">
                      <a
                        href="https://github.com/cwy-ruby-325"
                        className="textlink-body"
                        target="_blank"
                      >
                        github.com/cwy-ruby-325
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
