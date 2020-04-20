const log = (Comp) => (props) => {
  console.log(`Rendering ${Comp.name}`);
  return <Comp {...props} />;
};

export default log;
