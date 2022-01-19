import { LuiCheckboxInput } from '@linzjs/lui'
import '@linzjs/lui/dist/scss/base.scss';
import { useState } from 'react'
import './App.css'

function App() {
  const [checkboxValue, updateCheckboxValue] = useState(false)
  
  return (
    <>
    <table>
      <tr>
        <td>
          <LuiCheckboxInput
            value={''}
            label={''}
            onChange={
              () => {
                updateCheckboxValue(!checkboxValue);
              }
            }
            isChecked={checkboxValue} />
        </td>
        <td>
          <span>Checkbox Test</span>
        </td>
      </tr>
    </table>

    {!checkboxValue && <p>Playwright and LuiCheckboxInput are sad</p>}
    {checkboxValue && <p>Playwright and LuiCheckboxInput live in harmony</p>}
    </>
    )
}

export default App
