import React, { useState } from "react";
import styled from "styled-components";
import { Box, Flex, Text, Link } from "rimble-ui";
import { ArrowDropDown, ArrowDropUp } from "@rimble/icons/es/md";

export interface AccordionProps {
  selected?: boolean;
  expanded?: boolean;
  heading?: React.ReactNode;
  content?: React.ReactNode;
}

const StyledAccordion = styled.div`
  color: ${props => props.theme.colors.text};
  border: none;
`;

export const Accordion: React.SFC<AccordionProps> = props => {
  const [expanded, setExpanded] = useState(props.expanded);

  const clickHeading = e => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  return (
    <StyledAccordion>
      <Link onClick={clickHeading}>
        <Flex justifyContent="space-between">
          {props.heading}
          {expanded ? <ArrowDropUp /> : <ArrowDropDown />}
        </Flex>
      </Link>
      {expanded && <Box>{props.content}</Box>}
    </StyledAccordion>
  );
};

export default Accordion;
