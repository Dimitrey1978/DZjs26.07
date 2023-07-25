// ### task. Выбор селекторов
// Завершите работу функций. К каждому методу есть комментарий, объясняющий, что он должен вернуть.

// https://codesandbox.io/s/get-selectors-da-ngns2r

// Копирую код сюда:
const getDivElements = () => {
    // TODO: return all the div elements
    return document.querySelectorAll("div")
  };
  
  const getFooterLinks = () => {
    // TODO: return all the links that are in the footer-wrapper
    return document.querySelectorAll("#footer-wrapper a");
  };
  
  const getAboutLinks = () => {
    // TODO: return all the links that point to the About Us page
    return document.querySelectorAll(".about");
  };
  
  
  // Sample usage - do not modify
  getDivElements();
  getFooterLinks();
  getAboutLinks();




// ### task. Количество элементов
// Завершите функцию, чтобы она возвращала количество ссылок на странице

// https://codesandbox.io/s/get-all-links-da-wxrvzl?file=/src/js/index.js

// Копирую код сюда:

const getNumberOfLinks = () => {
    return document.querySelectorAll("a").length;
  };
  
  // Sample usage - do not modify
  getNumberOfLinks(); // 5

//   ### task. Текст внутри ссылок
// Завершите функцию, чтобы она выводила текст каждой ссылки в консоли.

// https://codesandbox.io/s/get-links-text-da-7rsvcq?file=/src/js/index.js

// Копирую код сюда:

const logLinksTexts = () => {
  // your code
  const links = document.querySelectorAll("a");

  links.forEach((element) => {
    console.log(element.innerText);
  });
};

// Sample usage - do not modify
logLinksTexts();

// ------------------------------------------------------------------------------------------------------------------------------
// ### project. Получение текста
// Завершите функцию, чтобы она возвращала массив всех абзацев, содержащих текст длиной менее 10 символов.

// https://codesandbox.io/s/get-text-da-r9vysv?file=/src/js/index.js

// Копирую код сюда:
const getShortTextParagraphs = () => {
  const arrayP = [...document.querySelectorAll("p")];
  const rezult = arrayP.filter((P) => P.textContent.length < 10);
  return rezult;
};

// Sample usage - do not modify
getShortTextParagraphs();

// ### task. **Получить форматированный контент**
// Завершите функцию, чтобы она возвращала содержимое тега `p` с содержащимся внутри него тегом. Пример вывода: `Welcome to your <strong>beautiful</strong> website!`.

// https://codesandbox.io/s/get-content-da-y6g3qc

// Копирую код сюда:
const getFormattedWelcomeMessage = () => {
  // your code
  return document.querySelector("#welcome-message").innerHTML;
};

// Sample usage - do not modify
getFormattedWelcomeMessage();


// ### task. Установка текста

// Завершите функцию, чтобы она приветствовала пользователя при входе в систему фразой: `"Hello, {name}!"`, где имя находится внутри тега `<strong>...</strong>`, родителем которого выступает тег `p` с идентификатором `welcome-message` (смотрите комментарий в коде HTML). 
// В задаче предполагается, что данный пользователь авторизован в системе, что подтверждает безопасность его действий. 
// Также при входе в систему пользователю необходимо пройти авторизацию, которая может занять несколько секунд. Напишите функцию так, чтобы она запускалась через две секунды.

// https://codesandbox.io/s/get-welcome-da-q2lwpt?file=/src/js/index.js

// Копирую код сюда:

/**
 * @param {string} name
 */
const setWelcomeMessage = (name) => {
  // your code
  setTimeout(
    () =>
      (document.getElementById(
        "welcome-message"
      ).innerHTML = `Hello, <strong>${name}</strong>!`),
    2000
  );
};

// Sample usage - do not modify
setWelcomeMessage("Sam");

// ### task. Получить имя пользователя
// Завершите функцию, чтобы она возвращала имя пользователя. По клику на кнопку данные должны появиться в консоли.
// https://codesandbox.io/s/get-data-da-wm3jml

// Копирую код сюда:
const getUserName = () => {
  // your code
  return document.getElementById('user-name')?.value;
};
