import { button } from '../../styles/layout'

export const list = {
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  column: {
    border: '1px solid #000',
    textAlign: 'center',
    padding: 5
  },
  title: {
    marginBottom: 20
  },
  buttonEdit: {
    ...button.green,
    marginRight: 10
  },
  buttonDelete: {
    ...button.red
  },
  buttonAdd: {
    ...button.blue,
    marginBottom: 10
  }
}