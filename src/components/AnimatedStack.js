import React from 'react';
import { Spring  } from 'react-spring/renderprops';



const Stack = () => {
    return (
      <Spring delay='2000' from={{ opacity: 0, marginTop: -1000 }} to={{ opacity: 1, marginTop: 0 }}>
        { props => (
          <div  className="Stack" style={ props }>
            <div >
              <div className="stack-header" >
                </div>
              </div>
            </div>
          )
        }
      </Spring>
    );
  }

  export default Stack;