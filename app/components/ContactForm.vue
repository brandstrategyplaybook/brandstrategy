<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  email: z.email('Invalid email'),
  name: z.string('Invalid name').min(4, 'Must be at least 4 characters'),
  message: z.string('Invalid message')
    .min(8, 'Must be at least 8 characters')
    .max(256, 'Must be at most 256 characters'),
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: undefined,
  name: undefined,
  message: undefined,
})

const FORMSPARK_ACTION_URL = "https://submit-form.com/K9ejGndrz"


const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Schema>) {
  await fetch(FORMSPARK_ACTION_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: event.data.name,
      email: event.data.email,
      message: event.data.message,
    }),
  })
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4 w-full" @submit="onSubmit">
    <div class="flex gap-6">
      <UFormField label="Name" name="name" class="font-poppins text-base w-1/2">
        <UInput v-model="state.name" type="text"  placeholder="Your Name" class="w-full"/>
      </UFormField>

      <UFormField label="Email" name="email" class="font-poppins text-base w-1/2">
        <UInput v-model="state.email"  placeholder="your@company.com" class="w-full"/>
      </UFormField>
    </div>

    <UFormField label="Message" name="message" class="font-poppins text-base w-full">
      <UTextarea v-model="state.message" :maxrows="8" autoresize type="text" class="w-full" placeholder="How can we help?"/>
    </UFormField>

    <div class="flex items-center">
      <UButton type="submit" class="font-poppins cursor-pointer buttonLink bg-brand-gradient dark:hover:opacity-85 text-white">
        Send Message
      </UButton>
      <p class="pl-2 text-sm font-poppins">Prefer email? Write us at 
          <a href="mailto:support@brandplaybookapp.com" class="text-custom-gradient hover:opacity-90">support@brandplaybookapp.com.</a> We will respond within 24 hours.</p>
    </div>
  </UForm>
</template>