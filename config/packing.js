/**
 * 这个文件可以修改packing配置文件的默认设置
 * 默认配置请看 `node_modules/packing/config/packing.js`
 *
 * @param object packing 默认配置对象
 */

import path from 'path';
import packingGlob from 'packing-glob';

export default (packing) => {
  const p = packing;
  // 模版引擎类型，目前支持的类型有[html,pug,ejs,handlebars,smarty,velocity,artTemplate]
  p.templateEngine = 'pug';
  // 模版文件扩展名
  p.templateExtension = '.pug';

  /* 网站自定义配置 */

  p.hot = true;

  p.minimize = true;
  p.sourceMap = true;

  p.commonChunks = {
    vendor: ['react', 'react-dom', 'react-redux', 'redux', 'redux-batched-actions']
  };

  p.rewriteRules = {
    // 网站URL与模版的对应路由关系
    '^/$': '/homepage/index.pug',
    // API转发
    '^/api/(.*)': 'require!/mock/api/$1.js'
  };

  p.path.entries = () => {
    const entryFileName = 'entry.js';
    const entryPath = 'src/pages';
    const entryPattern = `**/${entryFileName}`;
    const cwd = path.resolve(entryPath);
    const config = {};
    packingGlob(entryPattern, { cwd }).forEach((page) => {
      // const ext = path.extname(page).toLowerCase();
      const key = page.replace(entryFileName, 'index');
      config[key] = path.join(cwd, page);
    });

    // old eb common frame part
    config['eb-frame'] = path.resolve('src/eb-frame/index.js');

    return config;
  };

  return p;
};
