export default function counter ({ html, state }) {
  return html`
    <form action=/count method=post>
      <button>+1</button>
    </form>
    <pre>${JSON.stringify(state, null, 2)}</pre>
    <script type=module src=/_static/form-counter.mjs></script>
  `
}