import React from 'react'
import styled from 'styled-components'


const StyledForm = styled.div`
    width: 65%;

#contact_form_wrapper {
    position: relative;
    width: 100%;
    margin: 0 auto;
    border: 15px;
    top: 75px;
  }

  form {
    padding: 37.5px;
    margin: 100px 0px 0px 0px;
    font-family:  proxima-nova, sans-serif;
  }

  #contact_form_wrapper h1 {
    color: #EFECEA;
    font-size: 38px;
    font-weight: 300;
    font-family:  proxima-nova, sans-serif;
    letter-spacing: 7px;
    text-align: center;
    text-transform: uppercase;
  }



  .icon_wrapper {
    margin: 50px auto 0;
    width: 100%;
  }

  .icon {
    display: block;
    fill: #474544;
    height: 50px;
    margin: 0 auto;
    width: 50px;
  }

  .email {
    float: right;
    width: 45%;
  }

  input[type="text"],
  [type="email"],
  select,
  textarea {
    background: none;
    border: none;
    border-bottom: solid 2px #EFECEA;
    color: #EFECEA;
    font-size: 1em;
    font-weight: 100;
    font-family: quasimoda, sans-serif;
    letter-spacing: 1px;
    margin: 0em 0 0.75em 0;
    padding: 0 0 0.875em 0;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  input[type="text"]:focus,
  [type="email"]:focus,
  textarea:focus {
    outline: none;
    padding: 0 0 0.875em 0;
  }

  .message {
    float: none;
  }

  .name {
    float: left;
    width: 45%;
  }

  select {
    background: url("https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-down-32.png")
      no-repeat right;
    outline: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    font-family: quasimoda, sans-serif;
    font-weight: 100;
    cursor: pointer;
  }

  select::-ms-expand {
    display: none;
  }

  option {
    font-weight: 900;
    color: #474544;
  }

  .subject {
    width: 100%;
  }

  .telephone {
    width: 100%;
  }

  textarea {
    line-height: 150%;
    font-size: 1rem;
    height: 80px;
    resize: none;
    width: 100%;
    color: #EFECEA;
  }

  input::-webkit-input-placeholder {
    color: #EFECEA;
  }

  textarea::-webkit-input-placeholder {
    color: #EFECEA;
  }

  ::-webkit-input-placeholder {
    color: #EFECEA;
  }

  :-moz-placeholder {
    color: #EFECEA;
    opacity: 1;
  }

  ::-moz-placeholder {
    color: #EFECEA;
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: #EFECEA;
  }

  #form_btn {
    position: relative;
    top: 15px;
    background: none;
    border: solid 2px #EFECEA;
    color: #474544;
    display: block;
    font-family: quasimoda, sans-serif;
    font-size: 1em;
    border-radius: 5px;
    padding: 12px 30px;
    cursor: pointer;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    margin: 0 auto;
    
  }

  #form_btn::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 6px;
    left: 6px;
    width: 100%;
    height: 100%;
    background-color: #8FB3A3;
    transition: 0.2s;
    border-radius: 5px;
  }

  #form_btn:hover::after {
    top: 0px;
    left: 0px;
  }


  @media (max-width: 768px) {

    width: 85%;

    #contact_form_wrapper {
    position: relative;
    width: 100%;
    margin: 0 auto;
    border: 15px;
    top: 0px;
  }


    #form_btn {
        padding: 6px 15px;
    }

    input[type="text"],
  [type="email"],
  select,
  textarea {
    font-size: .75rem;
  }

}

@media (max-width: 480px) {

width: 105%;

#contact_form_wrapper {
position: relative;
width: 100%;
margin: 0 auto;
border: 15px;
top: 25px;
}


#form_btn {
    padding: 6px 15px;
}

input[type="text"],
[type="email"],
select,
textarea {
font-size: .75rem;
}

}


`

export default function Form() {
  return (
    <StyledForm>
    <div id="contact_form_wrapper">
        <div className="underline"></div>
        <form
          action="https://formsubmit.co/dalinodrama@gmail.com"
          method="POST"
          id="contact_form"
        >
          <div className="name">
            <label htmlFor="name"></label>
            <input
              type="hidden"
              name="_next"
              value="https://sabrdev.netlify.app/subsuccess.html"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="name_input"
              required=""
            />
          </div>
          <div className="email">
            <label htmlFor="email"></label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="email_input"
              required=""
            />
          </div>
          <div className="telephone">
            <label htmlFor="name"></label>
            <input
              type="text"
              placeholder="Phone Number"
              name="telephone"
              id="telephone_input"
              required=""
            />
          </div>
          <div className="subject">
            <label htmlFor="subject"></label>
            <select
              placeholder="Request"
              name="subject"
              id="subject_input"
              required=""
            >
              <option disabled="" hidden="">
              Request
              </option>
              <option>I'd like to start a project</option>
              <option>I'd like to ask a question</option>
              <option>I'd like to make a proposal</option>
            </select>
          </div>
          <div className="message">
            <label htmlFor="message"></label>
            <textarea
              name="message"
              placeholder="I'd like to chat about"
              id="message_input"
              cols="30"
              rows="5"
              required=""
            ></textarea>
          </div>
          <div className="submit">
            <a>
              <button type="submit" value="Send Message" id="form_btn">Send Message</ button>
            </a>
          </div>
        </form>
      </div>
    </StyledForm>
  )
}
