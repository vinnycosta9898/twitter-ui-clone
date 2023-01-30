import { Container,
         Retweeted,
         RocketseatIcon, 
         Body, 
         Avatar, 
         Content, 
         Header, 
         Dot,
         Description, 
         ImageContent, 
         Icons, 
         Status, 
         CommentIcon, 
         RetweetIcon, 
         LikeIcon 
        } from './styles'

export function Tweet() {
  return (
    <Container>
        <Retweeted>
            <RocketseatIcon/>
            Você Retwwetou
        </Retweeted>

        <Body>
            <Avatar/>
            <Content>
                <Header>
                    <strong>Vinicius Costa</strong>
                    <span>@viniciuscosta9898</span>
                    <Dot/>
                    <time>29 de Jan</time>
                </Header>

                <Description>
                    Hojé é dia de Codar!
                </Description>

                <ImageContent/>

                <Icons>
                    <Status>
                        <CommentIcon/>
                        12
                    </Status>

                    <Status>
                        <RetweetIcon/>
                        7
                    </Status>

                    <Status>
                        <LikeIcon/>
                        25
                    </Status>
                </Icons>

            </Content>
        </Body>
    </Container>
  )
}
