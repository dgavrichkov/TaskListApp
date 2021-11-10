import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

export const TagFilter = React.memo(
  ({ tasks, onPickTag, pageClass, currentFilter }) => {
    const uniqtags = new Set(tasks.map((task) => task.tag));
    const tags = Array.from(uniqtags).map((uniqtag) => {
      return { id: nanoid(), tagname: uniqtag };
    });

    useEffect(() => {
      // console.log("filter rendered");
    });

    const tagElems = tags.map((tag) => {
      return (
        <button
          type="button"
          className="tagfilter__item"
          key={tag.id}
          onClick={() => {
            onPickTag(tag.tagname);
          }}
        >
          {tag.tagname}
        </button>
      );
    });

    return (
      <div className={`tagfilter ${pageClass}`}>
        {
          <Fragment>
            <div className="tagfilter__title">
              Текущий фильтр - {currentFilter}
            </div>
            <button
              type="button"
              className="tagfilter__item tagfilter__item--clear"
              onClick={() => {
                onPickTag("all");
              }}
            >
              Clear filter
            </button>
          </Fragment>
        }
        {tagElems}
      </div>
    );
  }
);

TagFilter.propTypes = {
  tasks: PropTypes.array,
  pageClass: PropTypes.string,
  currentFilter: PropTypes.string,
  onPickTag: PropTypes.func
};
