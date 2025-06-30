


(function (  ) {
    'use strict';
    
    
    if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(searchElement, fromIndex) {
        var k;
        if (this == null) {
            throw new TypeError('"this" is null or not defined');
        }
        var o = Object(this);
        var len = o.length >>> 0;
        if (len === 0) {
            return -1;
        }
        k = fromIndex | 0;
        if (k < 0) {
            k += len;
            if (k < 0) k = 0;
        }
        for (; k < len; k++) {
            if (k in o && o[k] === searchElement) {
                return k;
            }
        }
        return -1;
    };
}
    
    if (!Array.isArray) {
    Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}
    
   if (!Array.prototype.filter) {
  Array.prototype.filter = function(callback, thisArg) {
    var array = this;
    var result = [];
    for (var i = 0; i < array.length; i++) {
      if (callback.call(thisArg, array[i], i, array)) {
        result.push(array[i]);
      }
    }
    return result;
  };
}

if (!Object.assign) {
  Object.assign = function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
}

if (!Array.prototype.map) {
  Array.prototype.map = function(callback, thisArg) {
    var array = this;
    var result = [];
    for (var i = 0; i < array.length; i++) {
      result.push(callback.call(thisArg, array[i], i, array));
    }
    return result;
  };
}

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function(callback, thisArg) {
    var array = this;
    for (var i = 0; i < array.length; i++) {
      callback.call(thisArg, array[i], i, array);
    }
  };
}

if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement) {
    return this.indexOf(searchElement) !== -1;
  };
}

if (!Date.prototype.toISOString) {
  Date.prototype.toISOString = function() {
    var pad = function(num) {
      return (num < 10 ? '0' : '') + num;
    };
    return (
      this.getUTCFullYear() +
      '-' +
      pad(this.getUTCMonth() + 1) +
      '-' +
      pad(this.getUTCDate()) +
      'T' +
      pad(this.getUTCHours()) +
      ':' +
      pad(this.getUTCMinutes()) +
      ':' +
      pad(this.getUTCSeconds()) +
      '.' +
      (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
      'Z'
    );
  };
}

if (!Array.prototype.some) {
  Array.prototype.some = function(callback, thisArg) {
    var array = this;
    for (var i = 0; i < array.length; i++) {
      if (callback.call(thisArg, array[i], i, array)) {
        return true;
      }
    }
    return false;
  };
}

if (!Array.prototype.concat) {
  Array.prototype.concat = function() {
    var result = [];
    for (var i = 0; i < this.length; i++) {
      result.push(this[i]);
    }
    for (var j = 0; j < arguments.length; j++) {
      var arg = arguments[j];
      if (Array.isArray(arg)) {
        for (var k = 0; k < arg.length; k++) {
          result.push(arg[k]);
        }
      } else {
        result.push(arg);
      }
    }
    return result;
  };
}

if (!Object.keys) {
  Object.keys = function(obj) {
    var result = [];
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        result.push(key);
      }
    }
    return result;
  };
}

// Полифил для Array.prototype.indexOf
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(searchElement, fromIndex) {
        var k;
        if (this == null) {
            throw new TypeError('"this" is null or not defined');
        }
        var o = Object(this);
        var len = o.length >>> 0;
        if (len === 0) {
            return -1;
        }
        k = fromIndex | 0;
        if (k < 0) {
            k += len;
            if (k < 0) k = 0;
        }
        for (; k < len; k++) {
            if (k in o && o[k] === searchElement) {
                return k;
            }
        }
        return -1;
    };
}

// Полифил для console
if (!window.console) {
    window.console = {};
    var methods = ['log', 'warn', 'error', 'info', 'debug', 'trace'];
    for (var i = 0; i < methods.length; i++) {
        window.console[methods[i]] = function() {};
    }
}

// Полифил для stopImmediatePropagation
if (!Event.prototype.stopImmediatePropagation) {
    Event.prototype.stopImmediatePropagation = function() {
        this.stopPropagation();
        this.cancelBubble = true;
    };
}



// Опции сортировки
var allSortOptions = [
    { id: 'vote_count.desc', title: 'surs_vote_count_desc' },
    { id: 'vote_average.desc', title: 'surs_vote_average_desc' },
    { id: 'first_air_date.desc', title: 'surs_first_air_date_desc' },
    { id: 'popularity.desc', title: 'surs_popularity_desc' },
    { id: 'revenue.desc', title: 'surs_revenue_desc' }
];

