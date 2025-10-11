import { defineComponent, mergeProps, withCtx, createBlock, openBlock, createVNode, createCommentVNode, toDisplayString, createTextVNode, computed, ref, watch, unref, Fragment, renderList, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import useEmblaCarousel from 'embla-carousel-vue';
import { useForwardProps, Primitive } from 'reka-ui';
import { reactivePick } from '@vueuse/core';
import { E as _sfc_main$q, B as _sfc_main$m, G as useLocale, g as useAppConfig, t as tv, y as _sfc_main$c, _ as _export_sfc } from './server.mjs';
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
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const theme = {
  "slots": {
    "root": "relative focus:outline-none",
    "viewport": "overflow-hidden",
    "container": "flex items-start",
    "item": "min-w-0 shrink-0 basis-full",
    "controls": "",
    "arrows": "",
    "prev": "absolute rounded-full",
    "next": "absolute rounded-full",
    "dots": "absolute inset-x-0 -bottom-7 flex flex-wrap items-center justify-center gap-3",
    "dot": [
      "cursor-pointer size-3 bg-accented rounded-full",
      "transition"
    ]
  },
  "variants": {
    "orientation": {
      "vertical": {
        "container": "flex-col -mt-4",
        "item": "pt-4",
        "prev": "top-4 sm:-top-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90",
        "next": "bottom-4 sm:-bottom-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90"
      },
      "horizontal": {
        "container": "flex-row -ms-4",
        "item": "ps-4",
        "prev": "start-4 sm:-start-12 top-1/2 -translate-y-1/2",
        "next": "end-4 sm:-end-12 top-1/2 -translate-y-1/2"
      }
    },
    "active": {
      "true": {
        "dot": "data-[state=active]:bg-inverted"
      }
    }
  }
};
const _sfc_main$2 = {
  __name: "UCarousel",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    prev: { type: Object, required: false },
    prevIcon: { type: [String, Object], required: false },
    next: { type: Object, required: false },
    nextIcon: { type: [String, Object], required: false },
    arrows: { type: Boolean, required: false, default: false },
    dots: { type: Boolean, required: false, default: false },
    orientation: { type: null, required: false, default: "horizontal" },
    items: { type: Array, required: false },
    autoplay: { type: [Boolean, Object], required: false, default: false },
    autoScroll: { type: [Boolean, Object], required: false, default: false },
    autoHeight: { type: [Boolean, Object], required: false, default: false },
    classNames: { type: [Boolean, Object], required: false, default: false },
    fade: { type: [Boolean, Object], required: false, default: false },
    wheelGestures: { type: [Boolean, Object], required: false, default: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    align: { type: [String, Function], required: false, default: "center" },
    containScroll: { type: [Boolean, String], required: false, default: "trimSnaps" },
    slidesToScroll: { type: [String, Number], required: false, default: 1 },
    dragFree: { type: Boolean, required: false, default: false },
    dragThreshold: { type: Number, required: false, default: 10 },
    inViewThreshold: { type: null, required: false, default: 0 },
    loop: { type: Boolean, required: false, default: false },
    skipSnaps: { type: Boolean, required: false, default: false },
    duration: { type: Number, required: false, default: 25 },
    startIndex: { type: Number, required: false, default: 0 },
    watchDrag: { type: [Boolean, Function], required: false, default: true },
    watchResize: { type: [Boolean, Function], required: false, default: true },
    watchSlides: { type: [Boolean, Function], required: false, default: true },
    watchFocus: { type: [Boolean, Function], required: false, default: true },
    active: { type: Boolean, required: false, default: true },
    breakpoints: { type: Object, required: false, default: () => ({}) }
  },
  emits: ["select"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const { dir, t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "active", "align", "breakpoints", "containScroll", "dragFree", "dragThreshold", "duration", "inViewThreshold", "loop", "skipSnaps", "slidesToScroll", "startIndex", "watchDrag", "watchResize", "watchSlides", "watchFocus"));
    const prevIcon = computed(() => props.prevIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowRight : appConfig.ui.icons.arrowLeft));
    const nextIcon = computed(() => props.nextIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowLeft : appConfig.ui.icons.arrowRight));
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.ui) == null ? void 0 : _a.carousel) || {} })({
        orientation: props.orientation
      });
    });
    const options = computed(() => ({
      ...props.fade ? { align: "center", containScroll: false } : {},
      ...rootProps.value,
      axis: props.orientation === "horizontal" ? "x" : "y",
      direction: dir.value === "rtl" ? "rtl" : "ltr"
    }));
    const plugins = ref([]);
    async function loadPlugins() {
      const emblaPlugins = [];
      if (props.autoplay) {
        const AutoplayPlugin = await import('embla-carousel-autoplay').then((r) => r.default);
        emblaPlugins.push(AutoplayPlugin(typeof props.autoplay === "boolean" ? {} : props.autoplay));
      }
      if (props.autoScroll) {
        const AutoScrollPlugin = await import('embla-carousel-auto-scroll').then((r) => r.default);
        emblaPlugins.push(AutoScrollPlugin(typeof props.autoScroll === "boolean" ? {} : props.autoScroll));
      }
      if (props.autoHeight) {
        const AutoHeightPlugin = await import('embla-carousel-auto-height').then((r) => r.default);
        emblaPlugins.push(AutoHeightPlugin(typeof props.autoHeight === "boolean" ? {} : props.autoHeight));
      }
      if (props.classNames) {
        const ClassNamesPlugin = await import('embla-carousel-class-names').then((r) => r.default);
        emblaPlugins.push(ClassNamesPlugin(typeof props.classNames === "boolean" ? {} : props.classNames));
      }
      if (props.fade) {
        const FadePlugin = await import('embla-carousel-fade').then((r) => r.default);
        emblaPlugins.push(FadePlugin(typeof props.fade === "boolean" ? {} : props.fade));
      }
      if (props.wheelGestures) {
        const { WheelGesturesPlugin } = await import('../_/embla-carousel-wheel-gestures.esm.mjs');
        emblaPlugins.push(WheelGesturesPlugin(typeof props.wheelGestures === "boolean" ? {} : props.wheelGestures));
      }
      plugins.value = emblaPlugins;
    }
    watch(() => [props.autoplay, props.autoScroll, props.autoHeight, props.classNames, props.fade, props.wheelGestures], loadPlugins, { immediate: true });
    const [emblaRef, emblaApi] = useEmblaCarousel(options.value, plugins.value);
    watch([options, plugins], () => {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.reInit(options.value, plugins.value);
    });
    function scrollPrev() {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollPrev();
    }
    function scrollNext() {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollNext();
    }
    function scrollTo(index) {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollTo(index);
    }
    function onKeyDown(event) {
      const prevKey = props.orientation === "vertical" ? "ArrowUp" : "ArrowLeft";
      const nextKey = props.orientation === "vertical" ? "ArrowDown" : "ArrowRight";
      if (event.key === prevKey) {
        event.preventDefault();
        scrollPrev();
        return;
      }
      if (event.key === nextKey) {
        event.preventDefault();
        scrollNext();
      }
    }
    const canScrollNext = ref(false);
    const canScrollPrev = ref(false);
    const selectedIndex = ref(0);
    const scrollSnaps = ref([]);
    function isCarouselItem(item) {
      return typeof item === "object" && item !== null;
    }
    __expose({
      emblaRef,
      emblaApi
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        role: "region",
        "aria-roledescription": "carousel",
        tabindex: "0",
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] }),
        onKeydown: onKeyDown
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.viewport({ class: (_a2 = props.ui) == null ? void 0 : _a2.viewport }))}"${_scopeId}><div class="${ssrRenderClass(ui.value.container({ class: (_b = props.ui) == null ? void 0 : _b.container }))}"${_scopeId}><!--[-->`);
            ssrRenderList(__props.items, (item, index) => {
              var _a3, _b2;
              _push2(`<div${ssrRenderAttrs(mergeProps({ key: index }, { ref_for: true }, __props.dots ? { role: "tabpanel" } : { "role": "group", "aria-roledescription": "slide" }, {
                class: ui.value.item({ class: [(_a3 = props.ui) == null ? void 0 : _a3.item, isCarouselItem(item) && ((_b2 = item.ui) == null ? void 0 : _b2.item), isCarouselItem(item) && item.class] })
              }))}${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {
                item,
                index
              }, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div>`);
            if (__props.arrows || __props.dots) {
              _push2(`<div class="${ssrRenderClass(ui.value.controls({ class: (_c = props.ui) == null ? void 0 : _c.controls }))}"${_scopeId}>`);
              if (__props.arrows) {
                _push2(`<div class="${ssrRenderClass(ui.value.arrows({ class: (_d = props.ui) == null ? void 0 : _d.arrows }))}"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$c, mergeProps({
                  disabled: !canScrollPrev.value,
                  icon: prevIcon.value,
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.prev")
                }, typeof __props.prev === "object" ? __props.prev : void 0, {
                  class: ui.value.prev({ class: (_e = props.ui) == null ? void 0 : _e.prev }),
                  onClick: scrollPrev
                }), null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$c, mergeProps({
                  disabled: !canScrollNext.value,
                  icon: nextIcon.value,
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.next")
                }, typeof __props.next === "object" ? __props.next : void 0, {
                  class: ui.value.next({ class: (_f = props.ui) == null ? void 0 : _f.next }),
                  onClick: scrollNext
                }), null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.dots) {
                _push2(`<div role="tablist"${ssrRenderAttr("aria-label", unref(t)("carousel.dots"))} class="${ssrRenderClass(ui.value.dots({ class: (_g = props.ui) == null ? void 0 : _g.dots }))}"${_scopeId}><!--[-->`);
                ssrRenderList(scrollSnaps.value, (_2, index) => {
                  var _a3;
                  _push2(`<button type="button" role="tab"${ssrRenderAttr("aria-label", unref(t)("carousel.goto", { slide: index + 1 }))}${ssrRenderAttr("aria-selected", selectedIndex.value === index)} class="${ssrRenderClass(ui.value.dot({ class: (_a3 = props.ui) == null ? void 0 : _a3.dot, active: selectedIndex.value === index }))}"${ssrRenderAttr("data-state", selectedIndex.value === index ? "active" : void 0)}${_scopeId}></button>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                ref_key: "emblaRef",
                ref: emblaRef,
                class: ui.value.viewport({ class: (_h = props.ui) == null ? void 0 : _h.viewport })
              }, [
                createVNode("div", {
                  class: ui.value.container({ class: (_i = props.ui) == null ? void 0 : _i.container })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
                    var _a3, _b2;
                    return openBlock(), createBlock("div", mergeProps({ key: index }, { ref_for: true }, __props.dots ? { role: "tabpanel" } : { "role": "group", "aria-roledescription": "slide" }, {
                      class: ui.value.item({ class: [(_a3 = props.ui) == null ? void 0 : _a3.item, isCarouselItem(item) && ((_b2 = item.ui) == null ? void 0 : _b2.item), isCarouselItem(item) && item.class] })
                    }), [
                      renderSlot(_ctx.$slots, "default", {
                        item,
                        index
                      })
                    ], 16);
                  }), 128))
                ], 2)
              ], 2),
              __props.arrows || __props.dots ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.controls({ class: (_j = props.ui) == null ? void 0 : _j.controls })
              }, [
                __props.arrows ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.arrows({ class: (_k = props.ui) == null ? void 0 : _k.arrows })
                }, [
                  createVNode(_sfc_main$c, mergeProps({
                    disabled: !canScrollPrev.value,
                    icon: prevIcon.value,
                    color: "neutral",
                    variant: "outline",
                    "aria-label": unref(t)("carousel.prev")
                  }, typeof __props.prev === "object" ? __props.prev : void 0, {
                    class: ui.value.prev({ class: (_l = props.ui) == null ? void 0 : _l.prev }),
                    onClick: scrollPrev
                  }), null, 16, ["disabled", "icon", "aria-label", "class"]),
                  createVNode(_sfc_main$c, mergeProps({
                    disabled: !canScrollNext.value,
                    icon: nextIcon.value,
                    color: "neutral",
                    variant: "outline",
                    "aria-label": unref(t)("carousel.next")
                  }, typeof __props.next === "object" ? __props.next : void 0, {
                    class: ui.value.next({ class: (_m = props.ui) == null ? void 0 : _m.next }),
                    onClick: scrollNext
                  }), null, 16, ["disabled", "icon", "aria-label", "class"])
                ], 2)) : createCommentVNode("", true),
                __props.dots ? (openBlock(), createBlock("div", {
                  key: 1,
                  role: "tablist",
                  "aria-label": unref(t)("carousel.dots"),
                  class: ui.value.dots({ class: (_n = props.ui) == null ? void 0 : _n.dots })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(scrollSnaps.value, (_2, index) => {
                    var _a3;
                    return openBlock(), createBlock("button", {
                      key: index,
                      type: "button",
                      role: "tab",
                      "aria-label": unref(t)("carousel.goto", { slide: index + 1 }),
                      "aria-selected": selectedIndex.value === index,
                      class: ui.value.dot({ class: (_a3 = props.ui) == null ? void 0 : _a3.dot, active: selectedIndex.value === index }),
                      "data-state": selectedIndex.value === index ? "active" : void 0,
                      onClick: ($event) => scrollTo(index)
                    }, null, 10, ["aria-label", "aria-selected", "data-state", "onClick"]);
                  }), 128))
                ], 10, ["aria-label"])) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g clip-path="url(#clip0_1_2388)"><path d="M9.79999 12.2401H4.11199V12.2321C4.11199 10.6681 4.88799 9.22006 6.18799 8.35206L9.75599 5.97206C10.224 5.66006 10.348 5.03206 10.036 4.56406C9.83999 4.27206 9.51999 4.11206 9.18799 4.11206C8.99599 4.11206 8.79999 4.16806 8.62399 4.28406L5.05599 6.66406C3.19599 7.90406 2.07999 9.98806 2.07999 12.2321V19.9601C2.07999 20.1841 2.25999 20.3681 2.48799 20.3681H9.79999C10.024 20.3681 10.208 20.1881 10.208 19.9601V12.6481C10.208 12.4201 10.028 12.2401 9.79999 12.2401ZM21.992 12.2401H16.304V12.2321C16.304 10.6681 17.08 9.22006 18.38 8.35206L21.948 5.97206C22.416 5.66006 22.54 5.03206 22.228 4.56406C22.032 4.27206 21.712 4.11206 21.38 4.11206C21.188 4.11206 20.992 4.16806 20.816 4.28406L17.248 6.66406C15.38 7.90806 14.268 9.98806 14.268 12.2321V19.9601C14.268 20.1841 14.448 20.3681 14.676 20.3681H21.992C22.216 20.3681 22.4 20.1881 22.4 19.9601V12.6481C22.4 12.4201 22.216 12.2401 21.992 12.2401Z" fill="#E4624F"></path></g><defs><clipPath id="clip0_1_2388"><rect width="20.48" height="20.48" fill="white" transform="translate(2 2)"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Quote.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "Quote" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: getSliceComponentProps(),
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UCarousel = _sfc_main$2;
      const _component_PrismicImage = _sfc_main$q;
      const _component_Quote = __nuxt_component_2;
      const _component_PrismicRichText = _sfc_main$m;
      _push(`<section${ssrRenderAttrs(mergeProps({
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation,
        class: "my-20"
      }, _attrs))}><h3 class="font-poppins text-custom-black text-center mb-8 dark:text-white text-xl md:text-3xl font-bold testimonials__title">${ssrInterpolate(_ctx.slice.primary.heading)}</h3>`);
      _push(ssrRenderComponent(_component_UCarousel, {
        items: ((_a = _ctx.slice.primary) == null ? void 0 : _a.testimonial) || [],
        arrows: "",
        dots: "",
        class: "testimonials__card",
        ui: { item: "w-full md:basis-1/2" }
      }, {
        default: withCtx(({ item, index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<article class="flex flex-col overflow-hidden rounded-2xl light-testimonial dark:dark-testimonial text-white md:flex-row md:flex-wrap gap-8"${_scopeId}><div class="flex flex-col md:flex-row w-full flex-1 md:basis-[48%] justify-between rounded-xl overflow-hidden shadow-lg"${_scopeId}><div class="relative w-full shrink-0 md:w-1/3"${_scopeId}><div class="h-full w-full bg-white/5"${_scopeId}>`);
            if (item.image) {
              _push2(ssrRenderComponent(_component_PrismicImage, {
                field: item.image,
                class: "max-h-[300px] md:h-full md:max-h-full w-full object-cover md:rounded-r-none"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="flex w-full flex-col justify-between"${_scopeId}><div class="relative p-6 sm:p-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Quote, null, null, _parent2, _scopeId));
            if (item.text) {
              _push2(ssrRenderComponent(_component_PrismicRichText, {
                field: item.text,
                wrapper: "p",
                class: "text-[#3C3D54] dark:text-[#A1A4B5] font-inter text-sm mt-3"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="p-6 sm:p-8"${_scopeId}>`);
            if (item.name) {
              _push2(`<p class="font-semibold text-custom-black dark:text-white"${_scopeId}>${ssrInterpolate(item.name)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (item.role || item.company) {
              _push2(`<p class="text-sm opacity-70 text-[#3C3D54] dark:text-[#A1A4B5]"${_scopeId}>${ssrInterpolate(item.role)}`);
              if (item.role && item.company) {
                _push2(`<span${_scopeId}>, </span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`${ssrInterpolate(item.company)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></article>`);
          } else {
            return [
              (openBlock(), createBlock("article", {
                key: index,
                class: "flex flex-col overflow-hidden rounded-2xl light-testimonial dark:dark-testimonial text-white md:flex-row md:flex-wrap gap-8"
              }, [
                createVNode("div", { class: "flex flex-col md:flex-row w-full flex-1 md:basis-[48%] justify-between rounded-xl overflow-hidden shadow-lg" }, [
                  createVNode("div", { class: "relative w-full shrink-0 md:w-1/3" }, [
                    createVNode("div", { class: "h-full w-full bg-white/5" }, [
                      item.image ? (openBlock(), createBlock(_component_PrismicImage, {
                        key: 0,
                        field: item.image,
                        class: "max-h-[300px] md:h-full md:max-h-full w-full object-cover md:rounded-r-none"
                      }, null, 8, ["field"])) : createCommentVNode("", true)
                    ])
                  ]),
                  createVNode("div", { class: "flex w-full flex-col justify-between" }, [
                    createVNode("div", { class: "relative p-6 sm:p-8" }, [
                      createVNode(_component_Quote),
                      item.text ? (openBlock(), createBlock(_component_PrismicRichText, {
                        key: 0,
                        field: item.text,
                        wrapper: "p",
                        class: "text-[#3C3D54] dark:text-[#A1A4B5] font-inter text-sm mt-3"
                      }, null, 8, ["field"])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "p-6 sm:p-8" }, [
                      item.name ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "font-semibold text-custom-black dark:text-white"
                      }, toDisplayString(item.name), 1)) : createCommentVNode("", true),
                      item.role || item.company ? (openBlock(), createBlock("p", {
                        key: 1,
                        class: "text-sm opacity-70 text-[#3C3D54] dark:text-[#A1A4B5]"
                      }, [
                        createTextVNode(toDisplayString(item.role), 1),
                        item.role && item.company ? (openBlock(), createBlock("span", { key: 0 }, ", ")) : createCommentVNode("", true),
                        createTextVNode(toDisplayString(item.company), 1)
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/Testimonials/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DjpYI2tW.mjs.map
