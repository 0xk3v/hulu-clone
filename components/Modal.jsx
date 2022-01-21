import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import {
  CloseModalButton,
  ModalContainer,
  ModalContent,
  ModalWrapper,
} from "../styles";
import PropTypes from "prop-types";

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(100%)`,
  });

  const closeModal = (e) =>
    modalRef.current === e.target && setShowModal(false);

  return (
    <>
      {showModal && (
        <ModalContainer ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper>
              <ModalContent>
                <h1>Channels in your area</h1>
                <p>
                  Live TV is available for those live local, regional, and
                  national channels available in your area, which are subject to
                  change. Select channels may offer only on demand content.
                  Certain channels or content may not be available in all
                  locations or on all devices.
                </p>
              </ModalContent>
              <CloseModalButton
                aria-label="Close Modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </ModalContainer>
      )}
    </>
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
};

export default Modal;
