'use strict';

var React = require('react');
var ApplicationStore = require('../../../stores/ApplicationStore');

var Html = React.createClass({
  render: function(){
    return (

    <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{this.props.context.getStore(ApplicationStore).getPageTitle()}</title>
      <meta name="description" content="The next generation web publishing platform." />
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Merriweather:300,700,700italic,300italic|Open+Sans:700,400" />
      <link rel="stylesheet" href="/assets/dist/main.css" />
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.2/styles/default.min.css" />
      <link rel="stylesheet" href="/assets/css/solarized_light.css" />
    </head>
      <body dangerouslySetInnerHTML={{__html: this.props.markup}}></body>
    <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
    <script src="/assets/dist/bundle.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.2/highlight.min.js"></script>
    <script>hljs.initHighlightingOnLoad();</script>
    </html>
    )
  }
});

module.exports = Html;
