export const appLayout = {
  wrapper: {
    width: 960,
    margin: 'auto',
    paddingTop: 20,
    paddingBottom: 20
  },
  content: {
    flexGrow: 1
  }
}

const buttonDefault = {
  textDecoration: 'none',
  padding: 5,
  border: 'none',
  background: '#000',
  cursor: 'pointer',
  color: '#fff',
  display: 'inline-block',
  fontSize: 13
}

export const button = {
  default: {
    ...buttonDefault
  },
  green: {
    ...buttonDefault,
    background: '#00C853'
  },
  red: {
    ...buttonDefault,
    background: '#F4511E'
  },
  blue: {
    ...buttonDefault,
    background: '#42A5F5'
  }
}