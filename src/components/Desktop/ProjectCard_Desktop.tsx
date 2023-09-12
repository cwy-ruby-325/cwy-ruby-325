import {Card} from '../../interfaces/Card_Interface'

const ProjectCardDesktop:React.FC<Card> = ({...data}) =>{
    const imageSrc = new URL(data.image, import.meta.url).href
    return <div className="col-sm-6 col-md-4">
    <div className="card project-card">
        <div className="card-image">
            <img src={imageSrc} className="card-img-top" alt="..." />
        </div>
        <div className="card-body card-body-desktop d-flex flex-column">
            <div className="card-tab-group-desktop">                
                {data.labels.map(label=>(
                    <span className="card-tab-desktop caption" style={{ backgroundColor: label.color }}>{ label.text }</span>
                ))}
            </div>
            <div className="card-text-group">
                <h4 className="card-title">{ data.title }</h4>
                <p className="card-text">{ data.text }</p>
            </div>
            {data.isButton? 
                <div className="card-button mt-auto">
                    <a href={ data.link } className="button button-sm button-secondary">View More<img src="/ButtonIcon/chevrons-right.svg" /></a>
                </div>
                : null
            }
        </div>
    </div>
</div>;
}

export default ProjectCardDesktop;