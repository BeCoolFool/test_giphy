# Тестовое задание

## Описание задание

Необходимо реализовать приложение "каталог изображений". Приложение состоит из 1 страницы на которой находятся следующие элементы:

- Текстовое поле ввода тега
- Кнопка "Загрузить"
- Кнопка "Очистить"
- Кнопка "Группировать" / "Разгруппировать"
- Список изображений

**Доступные действия пользователя**

1. Заполнение поля тега
2. Нажатие на кнопку "Загрузить". Если поле ввода тега пустое - отображается всплывающее уведомление "заполните поле 'тег'",
   иначе происходит http запрос к api giphy (описание api ниже), на время загрузки кнопка блокируется, а текст меняется на "Загрузка...".
   Затем происходит одно из следующего:

- Если по тегу ничего не найдено — отображается всплывающее уведомление 'По тегу ничего не найдено'",
- Если произошла http ошибка — отображается всплывающее уведомление 'Произошла http ошибки'"
- При успешном получении данных изображения — добавляется изображение в список изображений
- При нажатии на кнопку "Очистить" — поле ввода тега и список изображений очищается
- При нажатии на кнопку "Группировать" — изображения группируются по тегу, тег пишется как заголовок над группой. Текст кнопки меняется на "Разгруппировать"
- При нажатии на кнопку "Разгруппировать" — изображения отображаются друг за другом по очерёдности загрузки. Текст кнопки меняется на "Группировать"
- При нажатии на изображение поле ввода тега заполняется тегом, по которому искалось изображение
  Начальное состояние приложения: Поле ввода тега пустое, список изображений пуст, группировка не применена

### Api giphy

Запрос на получение изображения - `GET https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}C&tag=${TAG}`
В теле ответа возвращается JSON с полем image_url, который следует дальше использовать для отображения (из json ответа ниже удалены прочие поля).
Возможет дубликат image_url т.к. происходит запрос на случайное изображение, как-либо специально обрабатывать этот случай не надо.

`{ "data":{ "image_url":"https://media3.giphy.com/media/gkncW2jPvchwc/giphy.gif" } }`

При запросе тега, по которому нет изображений в поле data вернется пустой массив т.е:

`{"data":[]}`

### Требования к библиотекам

Приложение должно быть написано на JSX или Typescript с использованием React или Angular, требований и ограничений по прочим библиотекам нет.
При вводе npm start в корне репозитория должен запускаться dev сервер.

Критерии оценки
Задание оценивается по двум критериям - законченность и качество кода. По верстке требуется минимальное оформление на своё усмотрение.
