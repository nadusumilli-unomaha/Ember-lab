export function initialize( application ) {
  // application.inject('route', 'foo', 'service:foo');
	application.inject('route', 'maps', 'service:maps');
	application.inject('component', 'maps', 'service:maps');
	application.inject('controller', 'maps', 'service:maps');
}

export default {
  name: 'maps',
  initialize: initialize
};