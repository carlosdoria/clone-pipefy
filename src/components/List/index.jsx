import Card from '../Card'

import { MdAdd } from 'react-icons/md';

import * as S from './styles';

const List = ({ data, index: listIndex }) => (
  <S.Wrapper done={data.done}>
    <S.Header>
      <h2>{data.title}</h2>
      {data.creatable && (
        <button>
          <MdAdd size={24} color='#000' />
        </button>
      )}
    </S.Header>

    <ul>
      {data.cards.map((card, index) => (
        <Card
          key={card.id}
          listIndex={listIndex}
          index={index}
          data={card}
        />
      ))}
    </ul>
  </S.Wrapper>
)

export default List
