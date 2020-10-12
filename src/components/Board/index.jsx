import { loadLists } from '../../services/api';

import List from '../List';

import * as S from './styles';

const lists = loadLists()

const Board = () => (
  <S.Wrapper>
    {lists.map(list => <List key={list.title} data={list} />)}
  </S.Wrapper>
)

export default Board
