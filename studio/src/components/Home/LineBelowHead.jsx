import { React, useState } from "react";
import {
  Wrapper,
  BelowSection,
} from "../../styles/components/Home/LineBelowHead.styled";

import Form from "react-bootstrap/Form";

const LineBelowHead = () => {
  const [switchState, setSwitchState] = useState(false);

  const handleSwitchChange = () => {
    setSwitchState(!switchState);
    console.log(switchState);
  };

  return (
    <Wrapper>
      <BelowSection>
        <i class="fa-regular fa-clock"></i>
        Opentime: Di. - Fr.: 07:00-13:00 und 15:00-18:30. Sa.: 07:30 - 12:30
        <Form>
          <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
            onChange={handleSwitchChange}
          />
        </Form>
      </BelowSection>
    </Wrapper>
  );
};

export default LineBelowHead;
