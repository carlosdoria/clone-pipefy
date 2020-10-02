import Card from '../Card'

import { MdAdd } from 'react-icons/md';

import * as S from './styles';

const List = () => (
  <S.Wrapper>
    <S.Header>
      <h2>Tarefas</h2>
      <button>
        <MdAdd size={24} color='#000' />
      </button>
    </S.Header>

    <ul>
      <Card />
      <Card />
    </ul>
  </S.Wrapper>
)

export default List
