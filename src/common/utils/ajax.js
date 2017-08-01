import PackingAjax from 'packing-ajax';

const Ajax = ({
  url,
  data,
  type = 'GET',
  dataType = 'JSON',
  contentType = 'application/json',
  ...rest
}) => new Promise((resolve, reject = () => {}) => {
  PackingAjax({
    url,
    data,
    type,
    dataType,
    contentType,
    ...rest,
    success: res => resolve(res),
    error: res => reject(res)
  });
});

export default Ajax;
