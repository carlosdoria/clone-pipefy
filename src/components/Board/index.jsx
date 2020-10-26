import { useState } from 'react'
import BoardContext from '../../context/context'
import { loadLists } from '../../services/api';

import List from '../List';

import * as S from './styles';

const data = loadLists()

const Board = () => {

  const [lists, setLists] = useState(data)

  function move (from, to) {
    console.log(from, to)
  }

  return(
    <BoardContext.Provider value={{lists, move}}>
      <S.Wrapper>
        {lists.map(list => <List key={list.title} data={list} />)}
      </S.Wrapper>
    </BoardContext.Provider>
  )
}

export default Board
