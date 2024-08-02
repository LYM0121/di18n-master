import { intl } from 'di18n-react';
class Store {
  @observable goods: any = { price: 20, number: 100 };
  @computed get total() {
    let name = intl.t('你好');
    return this.goods.price * this.goods.number;
  }
  @action changePrice() {
    let title = intl.t('世界');
    this.goods.price = Math.floor(Math.random() * 100);
  }
}
const store = new Store();
