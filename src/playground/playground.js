var app = {
  title: "Indecision",
  subtitle: "Put your life in the hands of a computer",
  options: [0, 0]
};

var user = {
  name: "Indecision App",
  age: 28,
  location: "dallas"
};

function getLocation(location) {
  if (location) {
    return location;
  } else {
    return "unknown";
  }
}

var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p> {app.options.length > 0 ? "Here are your options" : "No Options"} </p>
  </div>
);
