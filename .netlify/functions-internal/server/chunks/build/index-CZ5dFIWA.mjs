import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { c as useRoute, B as _sfc_main$m, C as _sfc_main$p, D as _sfc_main$r, E as _sfc_main$q } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@iconify/utils';
import 'consola';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import '@prismicio/client';
import '@prismicio/client/richtext';
import 'esm-env';
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main$2 = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
  // optional, prevents double class merging issues
}, {
  __name: "AbstractLine",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: "40",
        height: "43",
        viewBox: "0 0 40 43",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _ctx.$attrs, _attrs))}><path fill-rule="evenodd" class="fill-[#ff9e2e] dark:fill-white" clip-rule="evenodd" d="M13.5489 40.1274C9.82492 39.0757 5.92609 38.5452 2.14397 38.0592C1.32936 37.9573 0.573044 38.5259 0.514858 39.3269C0.398485 40.1286 0.980691 40.8617 1.73712 40.9636C5.40286 41.4314 9.18465 41.9321 12.734 42.9445C13.4904 43.1641 14.3054 42.7121 14.5381 41.9345C14.7709 41.1574 14.3053 40.3476 13.5489 40.1274Z" fill="white"></path><path fill-rule="evenodd" class="fill-[#ff9e2e] dark:fill-white" clip-rule="evenodd" d="M24.8366 25.2172C18.8434 19.0623 12.0937 13.6997 6.21688 7.37974C5.69321 6.78949 4.76222 6.75787 4.18036 7.30888C3.59849 7.86048 3.54053 8.78802 4.1224 9.37826C9.99923 15.7164 16.7489 21.0966 22.7421 27.2696C23.3239 27.8458 24.2547 27.854 24.8366 27.2872C25.3602 26.7209 25.4184 25.7934 24.8366 25.2172Z" fill="white"></path><path fill-rule="evenodd" class="fill-[#ff9e2e] dark:fill-white" clip-rule="evenodd" d="M36.0673 1.54341C36.2419 5.06616 36.4161 8.58891 36.5907 12.1123C36.5907 12.9192 37.2893 13.5422 38.1039 13.503C38.9185 13.4631 39.5 12.7763 39.5 11.9688C39.3254 8.44018 39.1512 4.91216 38.9767 1.38413C38.9185 0.577224 38.2201 -0.0417174 37.4055 0.00219986C36.6491 0.0461172 36.0092 0.737085 36.0673 1.54341Z" fill="white"></path></svg>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AbstractLine.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FullHero",
  __ssrInlineRender: true,
  props: {
    slice: {}
  },
  setup(__props) {
    const props = __props;
    const p = props.slice.primary;
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AbstractLine = _sfc_main$2;
      const _component_PrismicRichText = _sfc_main$m;
      const _component_PrismicLink = _sfc_main$p;
      const _component_PrismicEmbed = _sfc_main$r;
      const _component_PrismicImage = _sfc_main$q;
      _push(`<section${ssrRenderAttrs(mergeProps({
        "data-slice-variation": _ctx.slice.variation,
        class: ["relative text-center", { "glow px-6 rounded-2xl": _ctx.slice.variation == "secondary" }]
      }, _attrs))}><div class="mx-auto max-w-7xl px-6 py-16">`);
      if (unref(p).badge) {
        _push(`<div class="relative inline-flex items-center hero__badge" style="${ssrRenderStyle(_ctx.slice.variation === "default" ? null : { display: "none" })}">`);
        _push(ssrRenderComponent(_component_AbstractLine, { class: "absolute -left-7 -top-6 h-10 w-10 pointer-events-none animate-bounce" }, null, _parent));
        _push(`<p class="inline-block bg-[#E9EBFC] text-primary dark:text-white border-0 p-2.5 rounded-lg dark:bg-white/[.02] text-xs font-inter font-semibold">${ssrInterpolate(unref(p).badge)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_PrismicRichText, {
        field: unref(p).heading,
        wrapper: "div",
        class: ["mt-3 text-4xl font-poppins text-custom-black dark:text-white md:text-6xl font-bold mb-3", {
          "text-xl! md:text-3xl!": _ctx.slice.variation !== "default",
          "hero__heading": unref(route).name !== "privacy-policy" && unref(route).name !== "terms-and-conditions"
        }]
      }, null, _parent));
      if (unref(p).body) {
        _push(ssrRenderComponent(_component_PrismicRichText, {
          field: unref(p).body,
          wrapper: "p",
          class: ["mt-3 text-sm md:text-xl opacity-80 text-[#2E3754] dark:text-[#A1A4B5] fon-inter fullHeroParagraph leading-relaxed md:w-3/4 md:m-auto", {
            "text-xs! md:text-base! w-full lg:w-[80%] m-auto": _ctx.slice.variation !== "default",
            "hero__body": unref(route).name !== "privacy-policy"
          }]
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(p).ctas && unref(p).ctas.length > 0) {
        _push(`<div class="mt-6 flex flex-wrap justify-center gap-4 hero__button"><!--[-->`);
        ssrRenderList(_ctx.slice.primary.ctas, (cta) => {
          _push(ssrRenderComponent(_component_PrismicLink, {
            key: cta.key,
            class: {
              "buttonLink bg-brand-gradient ml-2 text-white transition duration-500 hover:scale-110": cta.variant === "Primary",
              "text-custom-gradient font-medium dark:text-custom-gradient border font-poppins border-[#F68E15] rounded-[8px] px-4 py-3 transition duration-500 hover:scale-110": cta.variant === "Secondary"
            },
            field: cta
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_PrismicEmbed, {
        field: _ctx.slice.primary.videolink,
        class: ["hero__media rounded-2xl w-full aspect-video overflow-hidden", { "video-secondary": _ctx.slice.variation == "secondary" }]
      }, null, _parent));
      if (_ctx.slice.primary.image) {
        _push(ssrRenderComponent(_component_PrismicImage, {
          field: _ctx.slice.primary.image,
          class: "hero__media w-full lg:w-3/4 rounded-2xl m-auto"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/Hero/FullHero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    slice: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ slice: __props.slice }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/Hero/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CZ5dFIWA.mjs.map
