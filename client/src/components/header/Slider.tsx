import React, { useState, useEffect } from "react";
import { Section, SliderWrapper } from "../../style/slider";
import { sleep } from "../../library/sleep";

function Slider() {
  return (
    <Section>
      <SliderWrapper>
        {/* <img src={`./images/slide-0${slideNumber}.jpg`} alt="" /> */}
      </SliderWrapper>
    </Section>
  );
}

export default Slider;