// Жанры фильмов
var allGenres = [
    { id: 28, title: 'surs_genre_action' },
    { id: 35, title: 'surs_genre_comedy' },
    { id: 18, title: 'surs_genre_drama' },
    { id: 10749, title: 'surs_genre_romance' },
    { id: 16, title: 'surs_genre_animation' },
    { id: 10762, title: 'surs_genre_kids' },
    { id: 12, title: 'surs_genre_adventure' },
    { id: 80, title: 'surs_genre_crime' },
    { id: 9648, title: 'surs_genre_mystery' },
    { id: 878, title: 'surs_genre_sci_fi' },
    { id: 37, title: 'surs_genre_western' },
    { id: 53, title: 'surs_genre_thriller' },
    { id: 10751, title: 'surs_genre_family' },
    { id: 14, title: 'surs_genre_fantasy' },
    { id: 10764, title: 'surs_genre_reality' },
    { id: 10759, title: 'surs_genre_action_adventure' },
    { id: 10766, title: 'surs_genre_soap' },
    { id: 10767, title: 'surs_genre_talk_show' }
];

// Стриминговые сервисы
var allStreamingServices = [
    { id: 49, title: 'HBO' },
    { id: 77, title: 'SyFy' },
    { id: 2552, title: 'Apple TV+' },
    { id: 453, title: 'Hulu' },
    { id: 1024, title: 'Amazon Prime' },
    { id: 213, title: 'Netflix' },
    { id: 3186, title: 'HBO Max' },
    { id: 2076, title: 'Paramount network' },
    { id: 4330, title: 'Paramount+' },
    { id: 3353, title: 'Peacock' },
    { id: 2739, title: 'Disney+' },
    { id: 2, title: 'ABC' },
    { id: 6, title: 'NBC' },
    { id: 16, title: 'CBS' },
    { id: 318, title: 'Starz' },
    { id: 174, title: 'AMC' },
    { id: 19, title: 'FOX' },
    { id: 64, title: 'Discovery' },
    { id: 1778, title: 'test' },
    { id: 493, title: 'BBC America' },
    { id: 88, title: 'FX' },
    { id: 67, title: 'Showtime' }
];

var allStreamingServicesRUS = [
    { id: 2493, title: 'Start' },
    { id: 2859, title: 'Premier' },
    { id: 4085, title: 'KION' },
    { id: 3923, title: 'ИВИ' },
    { id: 412, title: 'Россия 1' },
    { id: 558, title: 'Первый канал' },
    { id: 3871, title: 'Okko' },
    { id: 3827, title: 'Кинопоиск' },
    { id: 5806, title: 'Wink' },
    { id: 806, title: 'СТС' },
    { id: 1191, title: 'ТНТ' },
    { id: 1119, title: 'НТВ' },
    { id: 3031, title: 'Пятница' },
    { id: 3882, title: 'More.TV' }
];

    // Переменная с SVG-постерами для кастомных кнопок
var buttonPosters = {
    surs_main: 'https://aviamovie.github.io/img/main.png',
    surs_bookmarks: 'https://aviamovie.github.io/img/bookmarks.png', 
    surs_history: 'https://aviamovie.github.io/img/history.png', 
    surs_select: 'https://aviamovie.github.io/img/select_new.png',
    surs_new: 'https://aviamovie.github.io/img/new.png',
    surs_best: 'https://aviamovie.github.io/img/best.png',
    surs_rus: 'https://aviamovie.github.io/img/rus.png',
    surs_kids: 'https://aviamovie.github.io/img/kids.png'
};


function getAllButtons() {
    return [
        { id: 'surs_main', title: 'surs_main',  overview: ' '},
        { id: 'surs_bookmarks', title: 'surs_bookmarks', overview: ' '},
        { id: 'surs_history', title: 'surs_history', overview: ' '},
        { id: 'surs_select', title: 'surs_select', overview: ' ' },
        { id: 'surs_new', title: 'surs_new', overview: ' ' },
        { id: 'surs_rus', title: 'surs_rus', poster_path: null, overview: ' ' },
        { id: 'surs_kids', title: 'surs_kids', overview: ' ' }
    ];
}


