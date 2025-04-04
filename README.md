# Transistive dependencies is dependency when a one package needs other package and tnose packages need other packages too.

# caret is used for minor updates of dependencies in package.json.
# Tilde is used for major updates of dependencies in package.json.

# devDependencies are those which we need for development.

# what we can regenrate don't put it in git.

# PARCEL
- Dev build.
- Local Server.
- HMR- Hot Module Replacement. (make changes after saving without refreshing)
- File Watching Algo is responsible for HMR and it's written in C++.
- Faster build because of Caching.
- Image optimization.
- For Prod it will minification i.e bundle things up.
- Compress files.
- Minification
- Consistent Hashing
- Differential Bundling (To support older browsers)
- Error Handling
- We can host app on https instead of htpp.
- Tree Shaking - remove unused code for you.

# React.createElement(type, props, children) always return Object.

# render method converts React.createElement() Object into html through babel.

# JSX is Html like/ XML like structure and it's not HTML actually.

# JSX first converted into React.createElement through Babel which return Object.

# Class based components are components which extends React.component and require a render method.

# Functional Components are javascript functions that return JSX.

# Component composition are components inside components.

# Functional components are represented as <FunctionalComponent /> in return method as it is understandable by babel in this way.

# Config drivern UI --  design pattern where the user interface is dynamically generated based on a configuration (usually json)

# Types of exports 

# Default exports 
 export default Component
 import Component from 'path'

# named exports
 export const Component
 import {Component} from 'path'

# React Hooks - Normal JS utilites function written by React developer.

- useState
- useEffect.

# whenever a state variables update react re render the component.

