import { defineComponent, defineAsyncComponent, computed, createVNode, resolveDynamicComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderVNode } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    slice: {}
  },
  setup(__props) {
    const SimpleTextComp = defineAsyncComponent(() => import('./SimpleText-CRzwd5_e.mjs'));
    const SecondaryComp = defineAsyncComponent(() => import('./Secondary-Dekuapyc.mjs'));
    const ListImageComp = defineAsyncComponent(() => import('./ListImageComp-BV53i3Zf.mjs'));
    const DefaultComp = defineAsyncComponent(() => import('./Default-QscC68lU.mjs'));
    const props = __props;
    const Comp = computed(() => {
      switch (props.slice.variation) {
        case "simpleText":
          return SimpleTextComp;
        case "secondary":
          return SecondaryComp;
        case "listAndImage":
          return ListImageComp;
        default:
          return DefaultComp;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(Comp.value), mergeProps(props, _attrs), null), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/Comparison/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Bd4auICU.mjs.map
