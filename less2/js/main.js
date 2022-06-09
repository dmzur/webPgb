'use strict';

import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import "./switcher.js";
import "./timer.js";


const dateCalcForm = document.getElementById("dateCalc");
const dateCalcResult = document.getElementById("dateCalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    } else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}