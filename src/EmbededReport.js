import React from 'react'; 

export default class EmbededReport extends React.Component {
    render() {
      return (
          <iframe src={this.props.link} id="EmbededReport" title="Your Power BI report">Sorry, your browser does not support iframes. Please open {this.props.link} manually.</iframe>
      );
    }
  }