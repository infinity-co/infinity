// Packages
import React from 'react'
import { useForm } from '@statickit/react'

// UI
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { spacing } from '../../ui/theme'

export const OptInForm = () => {
  const [state, submit] = useForm({
    id: process.env.STATICKIT_ID
  })

  if (state.succeeded) {
    return <div>Thank you for signing up!</div>
  }

  return (
    <form onSubmit={submit}>
      <Input
        id="email"
        label="Email"
        placeholder="Email address"
        type="email"
        name="email"
        required={true}
        style={{ marginRight: spacing.default }}
      />

      <Button type="submit">Join beta</Button>

      <style jsx={true}>{`
        form {
          display: flex;
          align-items: flex-end;
        }
      `}</style>
    </form>
  )
}
