import { Container, Item, ListItemTitle, Title, StyledLink } from "./styles"
import { menu } from "../../data"

export function Menu() {
  return (
    <Container>
      {menu.map(item => (
        <Item key={item.id}>
          <Title>
            <span className="title">{item.title}</span>
            {item.listItems.map(listItem => (
              <StyledLink to="/" className="listItem" key={listItem.id}>
                <img src={listItem.icon} alt="" />
                <ListItemTitle>{listItem.title}</ListItemTitle>
              </StyledLink>
            ))}
          </Title>
        </Item>
      ))}

    </Container>
  )
}
