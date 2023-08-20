import { topDealUsers } from "../../data";
import { Amaunt, Container, Email, List, ListItem, User, UserName, UserText } from "./styles";

export function TopBox() {
  return (
    <Container>
      <h1>Top Deals</h1>
      <List>
        {topDealUsers.map(user => (
          <ListItem key={user.id}>
            <User>
              <img src={user.img} alt="" />
              <UserText>
                <UserName>{user.username}</UserName>
                <Email>{user.email}</Email>
              </UserText>
            </User>
            <Amaunt>${user.amount}</Amaunt>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}
