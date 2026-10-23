/*
  CONFIGURAÇÃO:
  1. Troque o número abaixo pelo WhatsApp da agência.
  2. Use o formato internacional sem +, espaços ou traços.
  Exemplo Brasil: 5511999999999
*/
const WHATSAPP_NUMBER = "5531993706761";

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

mainNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-plan]").forEach((link) => {
  link.addEventListener("click", () => {
    const serviceSelect = document.getElementById("service");
    const plan = link.dataset.plan || "";
    const option = [...serviceSelect.options].find((item) => item.text.toLowerCase().includes(plan.toLowerCase()));
    if (option) serviceSelect.value = option.value;
    else if (plan.toLowerCase().includes("manutenção")) serviceSelect.value = "Manutenção mensal";
    else if (plan.toLowerCase().includes("premium")) serviceSelect.value = "Projeto Premium personalizado";
  });
});

document.querySelector(".floating-whatsapp")?.addEventListener("click", (event) => {
  event.preventDefault();
  openWhatsApp("Olá! Gostaria de saber mais sobre os serviços de criação de sites.");
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = String(form.get("name") || "").trim();
  const business = String(form.get("business") || "").trim();
  const service = String(form.get("service") || "").trim();
  const details = String(form.get("details") || "").trim();

  const message = [
    "Olá! Gostaria de solicitar um orçamento para criação de site.",
    `Nome: ${name}`,
    business ? `Negócio: ${business}` : "",
    `Serviço de interesse: ${service}`,
    details ? `Detalhes: ${details}` : ""
  ].filter(Boolean).join("\n");

  openWhatsApp(message);
});

function openWhatsApp(message) {
  if (WHATSAPP_NUMBER === "5500000000000") {
    alert("Antes de usar o WhatsApp, abra o arquivo script.js e substitua WHATSAPP_NUMBER pelo número da sua agência, com código do país e DDD.");
    return;
  }
  const url = `https://wa.me/${5531993706761}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
