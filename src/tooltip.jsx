import "./tooltip.scss";

// eslint-disable-next-line react/prop-types
const Tooltip = ({ children, content, position }) => {
  return (
    <div>
      {children}
      <tool-tip inert role="tooltip" tip-position={position}>
        {content}
      </tool-tip>
    </div>
  );
};

export default Tooltip;
