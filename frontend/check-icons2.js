const si = require('react-icons/si');
const result = [];
result.push('SiCss3: ' + (typeof si.SiCss3));
result.push('SiCss: ' + (typeof si.SiCss));
result.push('SiHtml5: ' + (typeof si.SiHtml5));
result.push('SiHtml: ' + (typeof si.SiHtml));
result.push('SiJavascript: ' + (typeof si.SiJavascript));

// Find CSS icons
const cssKeys = Object.keys(si).filter(k => /css/i.test(k));
result.push('CSS keys: ' + cssKeys.join(', '));

const htmlKeys = Object.keys(si).filter(k => /html/i.test(k));
result.push('HTML keys: ' + htmlKeys.join(', '));

require('fs').writeFileSync('icon-check-result.txt', result.join('\n'));
console.log('Done - check icon-check-result.txt');

