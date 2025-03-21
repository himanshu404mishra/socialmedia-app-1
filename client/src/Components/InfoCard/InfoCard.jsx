import "./InfoCard.css"
import { FaPencilAlt } from "react-icons/fa";
import ProfileModal from "../ProfileModel/ProfileModel";

import { useDisclosure } from '@mantine/hooks';


const InfoCard = () => {
  const [opened, { open, close }] = useDisclosure(false);
    
  return (
    <div className='InfoCard'>
        <div className="infoHead">
            <h4>Your Info</h4>
            <div>
                <FaPencilAlt onClick={open}  style={{fontSize:"20px"}}/>
                <ProfileModal opened={opened} close={close}/>
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