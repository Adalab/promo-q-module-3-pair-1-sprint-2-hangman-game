const Loading = (props) => {
  if (props.isLoading) {
    return <span className="loading" />;
  } else {
    return null;
  }
};
export default Loading;
