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
  console.log(dateInfo.getDate())

  let monthTmp = dateInfo.getMonth() + 1;
  const month = monthTmp < 10 ? ('0' + monthTmp) : monthTmp;

  let dayTmp = dateInfo.getDate() + 1;
  const day = dayTmp < 10 ? ('0' + dayTmp) : dayTmp;

  dayTmp = dateInfo.getDate() + 3;
  const dayEnd = dayTmp < 10 ? ('0' + dayTmp) : dayTmp;

  const dateStart = `${dateInfo.getFullYear()}-${month}-${day}`;
  const dateEnd = `${dateInfo.getFullYear()}-${month}-${dayEnd}`;

  renderSearchFormBlock(dateStart, dateEnd)
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
