import styled from "styled-components";
import bg from "../assets/parchment-bg.jpg";
import { defaultBorderRadius } from "../../common/styles/mixins";

export default styled.section`
  ${defaultBorderRadius}
  background: url(${bg});
  min-height: 300px;
  background-size: cover;
  max-height: 1000px;
`;
