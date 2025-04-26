import './Modal.css'; 
function Modal({title, content, id = "exampleModal", link="", linkText="GitHub"}) {
    return (
        <div>
        {/* Button trigger modal */}
        <button type="button" className="btn btn-primary modal-button" data-bs-toggle="modal" data-bs-target={`#${id}`}>
            View Details
        </button>
    
        {/* Modal */}
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id={`${id}Label`}>{title}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                {content}
                <br></br>
                <a href={link} target="_blank" rel="noopener noreferrer">{linkText}</a>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Modal;