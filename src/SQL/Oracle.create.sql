



CREATE TABLE "Заявка"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаСоздания" DATE NULL,

	"Стоимость" NUMBER(10) NULL,

	"ID" NUMBER(10) NULL,

	"СтатусЗ" NVARCHAR2(7) NULL,

	"КолВо" NUMBER(10) NULL,

	"Товары" RAW(16) NOT NULL,

	"Клиент" RAW(16) NOT NULL,

	"Сотрудник" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Товары"
(

	"primaryKey" RAW(16) NOT NULL,

	"Темпер" NUMBER(10) NULL,

	"Дата" DATE NULL,

	"Стандарт" NVARCHAR2(255) NULL,

	"Преимущ" NVARCHAR2(255) NULL,

	"Требования" NVARCHAR2(255) NULL,

	"Цена" FLOAT(126) NULL,

	"Колич" NUMBER(10) NULL,

	"ID" NUMBER(10) NULL,

	"Объем" FLOAT(126) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Область" NVARCHAR2(8) NULL,

	"Тип" NVARCHAR2(11) NULL,

	"Сотрудник" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сделка"
(

	"primaryKey" RAW(16) NOT NULL,

	"ID" NUMBER(10) NULL,

	"СтатусС" NVARCHAR2(7) NULL,

	"Заявка" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Уведомление"
(

	"primaryKey" RAW(16) NOT NULL,

	"Сообщ" NVARCHAR2(255) NULL,

	"Дата" DATE NULL,

	"Событие" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотрудник"
(

	"primaryKey" RAW(16) NOT NULL,

	"ID" NUMBER(10) NULL,

	"Email" NVARCHAR2(255) NULL,

	"Телефон" NVARCHAR2(255) NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Комментарий" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Клиент"
(

	"primaryKey" RAW(16) NOT NULL,

	"ID" NUMBER(10) NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Email" NVARCHAR2(255) NULL,

	"Телефон" NVARCHAR2(255) NULL,

	"ГруппаКлиент" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ГруппаКлиент"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Скидка" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Событие"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаСозд" DATE NULL,

	"Соо" NVARCHAR2(255) NULL,

	"ДатаУвед" DATE NULL,

	"Установ" NUMBER(1) NULL,

	"Заявка" RAW(16) NOT NULL,

	"Сделка" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Заявка"
	ADD CONSTRAINT "Заявка_FТовары_0" FOREIGN KEY ("Товары") REFERENCES "Товары" ("primaryKey");

CREATE INDEX "Заявка_IТовары" on "Заявка" ("Товары");

ALTER TABLE "Заявка"
	ADD CONSTRAINT "Заявка_FКлиент_0" FOREIGN KEY ("Клиент") REFERENCES "Клиент" ("primaryKey");

CREATE INDEX "Заявка_IКлиент" on "Заявка" ("Клиент");

ALTER TABLE "Заявка"
	ADD CONSTRAINT "Заявка_FСотру_1865" FOREIGN KEY ("Сотрудник") REFERENCES "Сотрудник" ("primaryKey");

CREATE INDEX "Заявка_IСотру_4810" on "Заявка" ("Сотрудник");

ALTER TABLE "Товары"
	ADD CONSTRAINT "Товары_FСотру_1755" FOREIGN KEY ("Сотрудник") REFERENCES "Сотрудник" ("primaryKey");

CREATE INDEX "Товары_IСотру_8915" on "Товары" ("Сотрудник");

ALTER TABLE "Сделка"
	ADD CONSTRAINT "Сделка_FЗаявка_0" FOREIGN KEY ("Заявка") REFERENCES "Заявка" ("primaryKey");

CREATE INDEX "Сделка_IЗаявка" on "Сделка" ("Заявка");

ALTER TABLE "Уведомление"
	ADD CONSTRAINT "Уведомление_F_2682" FOREIGN KEY ("Событие") REFERENCES "Событие" ("primaryKey");

CREATE INDEX "Уведомление_I_9045" on "Уведомление" ("Событие");

ALTER TABLE "Клиент"
	ADD CONSTRAINT "Клиент_FГрупп_9357" FOREIGN KEY ("ГруппаКлиент") REFERENCES "ГруппаКлиент" ("primaryKey");

CREATE INDEX "Клиент_IГрупп_7260" on "Клиент" ("ГруппаКлиент");

ALTER TABLE "Событие"
	ADD CONSTRAINT "Событие_FЗаявка_0" FOREIGN KEY ("Заявка") REFERENCES "Заявка" ("primaryKey");

CREATE INDEX "Событие_IЗаявка" on "Событие" ("Заявка");

ALTER TABLE "Событие"
	ADD CONSTRAINT "Событие_FСделка_0" FOREIGN KEY ("Сделка") REFERENCES "Сделка" ("primaryKey");

CREATE INDEX "Событие_IСделка" on "Событие" ("Сделка");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


