import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-c-r-mj-группа-клиент-l');
  this.route('i-i-s-c-r-mj-группа-клиент-e',
  { path: 'i-i-s-c-r-mj-группа-клиент-e/:id' });
  this.route('i-i-s-c-r-mj-группа-клиент-e.new',
  { path: 'i-i-s-c-r-mj-группа-клиент-e/new' });
  this.route('i-i-s-c-r-mj-заявка-l');
  this.route('i-i-s-c-r-mj-заявка-e',
  { path: 'i-i-s-c-r-mj-заявка-e/:id' });
  this.route('i-i-s-c-r-mj-заявка-e.new',
  { path: 'i-i-s-c-r-mj-заявка-e/new' });
  this.route('i-i-s-c-r-mj-клиент-l');
  this.route('i-i-s-c-r-mj-клиент-e',
  { path: 'i-i-s-c-r-mj-клиент-e/:id' });
  this.route('i-i-s-c-r-mj-клиент-e.new',
  { path: 'i-i-s-c-r-mj-клиент-e/new' });
  this.route('i-i-s-c-r-mj-сделка-l');
  this.route('i-i-s-c-r-mj-сделка-e',
  { path: 'i-i-s-c-r-mj-сделка-e/:id' });
  this.route('i-i-s-c-r-mj-сделка-e.new',
  { path: 'i-i-s-c-r-mj-сделка-e/new' });
  this.route('i-i-s-c-r-mj-событие-l');
  this.route('i-i-s-c-r-mj-событие-e',
  { path: 'i-i-s-c-r-mj-событие-e/:id' });
  this.route('i-i-s-c-r-mj-событие-e.new',
  { path: 'i-i-s-c-r-mj-событие-e/new' });
  this.route('i-i-s-c-r-mj-сотрудник-l');
  this.route('i-i-s-c-r-mj-сотрудник-e',
  { path: 'i-i-s-c-r-mj-сотрудник-e/:id' });
  this.route('i-i-s-c-r-mj-сотрудник-e.new',
  { path: 'i-i-s-c-r-mj-сотрудник-e/new' });
  this.route('i-i-s-c-r-mj-товары-l');
  this.route('i-i-s-c-r-mj-товары-e',
  { path: 'i-i-s-c-r-mj-товары-e/:id' });
  this.route('i-i-s-c-r-mj-товары-e.new',
  { path: 'i-i-s-c-r-mj-товары-e/new' });
  this.route('i-i-s-c-r-mj-уведомление-l');
  this.route('i-i-s-c-r-mj-уведомление-e',
  { path: 'i-i-s-c-r-mj-уведомление-e/:id' });
  this.route('i-i-s-c-r-mj-уведомление-e.new',
  { path: 'i-i-s-c-r-mj-уведомление-e/new' });
});

export default Router;
