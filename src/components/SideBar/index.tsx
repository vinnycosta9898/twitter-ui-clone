import { Container,
         SearchWrapper,
         SearchInput,
         SearchIcon,
         Body,    
        } from './styles';

export function SideBar() {
  return (
    <Container>
        <SearchWrapper>
            <SearchInput placeholder="Buscar no Twitter"/>
            <SearchIcon/>
        </SearchWrapper>

        <Body>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aperiam provident esse suscipit. Quo corrupti obcaecati, perferendis repellat laborum, doloremque sequi minima consequatur iusto earum suscipit velit explicabo. Expedita, iure?</p>  
        </Body>
    </Container>
  )
}
