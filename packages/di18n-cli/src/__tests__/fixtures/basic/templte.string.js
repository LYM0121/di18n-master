import { intl } from 'di18n-react';
const max = 100;
const message = intl.t('输入框文字已经超出 {max}，按 ENTER 将以文字发送', {
  max: max,
});
