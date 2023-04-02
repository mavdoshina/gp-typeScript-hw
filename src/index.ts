import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast, formatDate } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Wade Warren', '/img/avatar.png', 0)
  
  const dateInfo = new Date();

  const dateStart = `${dateInfo.getFullYear()}-${formatDate(dateInfo.getMonth() + 1)}-${formatDate(dateInfo.getDate() + 1)}`;
  const dateEnd = `${dateInfo.getFullYear()}-${formatDate(dateInfo.getMonth() + 1)}-${formatDate(dateInfo.getDate() + 3)}`;

  renderSearchFormBlock(dateStart, dateEnd)
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
