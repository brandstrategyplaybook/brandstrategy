import { defineComponent, computed, unref, withCtx, createVNode, toDisplayString, useSlots, mergeProps, renderSlot, createBlock, createCommentVNode, openBlock, createTextVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderSlot, ssrRenderClass, ssrRenderAttrs } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { B as _sfc_main$m, _ as _export_sfc, g as useAppConfig, t as tv, s as _sfc_main$h, A as get } from './server.mjs';
import { useForwardPropsEmits, AccordionRoot, AccordionItem, AccordionHeader, AccordionTrigger, AccordionContent } from 'reka-ui';
import { reactivePick } from '@vueuse/core';
import { g as getSliceComponentProps } from './getSliceComponentProps-DZY85aVg.mjs';
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

const _imports_0 = publicAssetsURL("/images/money-back.png");
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex relative justify-center rounded-2xl light-money-back-bg py-16 px-4 my-30" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} alt="Money Back 14 Day" class="absolute left-1/2 top-[-60px] -translate-x-1/2 h-24 w-24 md:h-28 md:w-28"><div class="flex flex-col items-center text-center mt-6"><h3 class="text-custom-black dark:text-white font-poppins font-bold tracking-tight text-xl md:text-4xl"> 14-Day No-Questions Guarantee </h3><p class="mt-3 px-4 text-[#5F5D73] dark:text-white/60 font-inter text-xs leading-relaxed md:text-base"> I stand behind the Brand Strategy Playbook because I know it works. If you don\u2019t walk away with a complete, professional-grade playbook that brings clarity to your business, you have 14 days to request a full refund. No risk. No hidden terms. Just a clear guarantee: either your brand gets sharper, or you don\u2019t pay. </p></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Money.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]), { __name: "Money" });
const theme = {
  "slots": {
    "root": "w-full",
    "item": "border-b border-default last:border-b-0",
    "header": "flex",
    "trigger": "group flex-1 flex items-center gap-1.5 font-medium text-sm py-3.5 focus-visible:outline-primary min-w-0",
    "content": "data-[state=open]:animate-[accordion-down_200ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-out] overflow-hidden focus:outline-none",
    "body": "text-sm pb-3.5",
    "leadingIcon": "shrink-0 size-5",
    "trailingIcon": "shrink-0 size-5 ms-auto group-data-[state=open]:rotate-180 transition-transform duration-200",
    "label": "text-start break-words"
  },
  "variants": {
    "disabled": {
      "true": {
        "trigger": "cursor-not-allowed opacity-75"
      }
    }
  }
};
const _sfc_main$1 = {
  __name: "UAccordion",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    items: { type: Array, required: false },
    trailingIcon: { type: [String, Object], required: false },
    labelKey: { type: null, required: false, default: "label" },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    collapsible: { type: Boolean, required: false, default: true },
    defaultValue: { type: null, required: false },
    modelValue: { type: null, required: false },
    type: { type: String, required: false, default: "single" },
    disabled: { type: Boolean, required: false },
    unmountOnHide: { type: Boolean, required: false, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "collapsible", "defaultValue", "disabled", "modelValue", "unmountOnHide"), emits);
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.ui) == null ? void 0 : _a.accordion) || {} })({
        disabled: props.disabled
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(AccordionRoot), mergeProps(unref(rootProps), {
        type: __props.type,
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(props.items, (item, index) => {
              var _a2, _b;
              _push2(ssrRenderComponent(unref(AccordionItem), {
                key: index,
                value: item.value || String(index),
                disabled: item.disabled,
                class: ui.value.item({ class: [(_a2 = props.ui) == null ? void 0 : _a2.item, (_b = item.ui) == null ? void 0 : _b.item, item.class] })
              }, {
                default: withCtx(({ open }, _push3, _parent3, _scopeId2) => {
                  var _a3, _b2, _c, _d, _e, _f, _g, _h;
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(AccordionHeader), {
                      as: "div",
                      class: ui.value.header({ class: [(_a3 = props.ui) == null ? void 0 : _a3.header, (_b2 = item.ui) == null ? void 0 : _b2.header] })
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        var _a4, _b3, _c2, _d2;
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(AccordionTrigger), {
                            class: ui.value.trigger({ class: [(_a4 = props.ui) == null ? void 0 : _a4.trigger, (_b3 = item.ui) == null ? void 0 : _b3.trigger], disabled: item.disabled })
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              var _a5, _b4, _c3, _d3;
                              if (_push5) {
                                ssrRenderSlot(_ctx.$slots, "leading", {
                                  item,
                                  index,
                                  open
                                }, () => {
                                  var _a6, _b5;
                                  if (item.icon) {
                                    _push5(ssrRenderComponent(_sfc_main$h, {
                                      name: item.icon,
                                      class: ui.value.leadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item == null ? void 0 : item.ui) == null ? void 0 : _b5.leadingIcon] })
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                }, _push5, _parent5, _scopeId4);
                                if (unref(get)(item, props.labelKey) || !!slots.default) {
                                  _push5(`<span class="${ssrRenderClass(ui.value.label({ class: [(_a5 = props.ui) == null ? void 0 : _a5.label, (_b4 = item.ui) == null ? void 0 : _b4.label] }))}"${_scopeId4}>`);
                                  ssrRenderSlot(_ctx.$slots, "default", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    _push5(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                                  }, _push5, _parent5, _scopeId4);
                                  _push5(`</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                ssrRenderSlot(_ctx.$slots, "trailing", {
                                  item,
                                  index,
                                  open
                                }, () => {
                                  var _a6, _b5;
                                  _push5(ssrRenderComponent(_sfc_main$h, {
                                    name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                    class: ui.value.trailingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.trailingIcon, (_b5 = item.ui) == null ? void 0 : _b5.trailingIcon] })
                                  }, null, _parent5, _scopeId4));
                                }, _push5, _parent5, _scopeId4);
                              } else {
                                return [
                                  renderSlot(_ctx.$slots, "leading", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      item.icon ? (openBlock(), createBlock(_sfc_main$h, {
                                        key: 0,
                                        name: item.icon,
                                        class: ui.value.leadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item == null ? void 0 : item.ui) == null ? void 0 : _b5.leadingIcon] })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ui.value.label({ class: [(_c3 = props.ui) == null ? void 0 : _c3.label, (_d3 = item.ui) == null ? void 0 : _d3.label] })
                                  }, [
                                    renderSlot(_ctx.$slots, "default", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                    ])
                                  ], 2)) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "trailing", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      createVNode(_sfc_main$h, {
                                        name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                        class: ui.value.trailingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.trailingIcon, (_b5 = item.ui) == null ? void 0 : _b5.trailingIcon] })
                                      }, null, 8, ["name", "class"])
                                    ];
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(AccordionTrigger), {
                              class: ui.value.trigger({ class: [(_c2 = props.ui) == null ? void 0 : _c2.trigger, (_d2 = item.ui) == null ? void 0 : _d2.trigger], disabled: item.disabled })
                            }, {
                              default: withCtx(() => {
                                var _a5, _b4;
                                return [
                                  renderSlot(_ctx.$slots, "leading", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      item.icon ? (openBlock(), createBlock(_sfc_main$h, {
                                        key: 0,
                                        name: item.icon,
                                        class: ui.value.leadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item == null ? void 0 : item.ui) == null ? void 0 : _b5.leadingIcon] })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ui.value.label({ class: [(_a5 = props.ui) == null ? void 0 : _a5.label, (_b4 = item.ui) == null ? void 0 : _b4.label] })
                                  }, [
                                    renderSlot(_ctx.$slots, "default", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                    ])
                                  ], 2)) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "trailing", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      createVNode(_sfc_main$h, {
                                        name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                        class: ui.value.trailingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.trailingIcon, (_b5 = item.ui) == null ? void 0 : _b5.trailingIcon] })
                                      }, null, 8, ["name", "class"])
                                    ];
                                  })
                                ];
                              }),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    if (item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`]) {
                      _push3(ssrRenderComponent(unref(AccordionContent), {
                        class: ui.value.content({ class: [(_c = props.ui) == null ? void 0 : _c.content, (_d = item.ui) == null ? void 0 : _d.content] })
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            ssrRenderSlot(_ctx.$slots, item.slot || "content", {
                              item,
                              index,
                              open
                            }, () => {
                              var _a4, _b3;
                              _push4(`<div class="${ssrRenderClass(ui.value.body({ class: [(_a4 = props.ui) == null ? void 0 : _a4.body, (_b3 = item.ui) == null ? void 0 : _b3.body] }))}"${_scopeId3}>`);
                              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                item,
                                index,
                                open
                              }, () => {
                                _push4(`${ssrInterpolate(item.content)}`);
                              }, _push4, _parent4, _scopeId3);
                              _push4(`</div>`);
                            }, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              renderSlot(_ctx.$slots, item.slot || "content", {
                                item,
                                index,
                                open
                              }, () => {
                                var _a4, _b3;
                                return [
                                  createVNode("div", {
                                    class: ui.value.body({ class: [(_a4 = props.ui) == null ? void 0 : _a4.body, (_b3 = item.ui) == null ? void 0 : _b3.body] })
                                  }, [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(item.content), 1)
                                    ])
                                  ], 2)
                                ];
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode(unref(AccordionHeader), {
                        as: "div",
                        class: ui.value.header({ class: [(_e = props.ui) == null ? void 0 : _e.header, (_f = item.ui) == null ? void 0 : _f.header] })
                      }, {
                        default: withCtx(() => {
                          var _a4, _b3;
                          return [
                            createVNode(unref(AccordionTrigger), {
                              class: ui.value.trigger({ class: [(_a4 = props.ui) == null ? void 0 : _a4.trigger, (_b3 = item.ui) == null ? void 0 : _b3.trigger], disabled: item.disabled })
                            }, {
                              default: withCtx(() => {
                                var _a5, _b4;
                                return [
                                  renderSlot(_ctx.$slots, "leading", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      item.icon ? (openBlock(), createBlock(_sfc_main$h, {
                                        key: 0,
                                        name: item.icon,
                                        class: ui.value.leadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item == null ? void 0 : item.ui) == null ? void 0 : _b5.leadingIcon] })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ui.value.label({ class: [(_a5 = props.ui) == null ? void 0 : _a5.label, (_b4 = item.ui) == null ? void 0 : _b4.label] })
                                  }, [
                                    renderSlot(_ctx.$slots, "default", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                    ])
                                  ], 2)) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "trailing", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      createVNode(_sfc_main$h, {
                                        name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                        class: ui.value.trailingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.trailingIcon, (_b5 = item.ui) == null ? void 0 : _b5.trailingIcon] })
                                      }, null, 8, ["name", "class"])
                                    ];
                                  })
                                ];
                              }),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }),
                        _: 2
                      }, 1032, ["class"]),
                      item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`] ? (openBlock(), createBlock(unref(AccordionContent), {
                        key: 0,
                        class: ui.value.content({ class: [(_g = props.ui) == null ? void 0 : _g.content, (_h = item.ui) == null ? void 0 : _h.content] })
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, item.slot || "content", {
                            item,
                            index,
                            open
                          }, () => {
                            var _a4, _b3;
                            return [
                              createVNode("div", {
                                class: ui.value.body({ class: [(_a4 = props.ui) == null ? void 0 : _a4.body, (_b3 = item.ui) == null ? void 0 : _b3.body] })
                              }, [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                  item,
                                  index,
                                  open
                                }, () => [
                                  createTextVNode(toDisplayString(item.content), 1)
                                ])
                              ], 2)
                            ];
                          })
                        ]),
                        _: 2
                      }, 1032, ["class"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(props.items, (item, index) => {
                var _a2, _b;
                return openBlock(), createBlock(unref(AccordionItem), {
                  key: index,
                  value: item.value || String(index),
                  disabled: item.disabled,
                  class: ui.value.item({ class: [(_a2 = props.ui) == null ? void 0 : _a2.item, (_b = item.ui) == null ? void 0 : _b.item, item.class] })
                }, {
                  default: withCtx(({ open }) => {
                    var _a3, _b2, _c, _d;
                    return [
                      createVNode(unref(AccordionHeader), {
                        as: "div",
                        class: ui.value.header({ class: [(_a3 = props.ui) == null ? void 0 : _a3.header, (_b2 = item.ui) == null ? void 0 : _b2.header] })
                      }, {
                        default: withCtx(() => {
                          var _a4, _b3;
                          return [
                            createVNode(unref(AccordionTrigger), {
                              class: ui.value.trigger({ class: [(_a4 = props.ui) == null ? void 0 : _a4.trigger, (_b3 = item.ui) == null ? void 0 : _b3.trigger], disabled: item.disabled })
                            }, {
                              default: withCtx(() => {
                                var _a5, _b4;
                                return [
                                  renderSlot(_ctx.$slots, "leading", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      item.icon ? (openBlock(), createBlock(_sfc_main$h, {
                                        key: 0,
                                        name: item.icon,
                                        class: ui.value.leadingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item == null ? void 0 : item.ui) == null ? void 0 : _b5.leadingIcon] })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ui.value.label({ class: [(_a5 = props.ui) == null ? void 0 : _a5.label, (_b4 = item.ui) == null ? void 0 : _b4.label] })
                                  }, [
                                    renderSlot(_ctx.$slots, "default", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                    ])
                                  ], 2)) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "trailing", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a6, _b5;
                                    return [
                                      createVNode(_sfc_main$h, {
                                        name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                        class: ui.value.trailingIcon({ class: [(_a6 = props.ui) == null ? void 0 : _a6.trailingIcon, (_b5 = item.ui) == null ? void 0 : _b5.trailingIcon] })
                                      }, null, 8, ["name", "class"])
                                    ];
                                  })
                                ];
                              }),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }),
                        _: 2
                      }, 1032, ["class"]),
                      item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`] ? (openBlock(), createBlock(unref(AccordionContent), {
                        key: 0,
                        class: ui.value.content({ class: [(_c = props.ui) == null ? void 0 : _c.content, (_d = item.ui) == null ? void 0 : _d.content] })
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, item.slot || "content", {
                            item,
                            index,
                            open
                          }, () => {
                            var _a4, _b3;
                            return [
                              createVNode("div", {
                                class: ui.value.body({ class: [(_a4 = props.ui) == null ? void 0 : _a4.body, (_b3 = item.ui) == null ? void 0 : _b3.body] })
                              }, [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                  item,
                                  index,
                                  open
                                }, () => [
                                  createTextVNode(toDisplayString(item.content), 1)
                                ])
                              ], 2)
                            ];
                          })
                        ]),
                        _: 2
                      }, 1032, ["class"])) : createCommentVNode("", true)
                    ];
                  }),
                  _: 2
                }, 1032, ["value", "disabled", "class"]);
              }), 128))
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: getSliceComponentProps(),
  setup(__props) {
    const props = __props;
    const items = computed(() => {
      var _a;
      return (_a = props.slice.primary.accordion) != null ? _a : [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Money = __nuxt_component_0;
      const _component_UAccordion = _sfc_main$1;
      const _component_PrismicRichText = _sfc_main$m;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Money, null, null, _parent));
      _push(`<section${ssrRenderAttr("data-slice-type", props.slice.slice_type)}${ssrRenderAttr("data-slice-variation", props.slice.variation)} class="my-20"><h2 class="font-poppins text-custom-black mb-5 text-center dark:text-white text-xl md:text-3xl font-bold">${ssrInterpolate(_ctx.slice.primary.heading)}</h2>`);
      _push(ssrRenderComponent(_component_UAccordion, {
        items: unref(items),
        trailingIcon: "i-lucide-plus",
        class: "bg-gradient-to-r from-[#DCEDFE] to-[#EEE9FA] dark:bg-[#6d6d6d0d] dark:bg-none w-full m-auto rounded-2xl pt-8 pb-5 px-5",
        ui: {
          item: "bg-white/60 dark:bg-white/5 rounded-xl px-4 md:px-6 mb-4 ",
          trailingIcon: "text-primary"
        }
      }, {
        default: withCtx(({ item, index }, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="flex items-center gap-3 font-poppins"${_scopeId}><span class="text-base md:text-base py-2 text-primary"${_scopeId}>${ssrInterpolate(String(index + 1).padStart(2, "0"))}</span><h3 class="font-poppins text-base md:text-lg text-custom-black dark:text-white/60 font-medium"${_scopeId}>${ssrInterpolate((_a = item.title) != null ? _a : item.label)}</h3></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-3 font-poppins" }, [
                createVNode("span", { class: "text-base md:text-base py-2 text-primary" }, toDisplayString(String(index + 1).padStart(2, "0")), 1),
                createVNode("h3", { class: "font-poppins text-base md:text-lg text-custom-black dark:text-white/60 font-medium" }, toDisplayString((_b = item.title) != null ? _b : item.label), 1)
              ])
            ];
          }
        }),
        body: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4 mt-2 border-t border-t-[#ebe5e5] dark:border-t-[#535252]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PrismicRichText, {
              field: item.text,
              wrapper: "p",
              class: "text-[#2E3754] font-inter text-sm dark:text-white"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "py-4 mt-2 border-t border-t-[#ebe5e5] dark:border-t-[#535252]" }, [
                createVNode(_component_PrismicRichText, {
                  field: item.text,
                  wrapper: "p",
                  class: "text-[#2E3754] font-inter text-sm dark:text-white"
                }, null, 8, ["field"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/Faq/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CVftMJvs.mjs.map
