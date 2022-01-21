import React, { useState } from "react";
import { Modal } from ".";
import { Billboard, BillboardContainer, Button, Disclaimer } from "../styles";

const BillboardSection = () => {
  const [showModal, setShowModal] = useState(false);

  // Function to handle Modal...
  const openModal = () => setShowModal((prev) => !prev);

  return (
    <Billboard>
      <BillboardContainer>
        <h2>HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+</h2>
        <h1>Live TV Makes It Better</h1>
        <h3>
          Make the switch from cable. Get 75+ top channels on Hulu with your
          favorite live sports, news, and events - plus the entire Hulu
          streaming library. Access endless entertainment with Disney+ and live
          sports with ESPN+. All three for a new price of $69.99/month.
        </h3>
        <Disclaimer>
          <p>
            Make the switch from cable. Get 75+ top channels on Hulu with your
            favorite live sports, news, and events - plus the entire Hulu
            streaming library. Access endless entertainment with Disney+ and
            live sports with ESPN+. All three for a new price of $69.99/month.
          </p>
        </Disclaimer>
        <Button onClick={openModal} btnStyle="transparent" btnSize="lg">
          <u>View All Channels in Your Area</u>
        </Button>
      </BillboardContainer>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </Billboard>
  );
};

export default BillboardSection;
