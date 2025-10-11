import { _ as _export_sfc, B as _sfc_main$m } from './server.mjs';
import { g as getSliceComponentProps } from './getSliceComponentProps-DZY85aVg.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
      const _component_PrismicRichText = _sfc_main$m;
      _push(`<section${ssrRenderAttrs(mergeProps({
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation
      }, _attrs))} data-v-b3bbe5ef>`);
      if (_ctx.slice.primary.title) {
        _push(`<h2 data-v-b3bbe5ef>${ssrInterpolate(_ctx.slice.primary.title)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="rt-slice" data-v-b3bbe5ef>`);
      _push(ssrRenderComponent(_component_PrismicRichText, {
        field: _ctx.slice.primary.text
      }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/LongParagraph/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b3bbe5ef"]]);

export { index as default };
//# sourceMappingURL=index-B1t5Ddgo.mjs.map
