import { useDrag } from 'react-dnd';

import * as S from './styles';

export default function Card ({ data }) {

  const [{ isDragging }, dragRef] = useDrag({
    item: {type: 'CARD'},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  });

  return (
    <S.Wrapper ref={dragRef} isDragging={isDragging}>
      <S.Header>
        {data.labels.map(label => <S.Label key={label} color={label}/>)}
      </S.Header>
      <S.P>
        {data.content}
      </S.P>
      {data.user && <S.Image src='https://api.adorable.io/avatars/40/test.png' alt='' />}
    </S.Wrapper>
  )
}
