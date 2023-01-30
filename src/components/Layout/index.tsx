import { Container, Wrapper } from './styles';
import { Main } from '../Main'
import { MenuBar } from '../MenuBar';
export function Layout() {
  return (
    <Container>
        <Wrapper>
            <MenuBar/>
            <Main/>
            {/* <SideBar/> */}
        </Wrapper>
    </Container>
  )
}
