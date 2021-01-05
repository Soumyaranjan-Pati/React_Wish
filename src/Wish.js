import React from 'react';

function Wish(){
  
//new Date(y,m,d,h,m,ms)
    let curTime=new Date(2021,1,4,12.22);
    curTime=curTime.getHours();

    let greeting='';
    const cssStyle={};

    if(curTime>=6 && curTime<=11){
        greeting=' Good Morning Sir..';
        cssStyle.color='green';
    }
    else if(curTime===12){
        greeting=' Good Noon Sir..';
        cssStyle.color='yellow';
    }
    else if(curTime>=12 && curTime<=16){
        greeting=' Good Afternoon Sir.....';
        cssStyle.color='orange';
    }
    else if(curTime>=17 && curTime<=19){
        greeting=' Good Evening Sir..';
        cssStyle.color='black';
    }
    else if(curTime>=20 || curTime<=5){
        greeting=' Good Night Sir..';
        cssStyle.color='red';
    }
    return(
        <h1 className="main_content" style={{
            justifyContent: "center",
            textAlign: "center"
        }}>Hello,<span style={cssStyle}>{greeting}</span></h1>
      
    );
}
export default Wish;            