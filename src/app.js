const express = require('express')
const app = express()

const magazines = [
  {
    id: 1,
    title: 'Vanity Fair',
    year: 2023,
    country: 'Spain',
    coverUrl: ''
  },
  {
    id: 2,
    title: 'Viva Rock',
    year: 1987,
    country: 'Japan',
    coverUrl: ''
  },
  {
    id: 3,
    title: 'Sanat',
    year: 2026,
    country: 'Turkey',
    coverUrl: ''
  },
  {
    id: 4,
    title: 'POP',
    year: 1985,
    country: 'Norway',
    coverUrl: ''
  }
]

app.get('/magazines', (req, res) => {
  res.json(magazines)
})

module.exports = app