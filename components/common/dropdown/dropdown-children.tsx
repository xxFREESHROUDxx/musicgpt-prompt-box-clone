import React, { FunctionComponent, ReactNode } from "react";

const DropDownChildren: FunctionComponent<{
  children: ReactNode;
  hideDropdown: () => void;
}> = ({ children, hideDropdown }) => {
  return (
    <>
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child) ? (
          <span
            className="block whitespace-nowrap"
            key={index}
            onClick={async () => {
              console.log("Child clicked, className:", child.props.className);
              if ((child.props as any)?.onClick) {
                await (child.props as any).onClick();
              }

              if (
                child.props.className?.includes("dropdown-item") ||
                child.props.className?.includes("tool-item")
              ) {
                console.log("Hiding dropdown");
                hideDropdown();
              }
            }}
          >
            {child}
          </span>
        ) : null,
      )}
    </>
  );
};

export default DropDownChildren;
