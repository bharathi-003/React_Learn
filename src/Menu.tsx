
function Menu() {
  const name = "Alex";

  function sayHello() {
    alert("Hello " + name);
  }

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={sayHello}>Click me</button>
    </div>
  );
}

export default Menu;
