import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SocialIcons = (props, context) => {
  const { theme: { colorPrimary } } = context;
  
  return (
    <div className="social-icons animate-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/TamerSherif" style={ { color: colorPrimary } }><i className="fab fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tamer-sherif-628632112/" style={ { color: colorPrimary } }><i className="fab fa-linkedin"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@tamersherif" style={ { color: colorPrimary } }><i className="fab fa-medium"></i></a>

      </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;