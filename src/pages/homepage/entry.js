import Ajax from 'common/utils/ajax';
import logoPng from 'images/packing-logo.png';
import './style.css';

// 获取profile变量
console.log('cdnRoot: %s, me.name: %s', __('cdnRoot'), __('me.name'));

// ajax请求
Ajax({
  url: '/api/getTimestamp'
}).then((data) => {
  document.getElementById('now').innerHTML = `${JSON.parse(data).now} (USER_NAME = ${window.EBFrame.USER_NAME})`;
  document.getElementById('now').innerHTML += `<img src="${logoPng}" width="200">`;
});