// Функция для получения кастомных кнопок с учётом настроек
function customButtons() {
    var allButtons = getAllButtons();
    return allButtons.filter(function(button) {
        return getStoredSetting('custom_button_' + button.id, true);
    }).map(function(button) {
        return {
            id: button.id,
            name: Lampa.Lang.translate(button.title), 
            overview: button.overview,

        };
    });
}


    function setupCardHandlers() {

        function initCardListener() {
            if (window.lampa_listener_extensions) {
                return;
            }

            window.lampa_listener_extensions = true;

            Object.defineProperty(window.Lampa.Card.prototype, 'build', {
                get: function () {
                    return this._build;
                },
                set: function (value) {
                    this._build = function () {
                        value.apply(this);
                        Lampa.Listener.send('card', {
                            type: 'build',
                            object: this
                        });
                    }.bind(this);
                }
            });
        }



    var buttonActions = {
        surs_main: function() {
            var sourceName = Lampa.Storage.get('surs_name') || 'SURS';
            Lampa.Activity.push({
                source: Lampa.Storage.get('source'),
                title: Lampa.Lang.translate('title_main') + ' - ' + Lampa.Storage.get('source'),
                component: 'main',
                page: 1
            });
        },
        surs_bookmarks: function() {
            Lampa.Activity.push({
                url: '',
                title: Lampa.Lang.translate('surs_bookmarks') ,
                component: 'bookmarks',
                page: 1,
            });
        },
        surs_history: function() {
            Lampa.Activity.push({
                url: '',
                title: Lampa.Lang.translate('surs_history') ,
                component: 'favorite',
                type: 'history',
                page: 1,
            });
        },
        
        surs_select: function() {
if (window.SursSelect && typeof window.SursSelect.showSursSelectMenu === 'function') {
    window.SursSelect.showSursSelectMenu();
}
        },
        surs_new: function() {
            var sourceName = Lampa.Storage.get('surs_name') || 'SURS';
            Lampa.Activity.push({
                source: sourceName + ' NEW',
                title: Lampa.Lang.translate('title_main') + ' - ' + sourceName + ' NEW',
                component: 'main',
                page: 1
            });
        },
        surs_best: function() {
            Lampa.Noty.show('раздел "лучшее" в разработке');
        },
        surs_rus: function() {
            var sourceName = Lampa.Storage.get('surs_name') || 'SURS';
            Lampa.Activity.push({
                source: sourceName + ' RUS',
                title: Lampa.Lang.translate('title_main') + ' - ' + sourceName + ' RUS',
                component: 'main',
                page: 1
            });
        },
        surs_kids: function() {
            var sourceName = Lampa.Storage.get('surs_name') || 'SURS';
            Lampa.Activity.push({
                source: sourceName + ' KIDS',
                title: Lampa.Lang.translate('title_main') + ' - ' + sourceName + ' KIDS',
                component: 'main',
                page: 1
            });
        }
    };





function addCardListener() {
    initCardListener();
    Lampa.Listener.follow('card', function (event) {
        if (event.type === 'build') {
            var cardId = event.object.data.id;
            var customButtonIds = customButtons().map(function(button) { return button.id; }); 
            if (customButtonIds.indexOf(cardId) !== -1) {
                event.object.data.img = buttonPosters[cardId];
                event.object.card.addClass('custom-button-card');

                event.object.card.on('hover:enter', function(e) {
                    if (buttonActions[cardId]) {
                        buttonActions[cardId]();
                    } else {
                        console.warn('Действие для кнопки ' + cardId + ' не определено');
                    }
                    e.stopImmediatePropagation();
                });
            }
        }
    });
}

addCardListener();
    }
    
    Lampa.Template.add('custom_button_style', `
    <style>
       .custom-button-card {
  -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
          flex-shrink: 0;
  width: 12.75em;
  position: relative;
  will-change: transform;
    }

        @media screen and (max-width: 700px) {
            .items-cards .custom-button-card {
                width: 9em !important;
                
            }
        }

    </style>
`);

$('body').append(Lampa.Template.get('custom_button_style', {}, true));
    



// Функция получения всех настроек
function getAllStoredSettings() {
    return Lampa.Storage.get('surs_settings') || {};
}

// Функция получения настроек текущего пользователя
function getProfileSettings() {
    var profileId = Lampa.Storage.get('lampac_profile_id', '') || 'default';
    var allSettings = getAllStoredSettings();

    if (!allSettings.hasOwnProperty(profileId)) {
        allSettings[profileId] = {};
        saveAllStoredSettings(allSettings);
    }

    return allSettings[profileId];
}

// Функция сохранения всех настроек
function saveAllStoredSettings(settings) {
    Lampa.Storage.set('surs_settings', settings);
}

// Функция получения конкретного сохраненного значения (по умолчанию true)
function getStoredSetting(key, defaultValue) {
    var profileSettings = getProfileSettings();
    return profileSettings.hasOwnProperty(key) ? profileSettings[key] : defaultValue;
}

// Функция сохранения отдельного значения
function setStoredSetting(key, value) {
    var allSettings = getAllStoredSettings();
    var profileId = Lampa.Storage.get('lampac_profile_id', '') || 'default';

    if (!allSettings.hasOwnProperty(profileId)) {
        allSettings[profileId] = {};
    }

    allSettings[profileId][key] = value;
    saveAllStoredSettings(allSettings);
}

// Функция фильтрации включенных элементов
function getEnabledItems(allItems, storageKeyPrefix) {
    var result = [];
    for (var i = 0; i < allItems.length; i++) {
        if (getStoredSetting(storageKeyPrefix + allItems[i].id, true)) {
            result.push(allItems[i]);
        }
    }
    return result;
}

function getSortOptions() {
    return getEnabledItems(allSortOptions, 'sort_');
}

function getGenres() {
    return getEnabledItems(allGenres, 'genre_');
}

