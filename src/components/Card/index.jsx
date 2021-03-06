import { useRef, useContext } from 'react'
import { useDrag, useDrop } from 'react-dnd';
import produce from 'immer'

import BoardContext from '../../context/context'

import * as S from './styles';

export default function Card ({ data, index, listIndex }) {

  const ref = useRef()
  const { move } = useContext(BoardContext)

  const [{ isDragging }, dragRef] = useDrag({
    item: {type: 'CARD', index, listIndex},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex
      const targetListIndex = listIndex

      const draggedIndex = item.index
      const targetIndex = index

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) return

      // traz informações sobre a posição e tamanho do item
      const targetSize = ref.current.getBoundingClientRect()
      const targetCenter = (targetSize.bottom - targetSize.top) / 2

      // traz informações sobre a distancia dos eixos X e Y
      const draggedOffset = monitor.getClientOffset()
      const draggedTop = draggedOffset.y - targetSize.top

      if (draggedIndex < targetIndex && draggedTop < targetCenter) return

      if (draggedIndex > targetIndex && draggedTop > targetCenter) return

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex)

      item.index = targetIndex
      item.listIndex = targetListIndex

    }
  })

  dragRef(dropRef(ref))

  return (
    <S.Wrapper ref={ref} isDragging={isDragging}>
      <S.Header>
        {data.labels.map(label => <S.Label key={label} color={label}/>)}
      </S.Header>
      <S.P>
        {data.content}
      </S.P>
      {data.user && <S.Image src={data.user} alt='' />}
    </S.Wrapper>
  )
}
