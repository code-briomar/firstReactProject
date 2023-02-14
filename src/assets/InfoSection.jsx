import jujuSmith from "./juju.jpg"
function InfoSection(){
    return(
        <div className = "info-section">
            <h3>Juju Smith-Schuster</h3>
            <img src={jujuSmith}  className = "photo" alt = "Juju Smith-Schuster" />
            <p>NFL player</p>
            {/* //Website of the person */}
            <i>https://juju-smith-schuster.com</i>
            <div>
                <a href="mailto:juju-smith-schuster@juju.com" target="_blank">
                    <button className="btn-email">Email</button>
                </a>
                <a href="https://juju.com/linkedIn" target="_blank">
                    <button className="btn-linkedIn">LinkedIn</button>
                </a>
            </div> 
        </div>
    )
}

export default InfoSection