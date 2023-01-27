import { Container, Header, BackIcon, ProfileInfo} from './styles'
export function Main() {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon/>
        </button>

        <ProfileInfo>
          <strong>Vinicius Costa</strong>
          <span>158 Tweetes</span>
        </ProfileInfo>
      </Header>

      {/* <ProfilePage/> */}

      {/* <BottomMenu>
        <HomeIcon/>
        <SearchIcon/>
        <BellIcon/>
        <EmailIcon/>
      </BottomMenu> */}
    </Container>
  )
}
