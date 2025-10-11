import { B as _sfc_main$m } from './server.mjs';
import { g as getSliceComponentProps } from './getSliceComponentProps-DZY85aVg.mjs';
import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
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
  __name: "SimpleText",
  __ssrInlineRender: true,
  props: getSliceComponentProps(),
  setup(__props) {
    const root = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PrismicRichText = _sfc_main$m;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "root",
        ref: root,
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation,
        class: "comparison"
      }, _attrs))}><div class="rounded-2xl mt-20 mb-10 p-4 md:py-12 md:px-12 bg-white border border-[#F1F0F3] dark:border-0 dark:bg-[#1828591f] dark:footer-flow comparison__title"><div class="flex flex-col gap-6 md:flex-row"><div class="comparison__card flex-1 light-bg-card-comparison dark:bg-card-comparison rounded-2xl border border-white/10 p-6"><h3 class="mb-4 font-poppins text-sm md:text-xl font-bold text-custom-black dark:text-white">${ssrInterpolate(_ctx.slice.primary.first_column_heading || "Before: Brand Chaos")}</h3><ul class="flex flex-col gap-3 text-base text-[#5F5D73] dark:text-white/60 font-inter font-medium leading-loose list-disc list-inside"><!--[-->`);
      ssrRenderList(_ctx.slice.primary.before, (item, i) => {
        _push(`<li class="list-item items-center gap-3"><span>${ssrInterpolate(item.name_list)}</span></li>`);
      });
      _push(`<!--]--></ul></div><div class="comparison__card flex-1 rounded-2xl border border-white/10 variation-bg-card-comparison p-6 dark:bg-card-comparison"><h3 class="mb-4 font-poppins text-sm md:text-xl font-bold text-custom-black dark:text-white">${ssrInterpolate(_ctx.slice.primary.second_column_heading || "After: Brand Clarity")}</h3>`);
      _push(ssrRenderComponent(_component_PrismicRichText, {
        field: _ctx.slice.primary.text,
        wrapper: "div",
        class: "font-inter text-base text-[#2E3754] dark:text-white/60"
      }, null, _parent));
      _push(`</div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/Comparison/SimpleText.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=SimpleText-CRzwd5_e.mjs.map
