(()=>{"use strict";var t,e=+localStorage.getItem("uniqueKey")||0,o=[],n=document.querySelector(".todo__input"),c=document.querySelector(".todo__add-button");function r(t){var e=document.querySelector(".page"),n=document.getElementById("todo-template").content.querySelector(".todo__task-container").cloneNode(!0);n.querySelector(".todo__task").textContent=t.description,function(t){t.querySelector(".todo__delete-button").addEventListener("click",(function(t){var e=t.target.closest(".todo__task-container"),n=o.findIndex((function(t){return t.key==t.key}));o.splice(n,1),localStorage.setItem("todoList",JSON.stringify(o)),e.remove()}))}(n),e.append(n)}function i(){""===n.value?c.setAttribute("disabled",!0):c.removeAttribute("disabled")}c.addEventListener("click",(function(){var t=document.querySelector(".todo__input");e+=1,localStorage.setItem("uniqueKey",e);var n={key:e,description:t.value};o.push(n),localStorage.setItem("todoList",JSON.stringify(o)),r(n),t.value="",i()})),n.addEventListener("input",(function(){i()})),null!==(t=JSON.parse(localStorage.getItem("todoList")))&&(o=t).forEach((function(t){r(t)}));var l=document.querySelector(".scroll-to-top");l.addEventListener("click",(function(){window.scrollTo(0,0)})),window.addEventListener("scroll",(function(){scrollY>600?l.classList.add("scroll-to-top_active"):l.classList.remove("scroll-to-top_active")}))})();