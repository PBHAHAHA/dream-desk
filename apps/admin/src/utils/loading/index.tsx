import ReactDOM from 'react-dom/client';
import Loading from './loading';
import './loading.less';
let count = 0;
export const showLoading = () => {
  if (count === 0) {
    const loadingdom = document.createElement('loading');
    loadingdom.setAttribute('id', 'loading');
    document.body.append(loadingdom);
    ReactDOM.createRoot(loadingdom).render(<Loading />);
  }
  count++;
};

export const hideLoading = () => {
  console.log(count);
  if (count < 0) return;
  count--;
  // const loadingdom = document.getElementById('loading') as HTMLDivElement;
  document.body.removeChild(document.getElementById('loading') as HTMLDivElement);
};
