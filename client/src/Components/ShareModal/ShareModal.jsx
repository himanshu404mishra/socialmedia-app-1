import { Modal } from "@mantine/core";

import PostShare from "../PostShare/PostShare"

function ShareModal({ opened, close }) {
    return (
        <>
            <Modal opened={opened} onClose={close} title="Share" size="xl">
                <PostShare/>
            </Modal>
        </>
    );
}

export default ShareModal;
