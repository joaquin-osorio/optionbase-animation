/**
 * Requires all SVG files from the specified directory and exports them as an array.
 *
 * @constant
 * @type {Array}
 * @default
 * @requires require.context
 */

const requireContext = require.context('./../assets/tokens', false, /\.svg$/);
const icons = requireContext.keys().map(requireContext);

export default icons;