





const MyButton = ({ onClick, children, variant = "primary", className = "" }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn btn-${variant} ${className}`}
    >
      {children}
    </button>
  );
};

export default MyButton;
