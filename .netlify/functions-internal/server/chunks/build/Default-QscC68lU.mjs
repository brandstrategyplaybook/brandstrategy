import { C as _sfc_main$p, s as _sfc_main$h } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
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
  __name: "Default",
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
        class: "comparison"
      }, _attrs))}><div class="rounded-2xl mt-20 mb-10 p-4 md:py-12 md:px-12 bg-white border border-[#F1F0F3] dark:border-0 dark:bg-[#1828591f] dark:footer-flow comparison__title"><div class="flex flex-col items-center gap-4 text-center"><h3 class="font-poppins text-custom-black text-center dark:text-white text-xl md:text-3xl font-bold">${ssrInterpolate(_ctx.slice.primary.heading)}</h3>`);
      if (_ctx.slice.primary.cta) {
        _push(ssrRenderComponent(unref(_sfc_main$p), {
          field: _ctx.slice.primary.cta,
          class: "text-custom-gradient font-medium border font-poppins border-[#F68E15] rounded-[8px] px-4 py-3 inline-block transition duration-300 hover:scale-110"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.slice.primary.cta_label || "Learn more")}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.slice.primary.cta_label || "Learn more"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-10 flex flex-col gap-6 md:flex-row"><div class="comparison__card flex-1 light-bg-card-comparison dark:bg-card-comparison rounded-2xl border border-white/10 p-6"><h3 class="mb-4 font-poppins text-sm md:text-xl font-bold text-custom-black dark:text-white">${ssrInterpolate(_ctx.slice.primary.before_title || "Before: Brand Chaos")}</h3><ul class="flex flex-col gap-3 text-sm text-[#5F5D73] dark:text-white/70 leading-loose"><!--[-->`);
      ssrRenderList(_ctx.slice.primary.before, (item, i) => {
        _push(`<li class="flex items-center gap-3">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-x",
          class: "size-5 text-red-500"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(item.name_list)}</span></li>`);
      });
      _push(`<!--]--></ul></div><div class="comparison__card flex-1 rounded-2xl border border-white/10 variation-bg-card-comparison p-6 dark:bg-card-comparison"><h3 class="mb-4 font-poppins text-sm md:text-xl font-bold text-custom-black dark:text-white">${ssrInterpolate(_ctx.slice.primary.after_title || "After: Brand Clarity")}</h3><ul class="flex flex-col gap-3 text-sm text-[#5F5D73] dark:text-white/70 leading-loose"><!--[-->`);
      ssrRenderList(_ctx.slice.primary.after, (item, i) => {
        _push(`<li class="flex items-center gap-3">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-check",
          class: "size-5"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(item.name_list)}</span></li>`);
      });
      _push(`<!--]--></ul></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/Comparison/Default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Default-QscC68lU.mjs.map
