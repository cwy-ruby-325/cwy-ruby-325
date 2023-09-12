import { Feature } from "../interfaces/Feature_Interface";

const ProjectFeatureOdd:React.FC<Feature> = ({...data}) =>{
    const imageSrc = new URL(data.image, import.meta.url).href
    return <div className="project-feature row">
        <div className="feature-content-odd col-12 col-md-7">
            <h3 className="feature-title">{data.title}</h3>
            <p className="feature-text">
                {data.text}
            </p>
        </div>
        <div className="feature-img-odd col-12 col-md-5">
            <div className="feature-img-frame" style={{backgroundImage:`url(${imageSrc})`}}></div>
        </div>
    </div>
}

export default ProjectFeatureOdd;