import { intl } from 'di18n-react';
import React from 'react';

export default function Test() {
  return <Button>{intl.t('拷贝')}</Button>;
}
