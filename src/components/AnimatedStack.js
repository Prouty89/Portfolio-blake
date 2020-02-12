import React from 'react';
import { Spring  } from 'react-spring/renderprops';



const Stack = () => {
    return (
      <Spring delay='700' from={{ opacity: 0, marginBottom: +2000 }} to={{ opacity: 1, marginBottom: 0 }}>
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