import { button } from '../../styles/layout'

export default {
  wrapper: {
    marginBottom: 30,
    marginTop: 20
  },
  row: {
    display: 'flex',
    marginBottom: 15,
    flexDirection: 'column',
    width: 300
  },
  label: {
    marginRight: 'auto',
    marginBottom: 5
  },
  button: {
    ...button.green
  }
}