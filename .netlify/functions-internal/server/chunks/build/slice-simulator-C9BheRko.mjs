import { f as _sfc_main$j } from './server.mjs';
import { defineComponent, unref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { SliceSimulator } from '@slicemachine/adapter-nuxt/simulator';
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
  __name: "slice-simulator",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SliceZone = _sfc_main$j;
      _push(ssrRenderComponent(unref(SliceSimulator), mergeProps({ background: "#030712" }, _attrs), {
        default: withCtx(({ slices }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SliceZone, {
              slices,
              components: unref(components)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SliceZone, {
                slices,
                components: unref(components)
              }, null, 8, ["slices", "components"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/slice-simulator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=slice-simulator-C9BheRko.mjs.map
