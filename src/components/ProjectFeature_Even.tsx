import { Feature } from "../interfaces/Feature_Interface";

const ProjectFeatureEven:React.FC<Feature> = ({...data}) =>{
    const imageSrc = new URL(data.image, import.meta.url).href
    return <div className="project-feature row">
        <div className="feature-img-even col-12 col-md-5">
            <div className="feature-img-frame" style={{backgroundImage:`url(${imageSrc})`}}></div>
        </div>
        <div className="feature-content-even col-12 col-md-7">
            <h3 className="feature-title">{data.title}</h3>
            <p className="feature-text">
                {data.text}
            </p>
        </div>
    </div>
}

export default ProjectFeatureEven;