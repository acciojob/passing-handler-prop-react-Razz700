import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config.background;
  return (
    <button id={config.label} className={config.classname/* classname should come here */} onClick={() =>{ selectNextBackground({background: config.background});
                                                                                    }}>
      {config.label/* label should come here */}
    </button>
  )
}
export default ColourSelector;
