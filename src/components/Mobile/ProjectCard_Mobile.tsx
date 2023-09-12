import { Card } from '../../interfaces/Card_Interface';
import { useEffect, useRef } from 'react';

const ProjectCardMobile: React.FC<Card> = ({ ...data }) => {
  const imageSrc = new URL(data.image, import.meta.url).href;
  const imageRef = useRef<any>(null);

  useEffect(() => {
    const handleResize = () => {
      if (imageRef.current) {
        const imageWidth = imageRef.current.offsetWidth;
        imageRef.current.style.height = `${imageWidth}px`;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set the height on component mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="col-12">
      <div className="project-card project-card-mobile">
        <div className="card-row-1-mobile">
          <h4 className="card-title">{data.title}</h4>
          <div className="card-tab-group-mobile">
            {data.labels.map((label, index) => (
              <span
                key={index}
                className="card-tab-mobile caption"
                style={{ backgroundColor: label.color }}
              >
                {label.text}
              </span>
            ))}
          </div>
        </div>
        <div className="card-row-2-mobile">
          <div className="card-body">
            <div className="row column-gap-3">
              <p className="card-text col p-0">{data.text}</p>
              <div className="card-image col-4 p-0 d-flex justify-content-end">
                <img
                  ref={imageRef}
                  src={imageSrc}
                  className="card-img"
                  alt="..."
                />
              </div>
            </div>
            {data.isButton ? (
              <div className="card-button">
                <a
                  href={data.link}
                  className="button button-sm button-secondary"
                >
                  View More
                  <img src="/ButtonIcon/chevrons-right.svg" />
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardMobile;
