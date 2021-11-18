import React, { Fragment, FC } from "react";
import { Button } from "./components/Button";
import nextId from "react-id-generator";
import styled from "styled-components";
import { ITask } from "./types/types";

const StyledWrap = styled.div`
  align-self: start;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: start;
  padding: 14px;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.shadows.button};

  .item {
    margin: 10px;
    cursor: pointer;
    &--clear {
      width: 100%;
    }
  }
`;

interface FilterProps {
  tasks: ITask[];
  pageClass: string;
  currentFilter: string;
  onPickTag: (tag: string) => void;
}

export const TagFilter: FC<FilterProps> = React.memo(
  ({ tasks, onPickTag, pageClass, currentFilter }) => {
    const uniqtags = new Set(tasks.map((task: { tag: string }) => task.tag));
    const tags = Array.from(uniqtags).map((uniqtag) => {
      return { id: nextId(), tagname: uniqtag };
    });

    const tagElems = tags.map((tag) => {
      return (
        <Button
          type="button"
          className="item"
          key={tag.id}
          onClick={() => {
            onPickTag(tag.tagname);
          }}
        >
          {tag.tagname}
        </Button>
      );
    });

    return (
      <StyledWrap className={pageClass}>
        {
          <Fragment>
            <div className="tagfilter__title">
              Текущий фильтр - {currentFilter}
            </div>
            <Button
              type="button"
              className="item item--clear"
              onClick={() => {
                onPickTag("all");
              }}
            >
              Clear filter
            </Button>
          </Fragment>
        }
        {tagElems}
      </StyledWrap>
    );
  }
);
