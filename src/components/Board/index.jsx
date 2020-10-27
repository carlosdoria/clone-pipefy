import { useState } from 'react'
import produce from 'immer'
import { loadLists } from '../../services/api';
import BoardContext from '../../context/context'

import List from '../List';

import * as S from './styles';

const data = loadLists()

const Board = () => {

  const [lists, setLists] = useState(data)

  function move (fromList, toList, from, to) {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from]

      draft[fromList].cards.splice(from, 1)
      draft[toList].cards.splice(to, 0, dragged)
    }))
  }

  return(
    <BoardContext.Provider value={{lists, move}}>
      <S.Wrapper>
        {lists.map((list, index) => <List key={list.title} index={index} data={list} />)}
      </S.Wrapper>
    </BoardContext.Provider>
  )
}

export default Board
