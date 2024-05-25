import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.c-r-m.caption'),
          title: i18n.t('forms.application.sitemap.c-r-m.title'),
          children: [{
            link: 'i-i-s-c-r-mj-заявка-l',
            caption: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-mj-заявка-l.caption'),
            title: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-mj-заявка-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-c-r-mj-товары-l',
            caption: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-mj-товары-l.caption'),
            title: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-mj-товары-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-c-r-mj-сделка-l',
            caption: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-mj-сделка-l.caption'),
            title: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-mj-сделка-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-c-r-mj-уведомление-l',
            caption: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-mj-уведомление-l.caption'),
            title: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-mj-уведомление-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-c-r-mj-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-mj-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-mj-сотрудник-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-c-r-mj-клиент-l',
            caption: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-mj-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-mj-клиент-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-c-r-mj-группа-клиент-l',
            caption: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-mj-группа-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-mj-группа-клиент-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-c-r-mj-событие-l',
            caption: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-mj-событие-l.caption'),
            title: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-mj-событие-l.title'),
            icon: 'folder',
            children: null
          }]
        }
      ]
    };
  }),
})