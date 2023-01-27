import { Container, Wrapper } from './styles';
import { Main } from '../Main'
export function Layout() {
  return (
    <Container>
        <Wrapper>
            {/* <MenuBar/> */}
            <Main/>
            {/* <SideBar/> */}
        </Wrapper>
    </Container>
  )
}
