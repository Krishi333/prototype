import { useState } from "react";
import PropTypes from "prop-types";

export default function ListGroup({ items, onSelectItem, title }) {
  // Keeps track of which list item is currently selected
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // If no items are passed, show a fallback message
  if (!items || items.length === 0) {
    return (
      <div className="container py-4">
        {title ? <h2 className="mb-3">{title}</h2> : null}
        <div className="alert alert-secondary m-0" role="status">
          Nothing to show.
        </div>
      </div>
    );
  }

  // Render the list group
  return (
    <div className="container py-4">
      {title ? <h2 className="mb-3">{title}</h2> : null}

      <ul className="list-group" role="listbox" aria-label={title || "Options"}>
        {items.map((item, index) => (
          <li
            key={item}
            role="option"
            aria-selected={selectedIndex === index}
            tabIndex={0}
            className={
              "list-group-item d-flex justify-content-between align-items-center " +
              (selectedIndex === index ? "active" : "")
            }
            // Handle mouse click selection
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem?.(item);
            }}
            // Handle keyboard (Enter / Space) selection
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedIndex(index);
                onSelectItem?.(item);
              }
            }}
          >
            <span>{item}</span>
            {selectedIndex === index && (
              <span className="badge bg-light text-dark">Selected</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Type checking for props
ListGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectItem: PropTypes.func,
  title: PropTypes.string,
};
