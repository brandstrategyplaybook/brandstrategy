import { C as _sfc_main$p, F as _sfc_main$i } from './server.mjs';
import { g as getSliceComponentProps } from './getSliceComponentProps-DZY85aVg.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: getSliceComponentProps(),
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PrismicLink = _sfc_main$p;
      const _component_PrismicText = _sfc_main$i;
      _push(`<section${ssrRenderAttrs(mergeProps({
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation,
        id: _ctx.slice.slice_type
      }, _attrs))}><div class="max-w-7xl mx-auto my-20"><div class="flex flex-col items-center gap-2 text-center"><h3 class="font-poppins text-custom-black text-center dark:text-white text-xl md:text-4xl font-bold">${ssrInterpolate(_ctx.slice.primary.heading)}</h3><p class="text-[#5F5D73] dark:text-white/60 font-inter text-base md:text-lg leading-relaxed max-w-2xl">${ssrInterpolate(_ctx.slice.primary.text)}</p></div><div class="flex flex-col md:flex-row gap-8 my-10"><div class="relative flex-1 pricing-bg-card rounded-2xl p-8 md:p-10">`);
      if (_ctx.slice.primary.badge) {
        _push(`<span class="inline-flex items-center px-3 py-1 text-xs font-poppins font-medium rounded-lg bg-white/10">${ssrInterpolate(_ctx.slice.primary.badge)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="h-full"><div class="my-3 font-poppins">`);
      if (_ctx.slice.primary.badge) {
        _push(`<div class="text-2xl md:text-3xl font-bold leading-none font-poppins text-custom-black dark:text-white line-through">${ssrInterpolate(_ctx.slice.primary.strikethrough_price)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="my-3 font-poppins">`);
      if (_ctx.slice.primary.badge) {
        _push(`<div class="text-5xl md:text-5xl font-bold leading-none font-poppins text-custom-black dark:text-white">${ssrInterpolate(_ctx.slice.primary.price)} `);
        if (_ctx.slice.primary.badge) {
          _push(`<span class="text-sm text-custom-black dark:text-white">/One-Time</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.slice.primary.subheading) {
        _push(`<h3 class="text-xl mt-5 md:text-2xl font-poppins font-semibold">${ssrInterpolate(_ctx.slice.primary.subheading)}</h3>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.slice.primary.subheading) {
        _push(`<p class="text-base dark:text-white/60 font-inter">Best for personal use.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.slice.primary.first_column, (item) => {
        _push(`<ul class="mt-3 space-y-3 font-inter text-[#5F5D73] dark:text-white/60 font-medium"><li class="flex items-start gap-3"><svg class="mt-1 w-5 h-5 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 12l5 5L20 7"></path></svg><span>${ssrInterpolate(item.text)}</span></li></ul>`);
      });
      _push(`<!--]-->`);
      if (_ctx.slice.primary.button) {
        _push(`<button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl buttonLink bg-brand-gradient ml-2 text-white font-semibold transition hover:scale-110 w-full! mt-6">`);
        _push(ssrRenderComponent(_component_PrismicLink, {
          field: _ctx.slice.primary.button,
          class: "relative z-10"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.slice.primary.button.text)}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.slice.primary.button.text), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div class="relative h-full w-8 bg-white/20"></div></div></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="flex-1 pricing-bg-card rounded-2xl p-8 md:p-10">`);
      if (_ctx.slice.primary.second_column_heading) {
        _push(`<h3 class="text-2xl font-poppins font-semibold">${ssrInterpolate(_ctx.slice.primary.second_column_heading)}</h3>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.slice.primary.second_column_text) {
        _push(`<p class="mt-3 text-[#5F5D73] dark:text-white/60 font-inter text-base leading-relaxed">`);
        _push(ssrRenderComponent(_component_PrismicText, {
          field: _ctx.slice.primary.second_column_text
        }, null, _parent));
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.slice.primary.second_button) {
        _push(`<button class="text-custom-gradient dark:text-custom-gradient border font-poppins group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl ml-2 text-white font-medium transition hover:scale-110 w-full! mt-6 border-[#F68E15] px-4 py-3">`);
        _push(ssrRenderComponent(_component_PrismicLink, {
          field: _ctx.slice.primary.second_button,
          class: ""
        }, null, _parent));
        _push(`<div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div class="relative h-full w-8 bg-primary/20"></div></div></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><p class="text-center text-custom-gradient text-xl font-poppins font-semibold">Apply for scholarship pricing</p></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/Pricing/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DoWKVxm8.mjs.map
