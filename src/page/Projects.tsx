import NavBar from '../components/NavBar';
import ProjectCardViewDesktop from '../components/Desktop/ProjectCardView_Desktop';
import ProjectCardViewMobile from '../components/Mobile/ProjectCardView_Mobile';
import Footer from '../components/Footer';
import { Card, Label } from '../interfaces/Card_Interface';
import { useState, ChangeEvent, useEffect } from 'react';
import { ProjectCardData_Desktop } from '../data/ProjectCardData_Desktop';
import { ProjectCardData_Mobile } from '../data/ProjectCardData_Mobile';

function Projects() {
  // CardData Desktop
  const [selectedLabel, setSelectedLabel] = useState<string>('');

  const handleLabelChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLabel(event.target.value);
  };

  const labelMap: { [key: string]: string } = {
    'UX/UI': 'UX/UI',
    'Front End Development': 'Frontend',
    'Graphic Design': 'Graphic',
    'Digital Marketing': 'DM',
    'Video & Animation': 'Video',
    '': '',
  };

  const CardDataDesktop: Card[] = ProjectCardData_Desktop;

  const filterOptions: string[] = [
    ...new Set(
      CardDataDesktop.flatMap((card) => card.labels.map((label) => label.text))
    ),
  ];

  const filteredDataDesktop: Card[] = CardDataDesktop.filter((item: Card) =>
    item.labels.some((label: Label) =>
      label.text?.toLowerCase().includes(selectedLabel?.toLowerCase())
    )
  );

  // CardData Mobile
  const CardDataMobile: Card[] = ProjectCardData_Mobile;

  const filteredDataMobile: Card[] = CardDataMobile.filter((item: Card) =>
    item.labels.some((label: Label) =>
      label.text?.toLowerCase().includes(labelMap[selectedLabel]?.toLowerCase())
    )
  );

  return (
    <div className="projects">
      <div className="main-content">
        <div className="projects-img">
          <div className="projects-img-frame">
            <h1 className="projects-header">Projects</h1>
          </div>
        </div>
        <div className="projects-filter">
          <h2>
            <span>Looking for </span>
            <select value={selectedLabel} onChange={handleLabelChange}>
              <option value="">All Services</option>
              {filterOptions.map((label, index) => (
                <option className="d-block" key={index} value={label}>
                  {label}
                </option>
              ))}
            </select>
            <span> Case Studies</span>
          </h2>
        </div>
        <div className="project-cardview-desktop">
          <ProjectCardViewDesktop data={filteredDataDesktop} />
        </div>
        <div className="project-cardview-mobile">
          <ProjectCardViewMobile data={filteredDataMobile} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
