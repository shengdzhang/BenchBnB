/* global React */
/* global BenchStore */
/* global ApiActions */
/* Google API key AIzaSyDTo_hv3JudxW1oeLAzL72_1H_c3QibVUE */

var Index = React.createClass({
  getInitialState: function () {
    return { benches: BenchStore.all() };
  },
  componentDidMount: function()
  {
    BenchStore.addChangeListener(this.onChange);
  },
  onChange: function(){
    this.setState({benches: BenchStore.all()});
  },
  componentWillUnmount: function(){
    BenchStore.removeChangeListener(this.onChange);
  },
  render: function () {
    return (
        <div></div>
    );
  }
});
