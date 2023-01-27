import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage} from './styles';

export function ProfilePage() {
  return (
    <Container>
        <Banner>
            <Avatar/>
        </Banner>

        <ProfileData>
            {/* // <EditButton outlined>Editar Perfil</EditButton> */}
            <h1>Vinicius Costa</h1>
            <h2>@viniciuscosta9898</h2>
            <p>
                <a href="https://viniciuscosta1998.vercel.app">Full Stack Developer</a> Passionete for technology
            </p>

            <ul>
                <li>
                    <LocationIcon/>
                    Curitiba, Brazil
                </li>
                
                <li>
                    <CakeIcon/>
                    Nascido(a) em 02 de novembro de 1998
                </li>
            </ul>

            <Followage>
               <span>
                    Seguindo <strong>45</strong>
               </span>

               <span>
                    <strong>154 </strong> Seguidores
               </span>
            </Followage>
        </ProfileData>
    </Container>
  )
}
