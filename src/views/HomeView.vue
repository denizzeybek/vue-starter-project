<template>
  <div class="mx-20 my-10">
    <h1 class="text-h4 text-weight-bold">PrimeVue + vee-validate v4</h1>
    <div class="q-mt-md q-gutter-md">
      <form @submit="onSubmit">
        <div class="field">
          <RInput v-model="fullName" label="Full Name" name="fullName" :errors="errors" />
        </div>
        <div class="field">
          <RInput v-model="email" label="Email" name="email" :errors="errors" />
        </div>

        <div class="field">
          <RInput
            v-model="password"
            label="Password"
            name="password"
            type="password"
            placeholder="enter password"
            :errors="errors"
          />
        </div>

        <div class="field">
          <RInput
            v-model="passwordConfirm"
            label="Password Confirm"
            name="passwordConfirm"
            type="password"
            :errors="errors"
          />
        </div>

        <div class="field">
          <RSelect
            v-model="type"
            label="Type"
            name="type"
            placeholder="Select a type"
            :errors="errors"
            :options="options"
          />
        </div>

        <RCheckbox
          v-model="termAgreements"
          label="I've read and accept the terms & conditions."
          name="termAgreements"
        />

        <div class="footer">
          <Button label="Submit" type="submit" />
          <Button @click="resetForm" label="Reset" type="button" class="p-button-secondary" />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  email: yup.string().required().email().label('Email address'),
  fullName: yup.string().required().label('Full name'),
  password: yup.string().required().min(6).label('Password'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required()
    .label('Password confirmation'),
  termAgreements: yup
    .boolean()
    .required()
    .isTrue('You must agree to termAgreements and conditions')
    .label('Terms agreement'),
  type: yup.string().required().label('Account type')
})

const { defineField, handleSubmit, resetForm, errors } = useForm({
  validationSchema: schema
})

const [fullName] = defineField('fullName')
const [email] = defineField('email')
const [password] = defineField('password')
const [passwordConfirm] = defineField('passwordConfirm')
const [termAgreements] = defineField('termAgreements')
const [type] = defineField('type')

const onSubmit = handleSubmit((values) => {
  console.log('Submitted with', values)
})

const options = ['Enterprise', 'Pro', 'Freelance'].map((o) => ({
  name: o,
  value: o.toLowerCase()
}))
</script>

<style>
body {
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica,
    Arial,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol;
}

.footer {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.p-error {
  display: block;
  color: #f44336;
}
</style>
