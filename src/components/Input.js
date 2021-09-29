const Input = (props) => {
  const handleChangeInputText = (ev) => {
    console.log(ev.currentTarget.value);
    props.handleInput(props.name, ev.currentTarget.value);
  };
  return (
    <>
      <label>{props.label}</label>
      <input
        label={props.label}
        id={props.id}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        required
        value={props.value}
        onChange={handleChangeInputText}
      />
    </>
  );
};

export default Input;