function getStreamingServices() {
    return getEnabledItems(allStreamingServices, 'streaming_');
}

function getStreamingServicesRUS() {
    return getEnabledItems(allStreamingServicesRUS, 'streaming_rus_');
}


//устанавливаем интерфейс на маленький

if (!getStoredSetting('interface_size_initialized', false)) {

    Lampa.Storage.set("interface_size", "small");
    
    setStoredSetting('interface_size_initialized', true);
    
}

// Глобальные функции фильтрации

function filterCyrillic(items) {
    var language = Lampa.Storage.get('language');
    // Если язык не русский и не украинский, возвращаем все элементы без фильтрации
    if (language !== 'ru' && language !== 'uk') {
        return items;
    }

    // Применяем настройки для русского и украинского языка
    var storedValue = Lampa.Storage.get('cirillic');
    var isFilterEnabled = storedValue === '1' || storedValue === null || storedValue === undefined || storedValue === '';

    if (!isFilterEnabled) {
        return items;
    }

    function containsCyrillic(value) {
        if (typeof value === 'string') {
            return /[а-яА-ЯёЁїЇіІєЄґҐ]/.test(value); // Добавлены украинские символы
        } else if (typeof value === 'object' && value !== null) {
            var keys = Object.keys(value);
            for (var i = 0; i < keys.length; i++) {
                if (containsCyrillic(value[keys[i]])) {
                    return true;
                }
            }
        }
        return false;
    }

    var filteredItems = items.filter(function(item) {
        return containsCyrillic(item);
    });

    return filteredItems;
}

// Применение всех фильтров к элементам
function applyFilters(items) {
    items = filterCyrillic(items);
    return items;
}

// Добавление фильтра по минимальному количеству голосов
function applyMinVotes(baseUrl) {
    var minVotes = getStoredSetting('minVotes');
    minVotes = parseInt(minVotes, 10);
    if (isNaN(minVotes)) {
        minVotes = 10;
    }

    if (minVotes > 0) {
        baseUrl += '&vote_count.gte=' + minVotes;
    }

    return baseUrl;
}

// Добавление фильтра по возрастным ограничениям
function applyAgeRestriction(baseUrl) {
    var ageRestriction = getStoredSetting('ageRestrictions');

    if (ageRestriction && String(ageRestriction).trim() !== '') {
        var certificationMap = {
            '0+': '0+',
            '6+': '6+',
            '12+': '12+',
            '16+': '16+',
            '18+': '18+'
        };

        if (certificationMap.hasOwnProperty(ageRestriction)) {
            baseUrl += '&certification_country=RU&certification=' + encodeURIComponent(certificationMap[ageRestriction]);
        }
    }

    return baseUrl;
}

// Добавление фильтра по исключению ключевых слов
function applyWithoutKeywords(baseUrl) {
    var filterLevel = getStoredSetting('withoutKeywords');
    var baseExcludedKeywords = [
        '346488',
        '158718',
        '41278'
    ];

    if (!filterLevel || filterLevel == '1') {
        baseExcludedKeywords.push(
            '13141',
            '345822',
            '315535',
            '290667',
            '323477',
            '290609'
        );
    }

    if (filterLevel == '2') {
        baseExcludedKeywords.push(
            '210024',
            '13141',
            '345822',
            '315535',
            '290667',
            '323477',
            '290609'
        );
    }

    baseUrl += '&without_keywords=' + encodeURIComponent(baseExcludedKeywords.join(','));

    return baseUrl;
}

// Построение URL с применением всех фильтров
function buildApiUrl(baseUrl) {
    baseUrl = applyMinVotes(baseUrl);
    baseUrl = applyAgeRestriction(baseUrl);
    baseUrl = applyWithoutKeywords(baseUrl);
    return baseUrl;
}

        function adjustSortForMovies(sort) {
            if (sort.id === 'first_air_date.desc') {
                sort = { id: 'release_date.desc', title: 'surs_first_air_date_desc' };
            }

            if (sort.id === 'release_date.desc') {
                var endDate = new Date();
                endDate.setDate(endDate.getDate() - 25);
                endDate = endDate.toISOString().split('T')[0];

                var startDate = new Date();
                startDate.setFullYear(startDate.getFullYear() - 1);
                startDate = startDate.toISOString().split('T')[0];

                sort.extraParams = '&release_date.gte=' + startDate + '&release_date.lte=' + endDate;
            }

            return sort;
        }

        function adjustSortForTVShows(sort) {
            if (sort.id === 'first_air_date.desc') {
                var endDate = new Date();
                endDate.setDate(endDate.getDate() - 10);
                endDate = endDate.toISOString().split('T')[0];

                var startDate = new Date();
                startDate.setFullYear(startDate.getFullYear() - 1);
                startDate = startDate.toISOString().split('T')[0];
            
