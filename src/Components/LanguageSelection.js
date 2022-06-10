import { Button, InputLabel, MenuItem, Select } from '@mui/material'
import { Container } from '@mui/system'
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
    <Container>
      <InputLabel>Select language</InputLabel>
      <Select onChange={handleLanguage} value={language}>
        <MenuItem value=''>All</MenuItem>
        <MenuItem value='en'>English</MenuItem>
        <MenuItem value='pl'>Polish</MenuItem>
        <MenuItem value='fr'>French</MenuItem>
      </Select>
      <Button style={{margin: 10}} variant='outlined' onClick={handleLanguageSelection}>Set</Button>
    </Container>
  )
}

export default LanguageSelection

/*Select language 
        <select onChange={handleLanguage}>
          <option value=''>All</option>
          <option value='en'>English</option>
          <option value='pl'>Polish</option>
          <option value='fr'>French</option>
        </select>
        <button onClick={handleLanguageSelection}>Set</button>
      </label> */