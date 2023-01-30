import { Container , 
         TopSide,
         Logo,
         MenuButton,
         HomeIcon,
         BellIcon, 
         EmailIcon,
         FavoriteIcon,
         ProfileIcon,
         BotSide,
         Avatar,
         ProfileData,
         ExitIcon
        } from './styles';

import { Button } from '../Button';

export function MenuBar(){
    return(
        <Container>
            <TopSide>
                <Logo/>
                <MenuButton>
                    <HomeIcon/>
                    <span>Página Inicial</span>
                </MenuButton>

                <MenuButton>
                    <BellIcon/>
                    <span>Notificações</span>
                </MenuButton>

                <MenuButton>
                    <EmailIcon/>
                    <span>Mensagens</span>
                </MenuButton>

                <MenuButton>
                    <FavoriteIcon/>
                    <span>Favoritados</span>
                </MenuButton>

                <MenuButton className="active">
                    <ProfileIcon/>
                    <span>Perfil</span>
                </MenuButton>

                <Button>
                    <span>Tweetar</span>
                </Button>
            </TopSide>

            <BotSide>
                <Avatar src="https://github.com/vinnycosta9898.png"/>
                <ProfileData>
                    <strong>Vinicius Costa</strong>
                    <span>@viniciuscosta9898</span>
                </ProfileData>
                <ExitIcon/>
            </BotSide>
        </Container>
    )
}