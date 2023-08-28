import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
// App.js의 반환값을 public폴더 index.html 안 <div id="root"></div>내부에 표현한다.
// react는 최종적으로 단 하나의 컴포넌트만 그려야한다
