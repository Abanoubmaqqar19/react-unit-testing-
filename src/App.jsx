import Counter from './components/Counter.jsx'
import RegistrationForm from './components/RegistrationForm.jsx'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <section className="app-header">
        <p className="eyebrow">react lab</p>
        <h1>Counter and Registration Form</h1>
      </section>

      <section className="layout-grid">
        <article className="panel">
          <h2>Counter Buttons</h2>
          <Counter />
        </article>

        <article className="panel">
          <h2>Registration Form</h2>
          <RegistrationForm />
        </article>
      </section>
    </main>
  )
}

export default App
