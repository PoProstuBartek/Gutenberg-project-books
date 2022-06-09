import React from 'react'

const LanguageSelection = ({ setLanguage, setBooksUrl, language, setLoading }) => {

  const handleLanguage = e => {
    setLanguage(e.target.value)
  }

  const handleLanguageSelection = () => {
    setLoading(true);
    setBooksUrl(`https://gnikdroy.pythonanywhere.com/api/book/?languages=${language}`);
  } 

  return (
    <div>
      <label>Select language 
        <select onChange={handleLanguage}>
          <option value=''>All</option>
          <option value='en'>English</option>
          <option value='pl'>Polish</option>
          <option value='fr'>French</option>
        </select>
        <button onClick={handleLanguageSelection}>Set</button>
      </label>
    </div>
  )
}

export default LanguageSelection