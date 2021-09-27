import { Switch, Route } from "react-router-dom";
import { Container } from "components/Container/Container";
import { Navigation } from "components/Navigation/Navigation";
import { WrapperViews } from "components/WrapperViews/WrapperViews";
import { HomeView } from "./views/HomeView";
import { MoviesView } from "./views/MoviesView";
import { NotFoundView } from "./views/NotFoundView";
import { MovieDetailsView } from "./views/MovieDetailsView";

function App() {
  return (
    <Container>
      <Navigation />
      <WrapperViews>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/movies" exact>
            <MoviesView />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </WrapperViews>
    </Container>
  );
}

export default App;
