export default {
  projections: {
    СделкаE: {
      iD: {
        __caption__: 'ID'
      },
      статусС: {
        __caption__: 'Статус сделки'
      },
      заявка: {
        __caption__: 'Заявка',
        датаСоздания: {
          __caption__: 'Дата создания заявки'
        },
        клиент: {
          __caption__: '',
          iD: {
            __caption__: 'ID клиента'
          },
          фИО: {
            __caption__: 'ФИО клиента'
          },
          телефон: {
            __caption__: 'Телефон клиента'
          }
        },
        сотрудник: {
          __caption__: '',
          фИО: {
            __caption__: 'ФИО сотрудника'
          },
          iD: {
            __caption__: 'ID сотрудника'
          }
        },
        товары: {
          __caption__: '',
          наименование: {
            __caption__: 'Наименование'
          },
          объем: {
            __caption__: 'Объем'
          },
          цена: {
            __caption__: 'Цена'
          }
        },
        колВо: {
          __caption__: 'Количество'
        },
        стоимость: {
          __caption__: 'Стоимость'
        }
      }
    },
    СделкаL: {
      iD: {
        __caption__: 'ID'
      },
      статусС: {
        __caption__: 'Статус С'
      },
      заявка: {
        __caption__: 'Дата создания',
        датаСоздания: {
          __caption__: 'Дата создания'
        }
      }
    }
  },
  validations: {
    iD: {
      __caption__: 'ID'
    },
    статусС: {
      __caption__: 'Статус сделки'
    },
    заявка: {
      __caption__: 'Заявка'
    }
  }
};
