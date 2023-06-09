/**
 * quote
 * @author kyeonghye
 * @since 2023/06/09
 * quote text UI
 */

const quotes = [
    {
        quote: "녹이 슨 심장에 쉼 없이 피는 꿈, 무모하대도 믿어 난",
        author: "윤하"
    }
];

const quoteElement = document.querySelector("#quote span:first-child");
const authorElement = document.querySelector("#quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quoteElement.innerText = randomQuote.quote;
authorElement.innerText = randomQuote.author;