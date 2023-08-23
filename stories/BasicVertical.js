import React from 'react';
import SplitPane from '../src';

export default () => (
  <SplitPane split="vertical" fullscreen={true}>
    <div>default min: 100px</div>
    <div />
  </SplitPane>
);
