import React, {useEffect, useState} from "react";
import {Button} from "@material-ui/core";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const PosterModal = ({image, title, open, toggle}) => {
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    setModalOpen(open);
  }, [open]);
  return (
    <div>
      <Modal isOpen={modalOpen}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody style={{justifyContent: "center", alignSelf: "center"}}>
          <img src={image} alt={title} style={{height: "400px"}} />
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PosterModal;
