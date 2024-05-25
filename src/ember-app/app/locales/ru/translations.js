import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISCRMjГруппаКлиентLForm from './forms/i-i-s-c-r-mj-группа-клиент-l';
import IISCRMjЗаявкаLForm from './forms/i-i-s-c-r-mj-заявка-l';
import IISCRMjКлиентLForm from './forms/i-i-s-c-r-mj-клиент-l';
import IISCRMjСделкаLForm from './forms/i-i-s-c-r-mj-сделка-l';
import IISCRMjСобытиеLForm from './forms/i-i-s-c-r-mj-событие-l';
import IISCRMjСотрудникLForm from './forms/i-i-s-c-r-mj-сотрудник-l';
import IISCRMjТоварыLForm from './forms/i-i-s-c-r-mj-товары-l';
import IISCRMjУведомлениеLForm from './forms/i-i-s-c-r-mj-уведомление-l';
import IISCRMjГруппаКлиентEForm from './forms/i-i-s-c-r-mj-группа-клиент-e';
import IISCRMjЗаявкаEForm from './forms/i-i-s-c-r-mj-заявка-e';
import IISCRMjКлиентEForm from './forms/i-i-s-c-r-mj-клиент-e';
import IISCRMjСделкаEForm from './forms/i-i-s-c-r-mj-сделка-e';
import IISCRMjСобытиеEForm from './forms/i-i-s-c-r-mj-событие-e';
import IISCRMjСотрудникEForm from './forms/i-i-s-c-r-mj-сотрудник-e';
import IISCRMjТоварыEForm from './forms/i-i-s-c-r-mj-товары-e';
import IISCRMjУведомлениеEForm from './forms/i-i-s-c-r-mj-уведомление-e';
import IISCRMjГруппаКлиентModel from './models/i-i-s-c-r-mj-группа-клиент';
import IISCRMjЗаявкаModel from './models/i-i-s-c-r-mj-заявка';
import IISCRMjКлиентModel from './models/i-i-s-c-r-mj-клиент';
import IISCRMjСделкаModel from './models/i-i-s-c-r-mj-сделка';
import IISCRMjСобытиеModel from './models/i-i-s-c-r-mj-событие';
import IISCRMjСотрудникModel from './models/i-i-s-c-r-mj-сотрудник';
import IISCRMjТоварыModel from './models/i-i-s-c-r-mj-товары';
import IISCRMjУведомлениеModel from './models/i-i-s-c-r-mj-уведомление';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-c-r-mj-группа-клиент': IISCRMjГруппаКлиентModel,
    'i-i-s-c-r-mj-заявка': IISCRMjЗаявкаModel,
    'i-i-s-c-r-mj-клиент': IISCRMjКлиентModel,
    'i-i-s-c-r-mj-сделка': IISCRMjСделкаModel,
    'i-i-s-c-r-mj-событие': IISCRMjСобытиеModel,
    'i-i-s-c-r-mj-сотрудник': IISCRMjСотрудникModel,
    'i-i-s-c-r-mj-товары': IISCRMjТоварыModel,
    'i-i-s-c-r-mj-уведомление': IISCRMjУведомлениеModel
  },

  'application-name': '2',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': '2',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '2',
          title: '2'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'c-r-m': {
          caption: 'CRM',
          title: 'CRM',
          'i-i-s-c-r-mj-заявка-l': {
            caption: 'Заявка',
            title: ''
          },
          'i-i-s-c-r-mj-товары-l': {
            caption: 'Товары',
            title: ''
          },
          'i-i-s-c-r-mj-сделка-l': {
            caption: 'Сделка',
            title: ''
          },
          'i-i-s-c-r-mj-уведомление-l': {
            caption: 'Уведомление',
            title: ''
          },
          'i-i-s-c-r-mj-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-c-r-mj-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-c-r-mj-группа-клиент-l': {
            caption: 'Группа клиент',
            title: ''
          },
          'i-i-s-c-r-mj-событие-l': {
            caption: 'Событие',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-c-r-mj-группа-клиент-l': IISCRMjГруппаКлиентLForm,
    'i-i-s-c-r-mj-заявка-l': IISCRMjЗаявкаLForm,
    'i-i-s-c-r-mj-клиент-l': IISCRMjКлиентLForm,
    'i-i-s-c-r-mj-сделка-l': IISCRMjСделкаLForm,
    'i-i-s-c-r-mj-событие-l': IISCRMjСобытиеLForm,
    'i-i-s-c-r-mj-сотрудник-l': IISCRMjСотрудникLForm,
    'i-i-s-c-r-mj-товары-l': IISCRMjТоварыLForm,
    'i-i-s-c-r-mj-уведомление-l': IISCRMjУведомлениеLForm,
    'i-i-s-c-r-mj-группа-клиент-e': IISCRMjГруппаКлиентEForm,
    'i-i-s-c-r-mj-заявка-e': IISCRMjЗаявкаEForm,
    'i-i-s-c-r-mj-клиент-e': IISCRMjКлиентEForm,
    'i-i-s-c-r-mj-сделка-e': IISCRMjСделкаEForm,
    'i-i-s-c-r-mj-событие-e': IISCRMjСобытиеEForm,
    'i-i-s-c-r-mj-сотрудник-e': IISCRMjСотрудникEForm,
    'i-i-s-c-r-mj-товары-e': IISCRMjТоварыEForm,
    'i-i-s-c-r-mj-уведомление-e': IISCRMjУведомлениеEForm
  },

});

export default translations;
