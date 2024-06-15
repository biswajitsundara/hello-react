import React from 'react';
import Tooltip from './Tooltip';

const TooltipDemo = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <Tooltip text="This is a tooltip">
        <button>Hover me for Tooltip</button>
      </Tooltip>
    </div>
  );
};

export default TooltipDemo;
