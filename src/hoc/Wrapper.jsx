function Wrapper(InnerComponent) {
  return function InnerWrapperComponent() {
    return (
      <div>
        <header>Header</header>
        <InnerComponent />
        <footer>Footer</footer>
      </div>
    );
  };
}
export default Wrapper;
