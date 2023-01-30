import { Container,
         SearchWrapper,
         SearchInput,
         SearchIcon,
         Body,    
        } from './styles';

import { List } from '../List'

export function SideBar() {
  return (
    <Container>
        <SearchWrapper>
            <SearchInput placeholder="Buscar no Twitter"/>
            <SearchIcon/>
        </SearchWrapper>

        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <h1>Test</h1>
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[
              <h1>Test</h1>
            ]}
          />
        </Body>
    </Container>
  )
}
