import { s as _sfc_main$h } from './server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { g as getSliceComponentProps } from './getSliceComponentProps-DZY85aVg.mjs';
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
      const _component_UIcon = _sfc_main$h;
      _push(`<section${ssrRenderAttrs(mergeProps({
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation
      }, _attrs))}><div class="flex flex-col items-center gap-2 text-center mt-20 comparison__title"><h3 class="font-poppins text-custom-black text-center dark:text-white text-xl md:text-3xl font-bold">${ssrInterpolate(_ctx.slice.primary.heading)}</h3><p class="text-sm md:text-xl opacity-80 text-[#2E3754] dark:text-[#A1A4B5] fon-inter fullHeroParagraph leading-relaxed">${ssrInterpolate(_ctx.slice.primary.text)}</p></div><div class="w-full p-4 rounded-2xl mt-5 mb-20 md:py-12 md:px-12 bg-white dark:bg-[#1828591f] dark:footer-flow comparison__card"><div class="mx-auto max-w-6xl"><div class="flex flex-col flex-wrap gap-5 xl:gap-0 xl:justify-between md:flex-row"><!--[-->`);
      ssrRenderList(_ctx.slice.primary.tiles, (item) => {
        _push(`<article class="relative w-full md:w-[48%] xl:w-[24%] text-center rounded-2xl border border-white/10 light-bg-card-steps p-6"><div class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-white dark:bg-white/10">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: item.svg,
          class: "size-10"
        }, null, _parent));
        _push(`</div><p class="mb-1 text-sm font-poppins tracking-wide font-bold text-custom-gradient">${ssrInterpolate(item.step_order)}</p><h3 class="mb-2 text-base font-poppins font-semibold text-custom-black dark:text-white">${ssrInterpolate(item.heading)}</h3><p class="text-xs font-inter text-[#2E3754] dark:text-white/70">${ssrInterpolate(item.text)}</p></article>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/Steps/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Hldv6zR-.mjs.map
