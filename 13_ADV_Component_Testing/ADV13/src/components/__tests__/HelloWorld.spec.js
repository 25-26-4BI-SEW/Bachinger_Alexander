import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  // Test 1: Component renders without errors
  it('renders without errors', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Hello Vitest' },
    })
    expect(wrapper.exists()).toBe(true)
  })

  // Test 2: Displays the passed msg prop in the h1
  it('displays the correct msg prop in the h1', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Welcome to my App' },
    })
    expect(wrapper.find('h1').text()).toBe('Welcome to my App')
  })

  // Test 3: h1 has the CSS class "green"
  it('h1 has the class "green"', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Test' },
    })
    expect(wrapper.find('h1').classes()).toContain('green')
  })

  // Test 4: Contains a link to Vite with correct href and target
  it('contains a link to Vite that opens in a new tab', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Test' },
    })
    const links = wrapper.findAll('a')
    const viteLink = links.find((a) => a.text() === 'Vite')
    expect(viteLink).toBeDefined()
    expect(viteLink.attributes('href')).toBe('https://vite.dev/')
    expect(viteLink.attributes('target')).toBe('_blank')
  })

  // Test 5: Contains a link to Vue 3 with correct href and rel attribute
  it('contains a link to Vue 3 with rel="noopener"', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Test' },
    })
    const links = wrapper.findAll('a')
    const vueLink = links.find((a) => a.text() === 'Vue 3')
    expect(vueLink).toBeDefined()
    expect(vueLink.attributes('href')).toBe('https://vuejs.org/')
    expect(vueLink.attributes('rel')).toBe('noopener')
  })

  // Test 6: h3 contains the expected static description text
  it('h3 contains the expected project creation text', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Test' },
    })
    expect(wrapper.find('h3').text()).toContain(
      "You've successfully created a project with"
    )
  })

  // Test 7: The root element has the class "greetings"
  it('root div has the class "greetings"', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Test' },
    })
    expect(wrapper.find('div.greetings').exists()).toBe(true)
  })
})