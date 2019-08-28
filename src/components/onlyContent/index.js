import React from "react";
import Title from "../../assets/styled/title";
import Button from "../../assets/styled/button";
import { HightLight, Text } from "../../assets/styled/text";
import Logos from "./logos";

const OnlyContent = () => (
  <div className="onlyContent row">
    <div className="col-xs-12">
      <Title>
        Lorem Ipsum <HightLight>simply</HightLight> dummy text of the printing
        and typesetting
      </Title>

      <Text>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a.
      </Text>

      <div className="containerButton col-xs-12 col-sm-5 col-md-5">
        <Button width="100%" margin="0 auto" spacing="0.5rem 1rem">
          <Text color="#fff">Lorem Ipsum industry's</Text>
        </Button>
      </div>

      <Text weight="bold">dummy text of the printing and typesetting</Text>

      <Logos />
    </div>
  </div>
);

export default OnlyContent;
