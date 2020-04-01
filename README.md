# songbird

Приложение Songbird - викторина распознавания птиц по их голосам.

## Структура приложения
Игровое поле викторины состоит из четырёх блоков: 
1. header
2. блок с текущим вопросом
3. блок с вариантами ответов
4. блок с описанием птицы

## Описание основных блоков

- header содержит название или логотип приложения, счёт игры, список вопросов.  
- блок с вопросом содержит аудиоплеер с записью голоса птицы и заглушки на месте названия и изображения птицы. Когда игрок выбирает правильный ответ, в блоке с вопросом отображаются название и изображение птицы, голос которой звучвл.  
- блок с вариантами ответов содержит список с названиями шести разных птиц.  
- блок с описанием птицы содержит данные о ней: изображение, русское и латинское название, аудиозапись голоса, короткая информация.

## Механизм игры

- птица в блоке с вопросом рандомно выбирается из списка с вариантами ответов
- при клике по одному из пунктов списка с вариантами ответов, в блоке с описанием птицы выводятся информация о ней
- если игрок выбрал правильный ответ, в блоке с вопросом выводится название и изображение птицы
- на старте игры score: 0. Если игрок дал правильный ответ с первой попытки, его счёт увеличивается на 5 баллов, каждая следующая попытка даёт на один балл меньше, если правильный ответ дан только с последней, шестой попытки, игрок получает за него 0 баллов
- для правильных и неправильных ответов игрока используется звуковая и цветовая индикация
- когда игрок дал правильный ответ, активируется кнопка "Дальше" и он получает возможность перейти к следующему вопросу
- после последнего вопроса выводится счёт игры: "Вы набрали *** баллов из *** возможных. 
- если набрано не максимально возможное количество баллов, игроку предлагается пройти викторину ещё раз
- если набрано максимально возможное количество баллов, выводится поздравление и уведомление об окончании игры.

  - минимальная ширина страницы, при которой приложение отображается корректно – 320 рх
  
- **Аудиоплеер**
  - кастомный 
  
- **Header**
  - правильное отображение текущего счета игры
  - индикация текущего вопроса
- **Блок с вопросом**
  - подстановка дефолтного изображения и замена названия птицы на символы (*), пока игрок не выберет правильный ответ
  - при выборе правильного ответа появляется изображение и название птицы
- **Блок с вариантами ответов (названия птиц)**
  - цветовая индикация правильного/неправильного ответа
  - при клике по названию птицы в блоке с описанием птицы отображается информацию о ней
  Если правильный ответ уже дан, возможность просматривать описания птиц при клике по названию остаётся, цвет индикаторов при этом не изменяется.
- **Блок с описанием птицы**
  - пока игрок не кликнул по названию птицы из списка, в блоке выводится короткий текст с предложением послушать плеер и выбрать название птицы, чей голос прозвучал
  - при клике по названию птицы из списка, в блоке с описанием птицы появляется актуальная информация о ней
  Информация о птице включает:
    - изображение
    - название (на русском и на латыни)
    - аудиоплеер с записью голоса
    - дополнительное описание.
    
- **Кнопка перехода к следующему вопросу**
  - пока не выбран правильный ответ, кнопка не активна, нет возможности перейти к следующему заданию. Активное и неактивное состояние кнопки визуально отличаются, например, активная кнопка имеет зеленый, не активная - серый цвет
  - после правильного ответа на последний вопрос, клик по кнопке скрывает блок с вопросом, блок с вариантами ответов и блок с описанием птицы. Появляется cообщение с поздравлением об окончании игры
  Сообщение содержит количество набранных баллов из максимально возможныч и кнопку с предложение сыграть ещё раз. 
  - звуковая индикация правильного/неправильного ответа 
    - при выборе правильного или неправильного ответа издаются разные звуковые сигналы
    - при выборе неправильного ответа проигрывание аудиоплеера не должно останавливаться
    - при выборе правильно ответа аудиоплеер должен остновиться
  - Поздравление с абсолютной победой, если набрано максимально возможное количество баллов 
