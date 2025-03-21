import "./InfoCard.css"
import { FaPencilAlt } from "react-icons/fa";
const InfoCard = () => {
  return (
    <div className='InfoCard'>
        <div className="infoHead">
            <h4>Your Info</h4>
            <div>
            <FaPencilAlt style={{fontSize:"20px"}}/>
            </div>
        </div>

        <div className="info">
            <span>
                <b>Status</b>
            </span>
            <span> in Relationship</span>
        </div>

        <div className="info">
            <span>
                <b>Lives in</b>
            </span>
            <span> Multan</span>
        </div>

        <div className="info">
            <span>
                <b>Works At</b>
            </span>
            <span> Facebook</span>
        </div>
        <button className="button logout-button">
            Logout
        </button>
    </div>
  )
}

export default InfoCard