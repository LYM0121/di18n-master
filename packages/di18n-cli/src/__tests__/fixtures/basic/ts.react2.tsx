import { intl } from 'di18n-react';
@observer
class TitlePanel extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h1>
          {intl.t('单价：{slot0},数量：{slot1},总价{slot2}', {
            slot0: store.goods.price,
            slot1: store.goods.number,
            slot2: store.total,
          })}
        </h1>
        <button
          onClick={() => {
            store.changePrice();
          }}
        >
          {intl.t('点击改变单价')}
        </button>
      </div>
    );
  }
}
ReactDom.render(<TitlePanel />, document.body);
