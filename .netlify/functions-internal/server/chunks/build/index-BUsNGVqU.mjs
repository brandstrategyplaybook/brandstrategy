import { u as usePrismic, d as useAsyncData, b as useHead, f as _sfc_main$j } from './server.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { c as components } from './index-5Gp29Rez.mjs';
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
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const prismic = usePrismic();
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "index",
      () => prismic.client.getByUID("page", "home")
    )), __temp = await __temp, __restore(), __temp);
    useHead({
      title: prismic.asText((_a = page.value) == null ? void 0 : _a.data.title)
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b;
      const _component_SliceZone = _sfc_main$j;
      _push(ssrRenderComponent(_component_SliceZone, mergeProps({
        wrapper: "main",
        slices: (_b = (_a2 = unref(page)) == null ? void 0 : _a2.data.slices) != null ? _b : [],
        components: unref(components)
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BUsNGVqU.mjs.map
