// NORMAL SEASON SMP - Website JavaScript

const menuButton = document.getElementById("menu");
const nav = document.getElementById("nav");

// Mobile menu
if (menuButton && nav) {
  menuButton.addEventListener("click", function () {
    nav.classList.toggle("open");
  });

  document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
    });
  });
}

// Copy server IP
async function copyValue(value) {
  try {
    await navigator.clipboard.writeText(value);
  } catch (error) {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    document.execCommand("copy");
    textarea.remove();
  }
}

// Copy buttons
document.querySelectorAll("[data-copy]").forEach(function (button) {
  button.addEventListener("click", async function () {
    const target = document.getElementById(button.dataset.copy);

    if (!target) {
      return;
    }

    const value = target.textContent.trim();

    await copyValue(value);

    const oldText = button.textContent;
    button.textContent = "COPIED!";

    setTimeout(function () {
      button.textContent = oldText;
    }, 1400);
  });
});
