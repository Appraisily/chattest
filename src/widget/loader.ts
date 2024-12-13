import { DEFAULT_CONFIG } from './constants';

const WIDGET_URL = '/widget-app.js';
const WIDGET_CSS_URL = '/widget-app.css';

export const generateLoaderScript = (baseUrl: string) => `
(function(w,d,s,i) {
  if (d.getElementById(i)) return;
  
  // Create container
  var c = d.createElement('div');
  c.id = '${DEFAULT_CONFIG.containerId}';
  d.body.appendChild(c);
  
  // Load CSS
  var link = d.createElement('link');
  link.rel = 'stylesheet';
  link.href = baseUrl + '${WIDGET_CSS_URL}';
  d.head.appendChild(link);

  // Load React and ReactDOM if not present
  function loadScript(src, callback) {
    var script = d.createElement('script');
    script.async = true;
    script.src = src;
    script.onload = callback;
    d.head.appendChild(script);
  }

  function loadWidget() {
    var js = d.createElement(s);
    js.id = i;
    js.async = true;
    js.src = baseUrl + '${WIDGET_URL}';
    
    var fjs = d.getElementsByTagName(s)[0];
    fjs.parentNode.insertBefore(js, fjs);
    
    js.onload = function() {
      if (w.ChatWidget) {
        w.ChatWidget.init({
          position: '${DEFAULT_CONFIG.position}',
          primaryColor: '${DEFAULT_CONFIG.primaryColor}'
        });
      }
    };
  }

  // Check if React and ReactDOM are loaded
  if (!w.React || !w.ReactDOM) {
    loadScript('https://unpkg.com/react@18/umd/react.production.min.js', function() {
      loadScript('https://unpkg.com/react-dom@18/umd/react-dom.production.min.js', loadWidget);
    });
  } else {
    loadWidget();
  }
}(window, document, 'script', 'chat-widget-script'));
`;