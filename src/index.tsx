import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Hello } from './components/Hello';

const App = (
  <div>
    <Hello compiler="TypeScript" framework="React" />
  </div>
)

ReactDOM.render(App, document.getElementById("root"))