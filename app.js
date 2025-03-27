
// const heading = React.createElement('h1', {className: "heading"}, 'Hello World from React');
// console.log(heading);

// const heading = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, React.createElement("h1", {id: "heading"}, "I'm h1 tag")))
// console.log(heading);

const heading = React.createElement("div", {id: "parent"}, [
  React.createElement("div", {id: "child1"}, 
  [React.createElement("h1", {id: "heading"}, "I'm h1 tag"), React.createElement("h2", {id: "heading"}, "I'm h2 tag")
]),  React.createElement("div", {id: "child2"}, 
[React.createElement("h1", {id: "heading"}, "I'm h1 tag"), React.createElement("h2", {id: "heading"}, "I'm h2 tag")
])
])
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
root.render(heading);
