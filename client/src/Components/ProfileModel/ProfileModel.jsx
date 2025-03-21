import { Modal } from "@mantine/core";

function ProfileModal({ opened, close }) {
    return (
        <>
            <Modal opened={opened} onClose={close} title="Edit" size="xl">
                <form className="infoForm">
                    <h1>Your Info</h1>
                    <div>
                        <input
                            type="text"
                            className="infoInput"
                            name="firstname"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            className="infoInput"
                            name="lastname"
                            placeholder="Last Name"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            className="infoInput"
                            name="worksat"
                            placeholder="Works At"
                        />
                    </div>
                    <div>
                    <input
                            type="text"
                            className="infoInput"
                            name="livesin"
                            placeholder="Lives In"
                        />
                        <input
                            type="text"
                            className="infoInput"
                            name="country"
                            placeholder="Country"
                        />
                    </div>
                    <div>
                    <input
                            type="text"
                            className="infoInput"
                            name="relationshipstatus"
                            placeholder="Relationship Status"
                        />
                        
                    </div>
                    <div>
                        Profile Image
                        <input type="file" name="profileImg"/>                        
                        Cover Image
                        <input type="file" name="coverImg"/>
                    </div>
                    <button className="button infoButton">Update</button>
                </form>
            </Modal>
        </>
    );
}

export default ProfileModal;
