import { Container,
         SearchWrapper,
         SearchInput,
         SearchIcon,
         Body,    
        } from './styles';
import StickyBox from 'react-sticky-box';

import { List } from '../List'
import { FollowSuggestion } from '../FollowSuggestion'
import { News } from '../News';

export function SideBar() {
  return (
    <Container>
        <SearchWrapper>
            <SearchInput placeholder="Buscar no Twitter"/>
            <SearchIcon/>
        </SearchWrapper>

        <StickyBox>
          <Body>
            <List
              title="Talvez você curta"
              elements={[
                <FollowSuggestion
                  name="Luiz Batanero"
                  nickname="@luizbatanero"
                />,

                <FollowSuggestion
                  name="Luke Morales"
                  nickname="@lukemorales"
                />,

                <FollowSuggestion
                  name="Camila Magalhães"
                  nickname="@camilaamgl"
              />,

              ]}
            />

            <List
              title="Talvez você curta"
              elements={[
                <News/>, <News/>, <News/>
              ]}
            />

          <List
              title="Talvez você curta"
              elements={[
                <News/>, <News/>, <News/>
              ]}
            />

          </Body>
        </StickyBox>
    </Container>
  )
}
