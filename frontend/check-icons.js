const si = require('react-icons/si');
const fa = require('react-icons/fa');
const tb = require('react-icons/tb');

const checks = {
  'SiHtml5': !!si.SiHtml5,
  'SiCss3': !!si.SiCss3,
  'SiCss': !!si.SiCss,
  'SiCsswizardry': !!si.SiCsswizardry,
  'SiJavascript': !!si.SiJavascript,
  'SiPhp': !!si.SiPhp,
  'SiLaravel': !!si.SiLaravel,
  'SiNextdotjs': !!si.SiNextdotjs,
  'SiReact': !!si.SiReact,
  'SiAngular': !!si.SiAngular,
  'SiKotlin': !!si.SiKotlin,
  'SiMysql': !!si.SiMysql,
  'SiPostgresql': !!si.SiPostgresql,
  'SiFirebase': !!si.SiFirebase,
  'SiSupabase': !!si.SiSupabase,
  'SiDotnet': !!si.SiDotnet,
  'SiAndroidstudio': !!si.SiAndroidstudio,
  'SiTailwindcss': !!si.SiTailwindcss,
  'SiGit': !!si.SiGit,
  'FaJava': !!fa.FaJava,
  'FaShieldAlt': !!fa.FaShieldAlt,
  'TbBrandCSharp': !!tb.TbBrandCSharp,
};

// Find CSS-related
const cssIcons = Object.keys(si).filter(k => k.toLowerCase().includes('css'));
console.log('CSS icons:', cssIcons);

// Find HTML-related
const htmlIcons = Object.keys(si).filter(k => k.toLowerCase().includes('html'));
console.log('HTML icons:', htmlIcons);

console.log(JSON.stringify(checks, null, 2));

