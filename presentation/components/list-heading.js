import React from 'react';
import PropTypes from 'prop-types';
import SubsectionHeading from './subsection-heading';

class ListHeading extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'left' }}>
        <SubsectionHeading {...this.props}>{this.props.children}</SubsectionHeading>
      </div>
    );
  }
}

ListHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListHeading;
