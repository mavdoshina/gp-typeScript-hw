import { renderBlock } from './lib.js'

export function renderUserBlock (userName: string, userAvatr: string, favoriteItemsAmount: number) {
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount ? true : false
  console.log(favoritesCaption)

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${userAvatr}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
      
}
