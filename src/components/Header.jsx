function Header(props) {
  return (
    <h1 role="heading">
      {props.title ? props.title : "Welcome to my counter app"}
    </h1>
  );
}

export default Header;
