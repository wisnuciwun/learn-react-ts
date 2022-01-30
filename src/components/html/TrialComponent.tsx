import Welcome from 'components/Welcome';
import React from 'react';

export const TrialComponent = (props: React.ComponentProps<typeof Welcome>) => {
  return <div>{props.username} {props.isLogin}</div>; //props from welcome component will show here
};
