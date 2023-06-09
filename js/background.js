/**
 * background
 * @author kyeonghye
 * @since 2023/06/09
 * background image
 */

 const bgImages = ['bg01.jpeg', 'bg02.jpg', 'bg03.jpeg'];

 const randomBg = bgImages[Math.floor(Math.random() * bgImages.length)];

 const bgElement = document.createElement("img");

 bgElement.src = `img/${randomBg}`;
 document.body.appendChild(bgElement);