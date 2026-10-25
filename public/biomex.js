/* Biomex
 * Pega esto donde quieras la agenda. El script abre una ventana hacia Biomex.
 *
 * <div id="biomex-agenda" data-biomex-clinic="vitadentis"></div>
 * <script src="https://vitadentis.mx/biomex.js" async></script>
 *
 * Atributos opcionales en el div:
 * data-biomex-service="limpieza-dental"
 * data-biomex-office="clouthier"
 * data-biomex-origin="https://biomex.mx"
 *
 * Si el script se sirve desde biomex.mx, la ventana apunta sola a ese dominio.
 */
(function (window, document) {
  function originFrom(script) {
    try {
      return new URL(script.src, window.location.href).origin;
    } catch {
      return window.location.origin;
    }
  }

  function mount(host) {
    if (!host || host.getAttribute("data-biomex-ready") === "1") return;
    var clinic = host.getAttribute("data-biomex-clinic");
    if (!clinic) return;

    var scripts = document.querySelectorAll('script[src*="biomex.js"]');
    var script = scripts[scripts.length - 1];
    var origin =
      host.getAttribute("data-biomex-origin") ||
      (script ? originFrom(script) : window.location.origin);

    var params = new URLSearchParams();
    var office = host.getAttribute("data-biomex-office");
    var service = host.getAttribute("data-biomex-service");
    if (office) params.set("consultorio", office);
    if (service) params.set("servicio", service);
    var query = params.toString();

    host.setAttribute("data-biomex-ready", "1");
    host.textContent = "";

    var iframe = document.createElement("iframe");
    iframe.src =
      origin.replace(/\/$/, "") +
      "/embed/" +
      encodeURIComponent(clinic) +
      (query ? "?" + query : "");
    iframe.title = "Agenda tu cita";
    iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
    iframe.style.width = "100%";
    iframe.style.border = "0";
    iframe.style.display = "block";
    iframe.style.minHeight = "640px";
    iframe.style.background = "#ffffff";
    host.appendChild(iframe);

    window.addEventListener("message", function (event) {
      if (!iframe.contentWindow || event.source !== iframe.contentWindow) return;
      var data = event.data;
      if (!data || data.type !== "biomex:resize") return;
      var height = Number(data.height);
      if (!Number.isFinite(height) || height < 320 || height > 5000) return;
      iframe.style.height = Math.ceil(height) + "px";
    });
  }

  function scan() {
    var nodes = document.querySelectorAll("[data-biomex-clinic]");
    for (var index = 0; index < nodes.length; index += 1) mount(nodes[index]);
  }

  window.Biomex = { scan: scan };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scan);
  } else {
    scan();
  }
})(window, document);
