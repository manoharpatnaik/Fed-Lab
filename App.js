import './App.css';
import DigitalClock from './DigitalClock';
import Textcolor from './Textcolor';
import Counter from './Counter';
import Tabularform from './Tabularform';
import UseStateDemo from './UseStateDemo';
import UseContextHook from './UseContextHook';
import DataFetching from './DataFetching';
import BMICalcDemo from './BMICalcDemo';


function App() {
  return (
    
      
<>
<DigitalClock/>
<Textcolor/>
<Counter/>
<Tabularform/>
<UseStateDemo/>
<UseContextHook/>
<DataFetching/>
<BMICalcDemo/>
</>
    
  );
}

export default App;

import React from 'react';
import BlogContextDemo from './BlogContextDemo';
const blogInfo={
    React:{
        post:"Learn useContext Hooks",
        author:"Varun K"
    },
    NodeJS:{
        post:"Node Commands",
        author:"Veena M"
    }
};
export const BlogContext=React.createContext(blogInfo);
export default function App(){
    return (
        <div className="App">
            <div>
                <h1>useContext() Demo</h1>
                <BlogContext.Provider value={blogInfo}>
                    <BlogContextDemo/>
                </BlogContext.Provider>
            </div>
        </div>
    );
}
