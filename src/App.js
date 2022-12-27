import React from "react"
import './style.css'

const App = () => {

  const [formValue, setFormValue] = React.useState({
    email: "",
    password: "",
    confirmpassword: "",
    isJoined: false

  })


  const handleSubmit = (event) => {
    event.preventDefault()

    const successString = formValue.password === formValue.confirmpassword ? "Successfully signed up!" : "Password do not match!"
    const newsLetterString = formValue.isJoined ? "Thank you for subscribing!" : ""

    console.log(successString)

    if(formValue.password === formValue.confirmpassword && newsLetterString) {
      console.log(newsLetterString)
    }
  }

  const handleEmail = (event) => {
    setFormValue(prevFormValue => {
      return {
        ...prevFormValue,
        email: event.target.value
      }
    })
  }

  const handlePW = (event) => {
    const { name, value } = event.target
    setFormValue(prevFormValue => {

      if (name === 'pw') {
        return {
          ...prevFormValue,
          password: value
        }
      } else if (name === 'confirmpw') {
        return {
          ...prevFormValue,
          confirmpassword: value
        }
      }
    })

  }

  const handleNews = () => {
    setFormValue(prevFormValue => {
      return {
        ...prevFormValue,
        isJoined: !prevFormValue.isJoined
      }
    })
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          onChange={handleEmail}
          value={formValue.email}
        />
        <input
          name="pw"
          type="password"
          placeholder="Password"
          className="form--input"
          onChange={handlePW}
          value={formValue.password}
        />
        <input
          name="confirmpw"
          type="password"
          placeholder="Confirm password"
          className="form--input"
          onChange={handlePW}
          value={formValue.confirmpassword}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="joinNews"
            onChange={handleNews}


          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button
          className="form--submit"
        >
          Sign up
        </button>
      </form>
    </div>
  )
}

export default App 