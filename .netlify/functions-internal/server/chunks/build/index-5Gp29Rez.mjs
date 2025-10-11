import { defineAsyncComponent, markRaw } from 'vue';

const defineSliceZoneComponents = (components2) => {
  const result = {};
  let type;
  for (type in components2) {
    const component = components2[type];
    result[type] = typeof component === "string" ? component : markRaw(component);
  }
  return result;
};
const components = defineSliceZoneComponents({
  comparison: defineAsyncComponent(() => import('./index-Bd4auICU.mjs')),
  faq: defineAsyncComponent(() => import('./index-CVftMJvs.mjs')),
  hero: defineAsyncComponent(() => import('./index-CZ5dFIWA.mjs')),
  long_paragraph: defineAsyncComponent(
    () => import('./index-B1t5Ddgo.mjs')
  ),
  pricing: defineAsyncComponent(() => import('./index-DoWKVxm8.mjs')),
  steps: defineAsyncComponent(() => import('./index-Hldv6zR-.mjs')),
  testimonials: defineAsyncComponent(() => import('./index-DjpYI2tW.mjs'))
});

export { components as c };
//# sourceMappingURL=index-5Gp29Rez.mjs.map
