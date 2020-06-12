import React from 'react';

const After = () => {
   
    return (
        <div style={{height:`${window.innerHeight-85}px`}}> 
            <div style={{paddingTop:"200px", textAlign:"center", fontSize:'40px', fontFamily:'Righteous', color:'#0099cc'}}>Welcome</div>
            <div className='button-details' style={{marginTop:'100px'}}>
            <button><a href="http://localhost:3000" >Sign Out</a></button>
            </div>
        </div>
    );
};

export default After;