# Проектная работа 11
### Версия 1.0.0
## Яндекс-Практика
<https://github.com/YuriyFeo/project11.github.io.git/>
Ссылка на ссылку на github pages: <https://yuriyfeo.github.io/project11.github.io/>

Самостоятельная практическая работа для улучшение навыков программирования. 

На данном сайте реализована возможность просмотра галереи картинок и редактирование 
данных пользователя. Нажатием на кнопку “+” возможно добавление новых карточек с картинками. 
Карточки имеют функционал: добавления лайков, удаление и увеличение изображения.

В проекте используются технологии: JS, HTML, CSS, GIT

Webpack
<li>
NPM-пакеты:
#### сборка develop
@babel/cli @babel/core @babel/preset-env autoprefixer babel-loader cross-env css-loader cssnano file-loader gh-pages html-loader html-webpack-plugin@3.2.0 image-webpack-loader lodash mini-css-extract-plugin postcss-loader resolve-url resolve-url-loader style-loader url-loader webpack webpack-cli webpack-dev-server webpack-md5-hash- 
#### сборка build:
babel-polyfill core-js optimize-css-assets-webpack-plugin resolve-cwd### Инструкция по сборке:
<li>
точка входа: index.js
<li>
команда npm run build запускает сборку build и собирает проект в папке dist
<li>
команда npm run dev запускает сборку develop и открывает проект на локальном сервере по адресу localhost:8080
<li>
команда npm run deploy развёртывает проект на сервере gh-pages
### Результат проектной работы:
<li>
Репозиторий Git состоит из веток master и develop
<li>
Webpack и NPM использован для сборки кода
<li>
CSS-код минимизирован, JS-код переведен бабелем из ES6 в ES5, оптимизированы картинки и шрифты
