import { E as _sfc_main$q } from './server.mjs';
import { g as getSliceComponentProps } from './getSliceComponentProps-DZY85aVg.mjs';
import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "ListImageComp",
  __ssrInlineRender: true,
  props: getSliceComponentProps(),
  setup(__props) {
    const root = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PrismicImage = _sfc_main$q;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "root",
        ref: root,
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation,
        class: "comparison-secondary"
      }, _attrs))}><div class="max-w-7xl rounded-2xl mb-20 p-6 md:px-12 bg-white dark:bg-transparent"><div class="grid grid-cols-1 md:grid-cols-2 gap-6 hero__media"><div><ul class="flex flex-col gap-3 text-sm text-[#5F5D73] dark:text-white/70 leading-loose font-medium list-disc list-inside"><!--[-->`);
      ssrRenderList(_ctx.slice.primary.before, (item, i) => {
        _push(`<li class="list-item dark:footer-flow items-center gap-3 rounded-2xl border border-white/10 light-bg-card-steps py-2 px-6"><span>${ssrInterpolate(item.name_list)}</span></li>`);
      });
      _push(`<!--]--></ul></div><div class="w-full lg:w-3/4 rounded-2xl m-auto">`);
      _push(ssrRenderComponent(_component_PrismicImage, {
        field: _ctx.slice.primary.image,
        class: "rounded-2xlg"
      }, null, _parent));
      _push(`</div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/Comparison/ListImageComp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ListImageComp-BV53i3Zf.mjs.map
