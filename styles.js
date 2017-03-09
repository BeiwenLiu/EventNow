
const React = require('react-native')
const {StyleSheet} = React
const constants = {
  actionColor: '#24CE84'
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#252525',
  },
  container1: {
    flexDirection: 'row',
    alignItems:'center',
    paddingTop:70,
    paddingBottom:10,
  },
  listview: {
    flex: 1,
    width: 360,
    height: 700,
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liContainer: {
    flex: 2,
  },
  liText: {
    color: '#333',
    fontSize: 16,
  },
  tagText: {
      color: '#999',
      fontSize: 12,
  },
  navbar: {
    flex:1,
  },
  navbarTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: "500",
    textAlign:'center',
  },
  statusbar: {
    backgroundColor: '#fff',
  },
  center: {
    textAlign: 'center',
  },
  actionText: {
    color:"#2a5ca6",
    fontSize: 12,
    textAlign: 'center',
  },
  action: {
    width:70,
    backgroundColor: '#B7B7B7',
    borderWidth:2,
    padding:10,
    margin:5
  },
})

module.exports = styles
module.exports.constants = constants;