const Options = (props) => {
  const handleChange = (ev) => {
    props.changeWord(ev.currentTarget.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label className="title" htmlFor="word">
        Escribe aquí la palabra que hay que adivinar:
      </label>
      <input
        autoFocus
        autoComplete="off"
        className="form__input"
        maxLength="15"
        type="text"
        id="word"
        name="word"
        onChange={handleChange}
        value={props.word}
      />
    </form>
  );
};

export default Options;
