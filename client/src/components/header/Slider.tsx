import React, { useState, useEffect } from "react";
import { Section, SliderWrapper } from "../../style/slider";
import { sleep } from "../../library/sleep";

function Slider() {
  const [slideNumber, setSlideNumber] = useState(1);

  useEffect(() => {
    sleep(1000).then();
    setSlideNumber((prev) => prev + 1);
  }, [slideNumber]);
  return (
    <Section>
      <SliderWrapper>
        <img src={`./images/slide-0${slideNumber}.jpg`} alt="" />
      </SliderWrapper>
    </Section>
  );
}

export default Slider;
