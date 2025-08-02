const Spinner = () => {
  const spinnerStyle = {
    width: "40px",
    height: "40px",
    border: "4px solid #ccc",
    borderTop: "4px solid #1d72b8",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    margin: "auto",
  };

  const wrapperStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  return (
    <div style={wrapperStyle}>
      <div style={spinnerStyle} />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Spinner;
