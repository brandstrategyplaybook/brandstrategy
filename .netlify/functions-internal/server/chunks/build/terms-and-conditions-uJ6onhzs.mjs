import { _ as _export_sfc, u as usePrismic, d as useAsyncData, z as useSeoMeta, f as _sfc_main$j } from './server.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "terms-and-conditions",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { client } = usePrismic();
    const { data: policy, pending, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "terms-and-conditions",
      () => client.getSingle("terms_and_conditions")
      // <-- replace with your exact API ID if different
    )), __temp = await __temp, __restore(), __temp);
    const title = computed(() => {
      var _a, _b;
      return ((_b = (_a = policy.value) == null ? void 0 : _a.data) == null ? void 0 : _b.meta_title) || "Terms and Conditions";
    });
    const description = computed(() => {
      var _a, _b;
      return ((_b = (_a = policy.value) == null ? void 0 : _a.data) == null ? void 0 : _b.meta_description) || "Terms and Conditions";
    });
    useSeoMeta({ title, description });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_SliceZone = _sfc_main$j;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "policy-page max-w-6xl m-auto" }, _attrs))} data-v-53d944a4>`);
      if (unref(error)) {
        _push(`<pre data-v-53d944a4>${ssrInterpolate(unref(error).message)}</pre>`);
      } else if (unref(pending)) {
        _push(`<div data-v-53d944a4>Loading\u2026</div>`);
      } else {
        _push(ssrRenderComponent(_component_SliceZone, {
          slices: (_f = (_e = (_b = (_a = unref(policy)) == null ? void 0 : _a.data) == null ? void 0 : _b.slices) != null ? _e : (_d = (_c = unref(policy)) == null ? void 0 : _c.data) == null ? void 0 : _d.body) != null ? _f : [],
          components: unref(components)
        }, null, _parent));
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/terms-and-conditions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const termsAndConditions = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-53d944a4"]]);

export { termsAndConditions as default };
//# sourceMappingURL=terms-and-conditions-uJ6onhzs.mjs.map
