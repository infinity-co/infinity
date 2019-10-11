// Packages
import { autoBind } from 'react-extras'
import React, { Component, FormEvent } from 'react'
import Router from 'next/router'

// Layouts
import Page from '../layouts/page'

// UI
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { colors, radius, spacing } from '../ui/theme'

// Utils
import { api } from '../utils/api'
import { saveCookie } from '../utils/cookies'

interface LoginState {
  email: string
}

class Login extends Component<any, LoginState> {
  constructor(props: any) {
    super(props)

    autoBind(this)

    this.state = { email: '' }
  }

  async onSubmit(e: FormEvent) {
    e.preventDefault()

    const { email } = this.state

    try {
      const { token } = await api.post('/auth', { email })
      saveCookie(process.env.COOKIE_NAME, token)
      Router.push('/dashboard')
    } catch (error) {
      console.error({ error })
    }
  }

  onChangeInput({ target }: any) {
    this.setState({ email: target.value })
  }

  render() {
    return (
      <Page>
        <section>
          <form onSubmit={this.onSubmit}>
            <h1>
              Welcome to the <span>infinity app</span>
            </h1>
            <h2>Manage your finances with ease.</h2>

            <Input
              id="email"
              label="Login with your email"
              name="email"
              onChange={this.onChangeInput}
              placeholder="Email address"
              type="email"
              style={{ marginBottom: spacing.large }}
            />

            <Button type="submit" block={true}>
              Sign in
            </Button>
          </form>

          <img src="/static/illustration.svg" alt="illustration" />
        </section>

        <style jsx={true} global={true}>{`
          body {
            background-color: #f2f2f2;
          }
        `}</style>

        <style jsx={true}>{`
          section {
            display: flex;
            align-items: center;
            height: 100vh;
          }

          form {
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
            background-color: ${colors.white};
            border-radius: ${radius.medium};
            padding: ${spacing.xxLarge} ${spacing.xLarge};
            box-shadow: 0 2px 30px rgba(0, 0, 0, 0.05);
            z-index: 1;
          }

          h1 {
            font-size: 40px;
            font-weight: 300;
            margin-bottom: ${spacing.medium};
          }

          span {
            font-weight: 400;
            color: ${colors.primary.default};
          }

          h2 {
            color: ${colors.gray.default};
            font-size: 18px;
            margin-bottom: ${spacing.xxxHuge};
          }

          img {
            position: fixed;
            bottom: -150px;
            left: -150px;
            max-width: 600px;
            width: 100%;
          }
        `}</style>
      </Page>
    )
  }
}

export default Login
