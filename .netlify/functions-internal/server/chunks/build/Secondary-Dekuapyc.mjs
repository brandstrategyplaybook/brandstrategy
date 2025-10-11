import { s as _sfc_main$h } from './server.mjs';
import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
  __name: "Secondary",
  __ssrInlineRender: true,
  props: getSliceComponentProps(),
  setup(__props) {
    const root = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$h;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "root",
        ref: root,
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation,
        class: "comparison-secondary"
      }, _attrs))}><div class="max-w-7xl rounded-2xl mt-20 mb-10 p-6 md:p-12 bg-white dark:bg-transparent"><div class="flex flex-col items-center gap-4 text-center"><h3 class="font-poppins text-custom-black text-center dark:text-white text-xl md:text-3xl font-bold">${ssrInterpolate(_ctx.slice.primary.heading)}</h3></div><div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"><div><div class="flex items-center leading-loose gap-3">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-check",
        class: "size-5 text-[#15D115]"
      }, null, _parent));
      _push(`<h3 class="font-poppins text-sm md:text-lg font-semibold text-custom-black dark:text-white">${ssrInterpolate(_ctx.slice.primary.first_column_heading || "Before")}</h3></div><ul class="flex flex-col gap-3 text-sm text-[#5F5D73] dark:text-white/70 leading-loose mt-5 font-medium list-disc list-inside"><!--[-->`);
      ssrRenderList(_ctx.slice.primary.before, (item, i) => {
        _push(`<li class="list-item dark:footer-flow items-center gap-3 rounded-2xl border border-white/10 light-bg-card-steps py-2 px-6"><span>${ssrInterpolate(item.name_list)}</span></li>`);
      });
      _push(`<!--]--></ul></div><div><div class="flex items-center leading-loose gap-3">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-x",
        class: "size-5 text-[#FF1317]"
      }, null, _parent));
      _push(`<h3 class="font-poppins text-sm md:text-lg font-semibold text-custom-black dark:text-white">${ssrInterpolate(_ctx.slice.primary.second_column_heading || "Before")}</h3></div><ul class="flex flex-col gap-3 text-sm text-[#5F5D73] dark:text-white/70 leading-loose mt-5 font-medium list-disc list-inside"><!--[-->`);
      ssrRenderList(_ctx.slice.primary.after, (item, i) => {
        _push(`<li class="list-item dark:footer-flow items-center gap-3 rounded-2xl border border-white/10 light-bg-card-steps py-2 px-6"><span>${ssrInterpolate(item.name_list)}</span></li>`);
      });
      _push(`<!--]--></ul></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/Comparison/Secondary.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Secondary-Dekuapyc.mjs.map
