import { Spin } from 'antd';

export default function loading({ tip = 'Loading' }) {
  return (
    <div>
      <Spin size='large' className='request-loading' tip={tip}>
        <div className='content' />
      </Spin>
    </div>
  );
}
