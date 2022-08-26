import PropTypes from 'prop-types';

const ErrorLetters = (props) => {
     const renderErrorLetters = () => {
        const errorLetters = props.userLetters.filter(
          (letter) =>
            props.word.toLocaleLowerCase().includes(letter.toLocaleLowerCase()) === false
        );
        return errorLetters.map((letter, index) => {
            return (
              <li key={index} className='letter'>
                {letter}
              </li>
            );
          });
        };
        return <div className='error'>
        <h2 className='title'>Letras falladas:</h2>
        <ul className='letters'>{renderErrorLetters()}</ul>
      </div>
};

ErrorLetters.defaultProps = {
  word: "",
  userLetters: []
};

ErrorLetters.propTypes = {
  word: PropTypes.string.isRequired,
  userLetters: PropTypes.array.isRequired
}

export default ErrorLetters;