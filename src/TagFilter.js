import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Button } from "./components/Button";
import { nanoid } from "nanoid";
import styled from "styled-components";

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

export const TagFilter = React.memo(
  ({ tasks, onPickTag, pageClass, currentFilter }) => {
    const uniqtags = new Set(tasks.map((task) => task.tag));
    const tags = Array.from(uniqtags).map((uniqtag) => {
      return { id: nanoid(), tagname: uniqtag };
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

TagFilter.propTypes = {
  tasks: PropTypes.array,
  pageClass: PropTypes.string,
  currentFilter: PropTypes.string,
  onPickTag: PropTypes.func
};
