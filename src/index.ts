import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Wade Warren', '/img/avatar.png', 0)
  
  const dateInfo = new Date();
  console.log(dateInfo.getFullYear())
  console.log(dateInfo.getMonth())
  // ('0' + dateInfo.getMonth()).slice(-2)
  console.log(dateInfo.getDay())
  const month = ('0' + dateInfo.getMonth()).slice(-2);
  const day = ('0' + dateInfo.getMonth()).slice(-2);
  const dateStart = `${dateInfo.getFullYear()}-${month}-${day}`
  console.log(dateStart)
  renderSearchFormBlock(dateStart, '2021-06-30')
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
