import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


export const ContactCard = ({data}) => {

return (

<div className='numbers'>

<h3 className='h3'>{data.firstName}</h3>

<h3 className='h3'>{data.lastName}</h3>


<p className='p1'>{data.phone}</p>

<p className='space'></p>


<p className='p2'>{data.gender}</p>


</div>

)


}