import * as S from './styles';

const Card = ({ data }) => (
  <S.Wrapper>
    <S.Header>
      {data.labels.map(label => <S.Label key={label} color={label}/>)}
    </S.Header>
    <S.P>
      {data.content}
    </S.P>
    {data.user && <S.Image src='https://api.adorable.io/avatars/40/test.png' alt='' />}
  </S.Wrapper>
)

export default Card
