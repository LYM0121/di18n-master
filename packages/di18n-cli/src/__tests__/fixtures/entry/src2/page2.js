import { intl } from 'di18n-react';
import React from 'react';

class Page2 extends React.PureComponent {
  render() {
    return (
      <div className="page">
        <h2>{intl.t('标题')}</h2>
        <p>{intl.t('内容')}</p>
      </div>
    );
  }
}

export default Page2;
