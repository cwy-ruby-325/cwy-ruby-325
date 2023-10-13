import NavBar from '../components/Desktop/NavBar_Desktop';
import Footer from '../components/Footer';
import ProjectFeatureOdd from '../components/ProjectFeature_Odd';
import ProjectFeatureEven from '../components/ProjectFeature_Even';
import { Detail } from '../interfaces/Detail_Interface';

const ProjectDetail: React.FC<Detail> = ({ ...data }) => {
  const imageSrcHeader = new URL(data.imageHeader, import.meta.url).href;
  const imageSrc1 = new URL(data.image1, import.meta.url).href;
  const imageSrc2 = new URL(data.image2, import.meta.url).href;
  const videoSrc = new URL(data.video, import.meta.url).href;

  return (
    <div className="project-detail">
      <div className="main-content">
        <div className="project-detail-header-img">
          <div
            className="project-detail-header-img-frame"
            style={{ backgroundImage: `url(${imageSrcHeader})` }}
          >
            <h1
              className="project-detail-header"
              style={{
                color: data.headerColor !== '' ? data.headerColor : '#5c3d2e',
              }}
            >
              {data.header}
            </h1>
          </div>
        </div>
        <div className="project-detail-row-1 row">
          <div className="project-detail-content-row-1 col-12 col-md-8">
            <div className="project-detail-role-platform row">
              <div className="project-detail-role col-6">
                <h2 className="project-detail-title">My Role</h2>
                <ul className="project-detail-text">
                  {data.myRoles.map((myRole, index) => (
                    <li key={index}>{myRole.item}</li>
                  ))}
                </ul>
              </div>
              <div className="project-detail-platform col-6">
                <h2 className="project-detail-title">Platform</h2>
                <ul className="project-detail-text">
                  {data.platforms.map((Platform, index) => (
                    <li key={index}>
                      <a href={Platform.link} className="textlink-body" target='_blank'>
                        {Platform.item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="project-detail-background">
              <h2 className="project-detail-title">Background</h2>
              <p className="project-detail-text">{data.backgroundInfo}</p>
            </div>
          </div>
          <div className="project-detail-img-row-1 col-12 col-md-4">
            <div
              className="project-detail-img-frame-row-1"
              style={{ backgroundImage: `url(${imageSrc1})` }}
            ></div>
          </div>
        </div>
        {(data.problems.length > 0 || data.solutions.length > 0) && (
          <div className="project-detail-row-2 row">
            <div className="project-detail-img-row-2 col-12 col-md-4">
              <div
                className="project-detail-img-frame-row-2"
                style={{ backgroundImage: `url(${imageSrc2})` }}
              ></div>
            </div>

            <div className="project-detail-content-row-2 col-12 col-md-8">
              {data.problems.length > 0 && (
                <div className="project-detail-problem">
                  {<data className="problems length"></data>}
                  <h2 className="project-detail-title">Problems</h2>
                  <ul className="project-detail-text">
                    {data.problems.map((Problem, index) => (
                      <li key={index}>{Problem.item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {data.solutions.length > 0 && (
                <div className="project-detail-solution">
                  <h2 className="project-detail-title">Solutions</h2>
                  <ul className="project-detail-text">
                    {data.solutions.map((Solution, index) => (
                      <li key={index}>{Solution.item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
        {data.features.map((Feature, index) =>
          index % 2 === 0 ? (
            <ProjectFeatureOdd key={index} {...Feature} />
          ) : (
            <ProjectFeatureEven key={index} {...Feature} />
          )
        )}
        {data.video === '' ? null : (
          <div className="project-detail-video">
            <iframe
              width="560"
              height="315"
              src={videoSrc}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        )}
        <div className="back-to-projects">
          <div className="back-to-projects-img-frame">
            <a href="/Projects" className="textlink">
              <h2 className="back-to-projects-header">Back to Projects</h2>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
