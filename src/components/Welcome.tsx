import React from 'react';

type WelcomeProps = { //use type when we want to create app, interface when we want to create library
    username: string
}

function Welcome(props: WelcomeProps) {
  return <div>
      <h2>
          Hello {props.username ? props.username : "everybody"} ! im learning React with typescript
      </h2>
  </div>;
}

export default Welcome;
