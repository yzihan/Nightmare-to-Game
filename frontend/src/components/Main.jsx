// MyComponent.js
import React, { useState } from 'react';
import ScriptPage from './ScriptPage';



function Main() {
  // use stage to define current page
  const [stage, setStage] = useState(0);
  const nextPage = () => {
    setStage(stage + 1);
  }
  const prePage = () => {
    setStage(stage - 1);
  }

  // return different page according to stage
  // const getPage = () => {
  //   switch(stage){
  //     case 0:
  //       return <ScriptPage nextPage={nextPage} prePage={prePage}></ScriptPage>
  //     case 1:
  //       return <CharacterPage nextPage={nextPage} prePage={prePage}></CharacterPage>
  //     case 2:
  //       return <LifeInfoPage nextPage={nextPage} prePage={prePage}></LifeInfoPage>
  //     case 3:
  //       return <StoryPage nextPage={nextPage} prePage={prePage}></StoryPage>
  //  }
  // }

  // Your component code here
  return (
    <div className='main'>
        <ScriptPage></ScriptPage>
    </div>
  );
}

export default Main;
