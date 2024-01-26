import install from "@twind/with-web-components";
import config from "@/../twind.config.ts";

class ActionPill extends install(config)(HTMLElement) {
  constructor() {
    super();

    const root = this.attachShadow({ mode: "open" });
    const copyText = "Copier ?";

    root.innerHTML = `
    <div class="mb-6 rounded-xl h-10 border border-gray-600 bg-[#212121] flex relative items-stretch overflow-hidden cursor-pointer">
      <div class="bg-gray-700 flex items-center px-4 text-black whitespace-nowrap">${this.getAttribute("sign") ?? "$"}</div>
      <code class="px-2 flex items-center whitespace-nowrap overflow-x-auto w-full"><slot/></code>
      <button class="whitespace-nowrap pr-3">${copyText}</button>
    </div>`;

    const content = root.querySelector("slot")?.assignedNodes()[0]?.textContent || "";

    root.addEventListener("click", () => {
      navigator.clipboard.writeText(content);
      // root.querySelector("button")!.innerHTML = "Copied !";
    });
  }
}

customElements.define("action-pill", ActionPill);
