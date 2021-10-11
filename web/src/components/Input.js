const Input = (props) => {
  const handleInput = (ev) => {
    props.handleInput(ev.target.value, ev.target.name);
  };
  return (
    <>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        className={props.className}
        onChange={handleInput}
        
       
      />
    </>
  );
};

export default Input;
