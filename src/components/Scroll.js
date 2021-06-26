const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        height: '1200px',
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
