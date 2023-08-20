import { Container, Icons, Logo, Notification, User } from "./styles"

export function NavBar() {
  return (
    <Container>
      <Logo>
        <img src="logo.svg" alt="logo lamadin" />
        <span>lamadin</span>
      </Logo>

      <Icons>
        <img src="/search.svg" alt="search icon" />
        <img src="/app.svg" alt="app icon" />
        <img src="/expand.svg" alt="expand icon" />

        <Notification>
          <img src="/notifications.svg" alt="notification icon" />
          <span>1</span>
        </Notification>

        <User>
          <img src="https://github.com/arthurlopesr.png" alt="user logo" />
          <span>Arthur</span>
        </User>

        <img src="/settings.svg" alt="settings.icon" />
      </Icons>
    </Container>
  )
}
