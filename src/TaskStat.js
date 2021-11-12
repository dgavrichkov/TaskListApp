import React from "react";
import styled from "styled-components";

const StyledWrap = styled.div`
  border-radius: 14px;
  box-shadow: ${(props) => props.theme.shadows.button};
  padding: 14px;
  p {
    font-size: 18px;
    margin: 0;
    padding: 0;
    &:not(:last-child) {
      margin-bottom: 14px;
    }
  }
`;

export const TaskStat = ({ pageClass, countAllTasks, countDoneTasks }) => {
  return (
    <StyledWrap className={`${pageClass}`}>
      <p>Всего - {countAllTasks}</p>
      <p>Сделано - {countDoneTasks}</p>
    </StyledWrap>
  );
};
