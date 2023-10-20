"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
  [
    "app_assets_modules_github_updatable-content_ts-ui_packages_hydro-analytics_hydro-analytics_ts",
  ],
  {
    64611: (e, t, n) => {
      let r, o, i;
      n.d(t, { M: () => u, T: () => s });
      var a = n(14840),
        l = n(58700);
      function u(e, t = !1, n = !1) {
        return (!n && s(e)) || f(e, t) || h(e) || b(e);
      }
      function s(e) {
        for (let t of e.querySelectorAll("input, textarea"))
          if (
            (t instanceof HTMLInputElement ||
              t instanceof HTMLTextAreaElement) &&
            c(t)
          )
            return !0;
        return !1;
      }
      function c(e) {
        if (
          e instanceof HTMLInputElement &&
          ("checkbox" === e.type || "radio" === e.type)
        ) {
          if (e.checked !== e.defaultChecked) return !0;
        } else if (e.value !== e.defaultValue) return !0;
        return !1;
      }
      function d(e) {
        return r instanceof Element
          ? r
          : e && e.ownerDocument && e.ownerDocument.activeElement
          ? e.ownerDocument.activeElement
          : null;
      }
      function f(e, t) {
        let n = d(e);
        if (null === n || (t && n === e)) return !1;
        let r = n === e && (0, l.sw)(n);
        if (r) return !0;
        let o = e.contains(n) && !p(n);
        if (o) return !0;
        let a =
          i instanceof Element &&
          e.contains(i) &&
          !!i.closest("details[open] > summary");
        return a;
      }
      document.addEventListener(
        "mousedown",
        function (e) {
          o = e.target;
        },
        !0
      ),
        document.addEventListener(
          "mouseup",
          function (e) {
            (o = null), (i = e.target);
          },
          !0
        ),
        document.addEventListener(
          "contextmenu",
          function (e) {
            (o = null), (i = e.target);
          },
          !0
        ),
        document.addEventListener(
          "dragend",
          function () {
            o = null;
          },
          !0
        );
      let m = "a[href], button";
      function p(e) {
        if (e instanceof a.Z) return !0;
        let t =
            e instanceof HTMLAnchorElement || e instanceof HTMLButtonElement,
          n = e.parentElement?.classList.contains("task-list-item");
        if (t && n) return !0;
        if (!(i instanceof Element)) return !1;
        let r = e.closest(m);
        if (!r) return !1;
        let o = i.closest(m);
        return r === o;
      }
      function h(e) {
        return e.matches(":active:enabled") || e.contains(o);
      }
      function b(e) {
        return !!(e.closest(".is-dirty") || e.querySelector(".is-dirty"));
      }
    },
    9302: (e, t, n) => {
      let r, o;
      n.d(t, { lO: () => m, qA: () => f, y0: () => l });
      let i = [],
        a = 0;
      function l() {
        return r;
      }
      function u() {
        try {
          return Math.min(Math.max(0, history.length) || 0, 9007199254740991);
        } catch (e) {
          return 0;
        }
      }
      function s() {
        return u() - 1 + a;
      }
      function c(e) {
        r = e;
        let t = location.href;
        (i[s()] = { url: t, state: r }),
          (i.length = u()),
          window.dispatchEvent(
            new CustomEvent("statechange", { bubbles: !1, cancelable: !1 })
          );
      }
      function d() {
        return new Date().getTime();
      }
      function f(e, t, n) {
        a = 0;
        let r = { _id: d(), ...e };
        history.pushState(r, t, n), c(r);
      }
      function m(e, t, n) {
        let r = { ...l(), ...e };
        history.replaceState(r, t, n), c(r);
      }
      (r = (function () {
        let e = { _id: new Date().getTime(), ...history.state };
        return c(e), e;
      })()),
        window.addEventListener(
          "popstate",
          function (e) {
            let t = e.state;
            if (!t || (!t._id && !t.turbo?.restorationIdentifier)) return;
            let n = t.turbo?.restorationIdentifier,
              r = i[s() - 1]?.state?.turbo?.restorationIdentifier;
            r === n ? a-- : a++, c(t);
          },
          !0
        ),
        window.addEventListener("turbo:visit", (e) => {
          e instanceof CustomEvent && (o = e.detail.action);
        }),
        window.addEventListener("turbo:load", () => {
          "restore" !== o && ((a = 0), m(history.state, "", ""));
        }),
        window.addEventListener(
          "hashchange",
          function () {
            if (u() > i.length) {
              let e = { _id: d() };
              history.replaceState(e, "", location.href), c(e);
            }
          },
          !0
        ),
        window.addEventListener("pageshow", () => {
          (i = []), (a = 0);
        });
    },
    22971: (e, t, n) => {
      n.d(t, { H5: () => d, Of: () => p, x0: () => m, z8: () => f });
      var r = n(64611),
        o = n(36071),
        i = n(5875),
        a = n(67525),
        l = n(96776),
        u = n(9302);
      let s = new WeakMap(),
        c = {};
      function d() {
        for (let e of Object.keys(c)) delete c[e];
        let e = history.state || {};
        (e.staleRecords = c),
          (0, u.lO)(e, "", location.href),
          window.location.reload();
      }
      function f() {
        if (Object.keys(c).length > 0) {
          let e = history.state || {};
          (e.staleRecords = c), (0, u.lO)(e, "", location.href);
        }
      }
      async function m(e) {
        if (s.get(e)) return;
        let t = e.hasAttribute("data-retain-focus"),
          n = e.getAttribute("data-url");
        if (!n) throw Error("could not get url");
        let o = new AbortController();
        s.set(e, o);
        try {
          let i = await fetch(n, {
            signal: o.signal,
            headers: {
              Accept: "text/html",
              "X-Requested-With": "XMLHttpRequest",
            },
          });
          if (!i.ok) return;
          let a = await i.text();
          if ((0, r.M)(e, t)) {
            console.warn("Failed to update content with interactions", e);
            return;
          }
          return (c[n] = a), h(e, a, t);
        } catch {
        } finally {
          s.delete(e);
        }
      }
      async function p(e, t, n = !1) {
        let r = s.get(e);
        r?.abort();
        let o = e.closest(
          ".js-updatable-content[data-url], .js-updatable-content [data-url]"
        );
        return (
          !n && o && o === e && (c[o.getAttribute("data-url") || ""] = t),
          h(e, t)
        );
      }
      function h(e, t, n = !1) {
        return (0, l._8)(document, () => {
          let r = (0, a.r)(document, t.trim()),
            o =
              n && e.ownerDocument && e === e.ownerDocument.activeElement
                ? r.querySelector("*")
                : null,
            l = Array.from(e.querySelectorAll("details[open][id]")).map(
              (e) => e.id
            );
          for (let t of ("DETAILS" === e.tagName &&
            e.id &&
            e.hasAttribute("open") &&
            l.push(e.id),
          e.querySelectorAll(
            ".js-updatable-content-preserve-scroll-position"
          ))) {
            let e =
              t.getAttribute("data-updatable-content-scroll-position-id") || "";
            b.set(e, t.scrollTop);
          }
          for (let e of l) {
            let t = r.querySelector(`#${e}`);
            t && t.setAttribute("open", "");
          }
          (0, i.nn)(e, r), o instanceof HTMLElement && o.focus();
        });
      }
      let b = new Map();
      (0, o.N7)(".js-updatable-content-preserve-scroll-position", {
        constructor: HTMLElement,
        add(e) {
          let t = e.getAttribute("data-updatable-content-scroll-position-id");
          if (!t) return;
          let n = b.get(t);
          null != n && (e.scrollTop = n);
        },
      });
    },
    58700: (e, t, n) => {
      n.d(t, {
        Bt: () => i,
        DN: () => u,
        KL: () => d,
        Se: () => l,
        qC: () => f,
        sw: () => s,
      });
      var r = n(5582);
      function o(e, t, n) {
        return e.dispatchEvent(
          new CustomEvent(t, { bubbles: !0, cancelable: n })
        );
      }
      function i(e, t) {
        t && (a(e, t), (0, r.j)(t)), o(e, "submit", !0) && e.submit();
      }
      function a(e, t) {
        if (!(e instanceof HTMLFormElement))
          throw TypeError(
            "The specified element is not of type HTMLFormElement."
          );
        if (!(t instanceof HTMLElement))
          throw TypeError("The specified element is not of type HTMLElement.");
        if ("submit" !== t.type)
          throw TypeError("The specified element is not a submit button.");
        if (!e || e !== t.form)
          throw Error(
            "The specified element is not owned by the form element."
          );
      }
      function l(e, t) {
        if ("boolean" == typeof t) {
          if (e instanceof HTMLInputElement) e.checked = t;
          else throw TypeError("only checkboxes can be set to boolean value");
        } else {
          if ("checkbox" === e.type)
            throw TypeError("checkbox can't be set to string value");
          e.value = t;
        }
        o(e, "change", !1);
      }
      function u(e, t) {
        for (let n in t) {
          let r = t[n],
            o = e.elements.namedItem(n);
          o instanceof HTMLInputElement
            ? (o.value = r)
            : o instanceof HTMLTextAreaElement && (o.value = r);
        }
      }
      function s(e) {
        if (!(e instanceof HTMLElement)) return !1;
        let t = e.nodeName.toLowerCase(),
          n = (e.getAttribute("type") || "").toLowerCase();
        return (
          "select" === t ||
          "textarea" === t ||
          ("input" === t && "submit" !== n && "reset" !== n) ||
          e.isContentEditable
        );
      }
      function c(e) {
        return new URLSearchParams(e);
      }
      function d(e, t) {
        let n = new URLSearchParams(e.search),
          r = c(t);
        for (let [e, t] of r) n.append(e, t);
        return n.toString();
      }
      function f(e) {
        return c(new FormData(e)).toString();
      }
    },
    5582: (e, t, n) => {
      function r(e) {
        let t = e.closest("form");
        if (!(t instanceof HTMLFormElement)) return;
        let n = o(t);
        if (e.name) {
          let r = e.matches("input[type=submit]") ? "Submit" : "",
            o = e.value || r;
          n ||
            (((n = document.createElement("input")).type = "hidden"),
            n.classList.add("js-submit-button-value"),
            t.prepend(n)),
            (n.name = e.name),
            (n.value = o);
        } else n && n.remove();
      }
      function o(e) {
        let t = e.querySelector("input.js-submit-button-value");
        return t instanceof HTMLInputElement ? t : null;
      }
      n.d(t, { j: () => r, u: () => o });
    },
    95253: (e, t, n) => {
      let r;
      n.d(t, { YT: () => f, qP: () => m, yM: () => p });
      var o = n(88149),
        i = n(86058),
        a = n(44544),
        l = n(71643);
      let { getItem: u } = (0, a.Z)("localStorage"),
        s = "dimension_",
        c = [
          "utm_source",
          "utm_medium",
          "utm_campaign",
          "utm_term",
          "utm_content",
          "scid",
        ];
      try {
        let e = (0, o.n)("octolytics");
        delete e.baseContext, (r = new i.R(e));
      } catch (e) {}
      function d(e) {
        let t = (0, o.n)("octolytics").baseContext || {};
        if (t)
          for (let [e, n] of (delete t.app_id,
          delete t.event_url,
          delete t.host,
          Object.entries(t)))
            e.startsWith(s) && ((t[e.replace(s, "")] = n), delete t[e]);
        let n = document.querySelector("meta[name=visitor-payload]");
        if (n) {
          let e = JSON.parse(atob(n.content));
          Object.assign(t, e);
        }
        let r = new URLSearchParams(window.location.search);
        for (let [e, n] of r) c.includes(e.toLowerCase()) && (t[e] = n);
        return (t.staff = (0, l.B)().toString()), Object.assign(t, e);
      }
      function f(e) {
        r?.sendPageView(d(e));
      }
      function m(e, t = {}) {
        let n = document.head?.querySelector(
            'meta[name="current-catalog-service"]'
          )?.content,
          o = n ? { service: n } : {};
        for (let [e, n] of Object.entries(t)) null != n && (o[e] = `${n}`);
        r && (d(o), r.sendEvent(e || "unknown", d(o)));
      }
      function p(e) {
        return Object.fromEntries(
          Object.entries(e).map(([e, t]) => [e, JSON.stringify(t)])
        );
      }
    },
    5875: (e, t, n) => {
      n.d(t, { j1: () => i, jI: () => l, nn: () => a });
      var r = n(39492);
      function o(e) {
        return {
          getNodeKey: () => null,
          onBeforeElUpdated: (t, n) => {
            if (
              "TURBO-FRAME" === n.tagName ||
              n.matches(".js-task-list-field, .contains-task-list") ||
              "false" === n.getAttribute("data-morpheus-enabled")
            )
              return t.replaceWith(n), !1;
            if (
              (t.hasAttribute("data-catalyst") &&
                n.setAttribute(
                  "data-catalyst",
                  t.getAttribute("data-catalyst") || ""
                ),
              t.hasAttribute("data-morpheus-ignore"))
            ) {
              let e = (t.getAttribute("data-morpheus-ignore") || "")
                .trim()
                .split(/\s+/);
              for (let r of e)
                t.hasAttribute(r)
                  ? n.setAttribute(r, t.getAttribute(r) || "")
                  : n.removeAttribute(r);
            }
            return (
              e?.keepInputValues &&
                ((n instanceof HTMLInputElement && n.type === t.type) ||
                  n instanceof HTMLTextAreaElement) &&
                (n instanceof HTMLInputElement &&
                ("checkbox" === n.type || "radio" === n.type)
                  ? (n.checked = t.checked)
                  : (n.value = t.value)),
              !0
            );
          },
          onBeforeElChildrenUpdated: (e, t) => {
            for (let n of [...e.childNodes, ...t.childNodes])
              n.nodeType === Node.COMMENT_NODE && n.remove();
            return !0;
          },
          onElUpdated: (e) => {
            e.connectedCallback &&
              queueMicrotask(() => {
                e.disconnectedCallback?.(), e.connectedCallback?.();
              });
          },
        };
      }
      function i(e) {
        let t = e.closest("[data-morpheus-enabled]");
        return null != t && "false" !== t.getAttribute("data-morpheus-enabled");
      }
      function a(e, t, n) {
        if ("string" == typeof t) {
          let e = document.createElement("template");
          (e.innerHTML = t), (t = e.content);
        }
        if (!i(e)) {
          e.replaceWith(t);
          return;
        }
        if (t instanceof DocumentFragment) {
          let i = Array.from(t.children);
          i.length
            ? ((0, r.Z)(e, i[0], o(n)), e.after(...i.slice(1)))
            : e.replaceWith(t);
        } else (0, r.Z)(e, t, o(n));
      }
      function l(e, t, n) {
        if (!i(e)) {
          e.innerHTML = t;
          return;
        }
        let a = "",
          l = "";
        e.firstChild?.nodeType === Node.TEXT_NODE &&
          (a = e.firstChild.nodeValue?.match(/^\s+/)?.[0] || ""),
          e.lastChild?.nodeType === Node.TEXT_NODE &&
            (l = e.lastChild.nodeValue?.match(/\s+$/)?.[0] || "");
        let u = e.cloneNode(!1);
        (u.innerHTML = `${a}${t.trim()}${l}`), (0, r.Z)(e, u, o(n));
      }
    },
  },
]);
